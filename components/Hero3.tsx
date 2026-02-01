import Image from 'next/image';
import { CONTACT_EMAIL } from '@/config/contact';

const contactInfo = [
  { icon: '/contact-10-1.png', title: 'EMAIL', value: CONTACT_EMAIL },
  { icon: '/contact-10-2.png', title: 'PHONE NUMBER', value: '+233 54 455 5569' },
  { icon: '/contact-10-3.png', title: 'CONTACT HOURS', value: 'MON-SUN, 10:00-18:00' },
];

export default function Hero3() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: "url('/hero-contact.jpg')",
      }}
    >
      <div className="relative z-10 min-h-screen bg-black/20 text-contrast-light">
        <div className="container mx-auto px-6">
          <div className="min-h-screen pt-28 pb-16 text-center flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-cormorant-garamond">Contact Me</h1>
            <p className="max-w-xl mx-auto mb-12 text-sm md:text-base">
              Tell me about your shoot, and I’ll get back within 24 hours (Mon–Sun).
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((item) => {
                const isEmail = item.title === 'EMAIL';
                const isPhone = item.title === 'PHONE NUMBER';
                const isClickable = isEmail || isPhone;

                const content = (
                  <div
                    className={`bg-white/70 rounded-lg p-6 text-mono-1 h-full transition-colors ${
                      isClickable ? 'group-hover:bg-white/90' : ''
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="mx-auto mb-4"
                    />
                    <h3 className="font-semibold mb-2 font-cormorant-garamond text-lg">{item.title}</h3>
                    <p className="text-sm text-mono-2">{item.value}</p>
                  </div>
                );

                if (isEmail) {
                  return (
                    <a key={item.title} href={`mailto:${item.value}`} className="group">
                      {content}
                    </a>
                  );
                }

                if (isPhone) {
                  return (
                    <a key={item.title} href={`tel:${item.value.replace(/\s/g, '')}`} className="group">
                      {content}
                    </a>
                  );
                }

                return <div key={item.title}>{content}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
