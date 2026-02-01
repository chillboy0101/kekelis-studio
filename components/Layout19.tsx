"use client";
import Image from 'next/image';

const galleryImages = [
  '/WhatsApp-Image-2025-12-28-at-11.49.01-AM.jpeg',
  '/WhatsApp-Image-2025-12-28-at-11.48.57-AM.jpeg',
  '/WhatsApp-Image-2025-12-28-at-11.48.47-AM-1.jpeg',
  '/k7.jpg',
  '/KEKELI-PHOTOGRAPHY-Patronize-2.jpg',
  '/WhatsApp-Image-2025-12-28-at-11.48.42-AM.jpeg',
];

export default function Layout19() {
  return (
    <section className="bg-base py-12 md:py-20 px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-2 font-cormorant-garamond">Featured Photos</h3>
        <p className="text-mono-2 mb-8 md:mb-12 max-w-2xl mx-auto">Here's some of the photographs I've taken, that I'm the most proud of.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={src}
                alt={`Featured photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="no-media-download object-cover group-hover:scale-105 transition-transform duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
