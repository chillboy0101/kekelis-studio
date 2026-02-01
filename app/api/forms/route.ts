import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/config/contact';

export const runtime = 'nodejs';

type FormKind = 'quote' | 'booking';

type BasePayload = {
  kind: FormKind;
  firstName: string;
  lastName: string;
  email: string;
};

type QuotePayload = BasePayload & {
  kind: 'quote';
  subject: string;
  message: string;
};

type BookingPayload = BasePayload & {
  kind: 'booking';
  phone: string;
  sessionType: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  budget: string;
  notes?: string;
};

type Payload = QuotePayload | BookingPayload;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function defaultSmtpConfigForUser(user: string) {
  const u = user.toLowerCase();
  if (u.endsWith('@gmail.com') || u.endsWith('@googlemail.com')) {
    return { host: 'smtp.gmail.com', port: 465 };
  }
  if (u.endsWith('@outlook.com') || u.endsWith('@hotmail.com') || u.endsWith('@live.com')) {
    return { host: 'smtp-mail.outlook.com', port: 587 };
  }
  if (u.endsWith('@yahoo.com')) {
    return { host: 'smtp.mail.yahoo.com', port: 465 };
  }
  return null;
}

function toTextBody(payload: Payload) {
  const heading = payload.kind === 'quote' ? 'New Quote Request' : 'New Booking Request';
  const common = [
    `You've received a new ${payload.kind} submission.`,
    '----------------------------------------',
    `First Name: ${payload.firstName}`,
    `Last Name: ${payload.lastName}`,
    `Email: ${payload.email}`,
  ];

  if (payload.kind === 'quote') {
    return [
      heading,
      '========================================',
      ...common,
      `Subject: ${payload.subject}`,
      '----------------------------------------',
      'Message:',
      payload.message,
    ].join('\n\n');
  }

  return [
    heading,
    '========================================',
    ...common,
    `Phone: ${payload.phone}`,
    `Session Type: ${payload.sessionType}`,
    `Preferred Date: ${payload.preferredDate}`,
    `Preferred Time: ${payload.preferredTime}`,
    `Location: ${payload.location}`,
    `Budget: ${payload.budget}`,
    '----------------------------------------',
    'Additional Notes:',
    payload.notes ?? 'N/A',
  ].join('\n\n');
}

function toHtmlBody(payload: Payload) {
  const heading = payload.kind === 'quote' ? 'New Quote Request' : 'New Booking Request';
  const fields: { label: string; value: string | undefined }[] = [
    { label: 'First Name', value: payload.firstName },
    { label: 'Last Name', value: payload.lastName },
    { label: 'Email', value: payload.email },
  ];

  if (payload.kind === 'quote') {
    fields.push({ label: 'Subject', value: payload.subject });
    fields.push({ label: 'Message', value: payload.message });
  } else {
    fields.push({ label: 'Phone', value: payload.phone });
    fields.push({ label: 'Session Type', value: payload.sessionType });
    fields.push({ label: 'Preferred Date', value: payload.preferredDate });
    fields.push({ label: 'Preferred Time', value: payload.preferredTime });
    fields.push({ label: 'Location', value: payload.location });
    fields.push({ label: 'Budget', value: payload.budget });
    fields.push({ label: 'Additional Notes', value: payload.notes });
  }

  const styles = {
    body: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; color: #333;`,
    h1: `font-size: 24px; color: #111; margin-bottom: 20px;`,
    table: `width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px;`,
    th: `text-align: left; padding: 12px; border-bottom: 1px solid #ddd; color: #555; font-weight: 600;`,
    td: `padding: 12px; border-bottom: 1px solid #ddd;`,
    messageContainer: `margin-top: 30px;`,
    messageHeading: `font-size: 18px; font-weight: 600; margin-bottom: 10px;`,
    message: `white-space: pre-wrap; background-color: #f7f7f7; padding: 15px; border-radius: 5px;`,
  };

  const tableRows = fields
    .map(({ label, value }) => {
      if (label === 'Message' || label === 'Additional Notes') return ''; // Handle separately
      return `<tr><th style="${styles.th}">${label}</th><td style="${styles.td}">${value || 'N/A'}</td></tr>`;
    })
    .join('');

  const messageField = fields.find((f) => f.label === 'Message' || f.label === 'Additional Notes');

  return `
    <div style="${styles.body}">
      <h1 style="${styles.h1}">${heading}</h1>
      <p>You've received a new submission from your website form.</p>
      <table style="${styles.table}">
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      ${
        messageField && messageField.value
          ? `
        <div style="${styles.messageContainer}">
          <h2 style="${styles.messageHeading}">${messageField.label}</h2>
          <p style="${styles.message}">${messageField.value}</p>
        </div>
      `
          : ''
      }
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<Payload>;

    if (!payload.kind || (payload.kind !== 'quote' && payload.kind !== 'booking')) {
      return NextResponse.json({ ok: false, error: 'Invalid kind' }, { status: 400 });
    }

    const firstName = String(payload.firstName ?? '').trim();
    const lastName = String(payload.lastName ?? '').trim();
    const email = String(payload.email ?? '').trim();

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (payload.kind === 'quote') {
      const subject = String((payload as Partial<QuotePayload>).subject ?? '').trim();
      const message = String((payload as Partial<QuotePayload>).message ?? '').trim();

      if (!subject || !message) {
        return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
      }
    }

    if (payload.kind === 'booking') {
      const p = payload as Partial<BookingPayload>;
      const required = [
        ['phone', p.phone],
        ['sessionType', p.sessionType],
        ['preferredDate', p.preferredDate],
        ['preferredTime', p.preferredTime],
        ['location', p.location],
        ['budget', p.budget],
      ] as const;

      const missing = required.filter(([, v]) => !String(v ?? '').trim()).map(([k]) => k);
      if (missing.length) {
        return NextResponse.json(
          { ok: false, error: `Missing required fields: ${missing.join(', ')}` },
          { status: 400 },
        );
      }
    }

    const smtpUser = requireEnv('SMTP_USER');
    const smtpPass = requireEnv('SMTP_PASS');

    const defaults = defaultSmtpConfigForUser(smtpUser);
    const smtpHost = process.env.SMTP_HOST || defaults?.host;
    if (!smtpHost) {
      throw new Error('Missing environment variable: SMTP_HOST (or provide a known SMTP_USER like @gmail.com)');
    }

    const smtpPortRaw = process.env.SMTP_PORT || (defaults ? String(defaults.port) : '');
    const smtpPort = Number(smtpPortRaw);
    if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
      throw new Error('Invalid environment variable: SMTP_PORT');
    }

    const from = process.env.SMTP_FROM || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeKind = payload.kind.toUpperCase();
    const subjectLine = `Kekeli's Studio — [${safeKind}] ${firstName} ${lastName}`;

    await transporter.sendMail({
      from,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: subjectLine,
      text: toTextBody(payload as Payload),
      html: toHtmlBody(payload as Payload),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
