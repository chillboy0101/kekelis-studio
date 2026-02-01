import Image from 'next/image';

const features = [
  {
    icon: '/icon-heart.png',
    title: 'Fully Dedicated',
    description:
      'I give every session my full attention, planning style, location, and lighting so you can enjoy a smooth, stress-free experience.',
  },
  {
    icon: '/icon-heart.png',
    title: '+200 Satisfied Customers',
    description:
      'Over 200 clients have trusted me to capture their moments. I deliver authentic photos and videos with professional polish every time.',
  },
  {
    icon: '/icon-package.png',
    title: 'Delivery in HD',
    description:
      'Your photos and videos are delivered in high definition, with clean colors and timeless edits. Everything is polished, on time, and ready to enjoy.',
  },
];

export default function Content16() {
  return (
    <section className="py-12 md:py-16 px-6 border-b border-mono-3">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <Image
                src={feature.icon}
                alt=""
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-cormorant-garamond">{feature.title}</h3>
              <p className="text-mono-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
