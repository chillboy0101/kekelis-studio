"use client";
import Image from 'next/image';
import { useCallback, useRef } from 'react';

const galleryImages = [
  '/6a3f5d2b-8761-4693-b09b-3722b0c6ab73.jpg',
  '/WhatsApp-Image-2025-12-28-at-11.48.42-AM.jpeg',
  '/WhatsApp-Image-2025-12-28-at-11.48.47-AM-1.jpeg',
  '/WhatsApp-Image-2025-12-28-at-11.48.52-AM-1.jpeg',
  '/WhatsApp-Image-2025-12-28-at-11.48.57-AM.jpeg',
  '/WhatsApp-Image-2025-12-28-at-11.49.01-AM.jpeg',
  '/k2.jpg',
  '/KEKELI-PHOTOGRAPHY-Patronize.jpg',
];

const reelsVideos = [
  '/Shot-it.mp4',
  '/I-was-blessed-to-have-been-at-Kinky-Experience-and-also-to-have-filmed-Rama-Blak.-I-got-the-opportunity-to-meet-Okyeame-Kwame-and-Lydia-Forson.Kinky-matters.mp4',
  '/Ghana-Cedi-@-60-Congratulations-Ghana-and-God-Bless-Ghana-@kekeli_photography_.mp4',
];

type PortfolioMediaItem =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string };

const portfolioImages: PortfolioMediaItem[] = galleryImages.map(
  (src): PortfolioMediaItem => ({ type: 'image', src })
);
const portfolioVideos: PortfolioMediaItem[] = [
  ...reelsVideos.map((src): PortfolioMediaItem => ({ type: 'video', src })),
  { type: 'video', src: '/Instagram.mp4' } as const,
];

function interleaveMedia(images: PortfolioMediaItem[], videos: PortfolioMediaItem[]) {
  const mixed: PortfolioMediaItem[] = [];
  const maxLen = Math.max(images.length, videos.length);
  for (let i = 0; i < maxLen; i++) {
    if (images[i]) mixed.push(images[i]);
    if (videos[i]) mixed.push(videos[i]);
  }
  return mixed;
}

const portfolioMedia = interleaveMedia(portfolioImages, portfolioVideos);

function AutoPlayVideo({ src, className }: { src: string; className: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const setRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (!node) return;
    node.muted = true;
    node.playsInline = true;
    const p = node.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, []);

  return (
    <video
      ref={setRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      src={src}
      onLoadedData={(e) => {
        const el = e.currentTarget;
        el.muted = true;
        el.playsInline = true;
        const p = el.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }}
    />
  );
}

export default function Layout20() {
  return (
    <section className="bg-mono-4 py-12 md:py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 font-cormorant-garamond">Portfolio</h1>
        <p className="text-mono-2 mb-8 md:mb-12">Your story, beautifully lit and carefully edited.</p>

        <p className="text-mono-2/80 text-sm mb-6">
          Media on this site is web-optimized for fast loading. Final delivered files are provided in high resolution.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {portfolioMedia.map((item, index) => (
            <div
              key={`${item.type}-${item.src}-${index}`}
              className="group overflow-hidden rounded-lg bg-black shadow-lg"
              onContextMenu={(e) => e.preventDefault()}
            >
              <div className="relative aspect-[2/3]">
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={`Portfolio image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover no-media-download group-hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                ) : (
                  <AutoPlayVideo
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
