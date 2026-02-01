"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function GetAQuotePage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      kind: 'quote' as const,
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to submit');
    }
  }

  return (
    <main>
      <Header />
      <section className="bg-base px-6 py-12 md:py-16">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-cormorant-garamond text-mono-1">Get a Quote</h1>

          {status === 'success' ? (
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="rounded-md border border-mono-3 bg-white px-6 py-5 text-mono-1">
                <p className="font-semibold">Thank you for reaching out!</p>
                <p className="mt-2">
                  Your quote request has been received successfully. I’ll review the details and get back to you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form className="mt-12 max-w-5xl mx-auto space-y-6" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-mono-1 font-semibold">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="firstName"
                  placeholder="First Name"
                  className="mt-2 w-full rounded-md border border-mono-3 bg-white px-4 py-3"
                />
              </div>
              <div>
                <label className="block text-mono-1 font-semibold">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="lastName"
                  placeholder="Last Name"
                  className="mt-2 w-full rounded-md border border-mono-3 bg-white px-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="block text-mono-1 font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className="mt-2 w-full rounded-md border border-mono-3 bg-white px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-mono-1 font-semibold">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="subject"
                placeholder="Subject"
                className="mt-2 w-full rounded-md border border-mono-3 bg-white px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-mono-1 font-semibold">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="message"
                placeholder="Your Message"
                className="mt-2 min-h-[160px] w-full rounded-md border border-mono-3 bg-white px-4 py-3"
              />
            </div>

            <div>
              {status === 'error' && (
                <p className="mb-4 rounded-md bg-red-50 px-4 py-3 text-red-700">{error ?? 'Failed to send.'}</p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-70"
              >
                {status === 'submitting' && (
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/80 border-t-transparent"
                    aria-hidden="true"
                  />
                )}
                <span>{status === 'submitting' ? 'Request Quote' : 'Request Quote'}</span>
              </button>
            </div>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
