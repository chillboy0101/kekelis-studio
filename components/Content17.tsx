"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';

type PortfolioItem =
  | {
      type: 'image';
      image: string;
      title: string;
      description: string;
    }
  | {
      type: 'video';
      video: string;
      poster: string;
      title: string;
      description: string;
    };

const portfolioItems: PortfolioItem[] = [
  {
    type: 'image',
    image: '/WhatsApp-Image-2025-12-28-at-11.48.42-AM.jpeg',
    title: 'Event Photographies',
    description: 'From birthdays to corporate events, I capture the key moments, emotions, and details, clean, well-lit, and ready to share.',
  },
  {
    type: 'image',
    image: '/KEKELI-PHOTOGRAPHY-Patronize.jpg',
    title: 'Portraits',
    description: 'Natural portraits with calm direction and flattering light, so you look like yourself, at your best.',
  },
  {
    type: 'video',
    video: '/I-was-blessed-to-have-been-at-Kinky-Experience-and-also-to-have-filmed-Rama-Blak.-I-got-the-opportunity-to-meet-Okyeame-Kwame-and-Lydia-Forson.Kinky-matters.mp4',
    poster: '/KEKELI-PHOTOGRAPHY-Patronize.jpg',
    title: 'Brands',
    description: 'Polished photo and video content for your brand, made to match your style, tell your story, and perform on social media.',
  },
];

export default function Content17() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoPoster, setVideoPoster] = useState<string | null>(null);
  const [showVideoPoster, setShowVideoPoster] = useState(true);

  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (!node) return;
    node.muted = true;
    node.playsInline = true;
    const p = node.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, []);

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight font-cormorant-garamond text-center md:text-left">
            I Specialize in People And Their Stories
          </h2>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-cormorant-garamond">Stories Told for 100+ Clients</h3>
            <p className="text-mono-2 mt-2">
              “Kekeli made the entire shoot feel effortless. The direction was calm, the lighting was perfect, and the final images were even better than I imagined.”
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.title} className="group block text-center">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {item.type === 'video' ? (
                  <div className="relative w-full h-full">
                    {showVideoPoster && videoPoster ? (
                      <img
                        src={videoPoster}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ pointerEvents: 'none' }}
                      />
                    ) : null}
                    <video
                      ref={setVideoRef}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      src={item.video}
                      onPlaying={() => setShowVideoPoster(false)}
                      onPause={() => setShowVideoPoster(true)}
                      onLoadedData={(e) => {
                        const el = e.currentTarget;
                        el.muted = true;
                        el.playsInline = true;

                        if (!videoPoster) {
                          try {
                            const canvas = document.createElement('canvas');
                            canvas.width = el.videoWidth || 720;
                            canvas.height = el.videoHeight || 1280;
                            const ctx = canvas.getContext('2d');
                            if (ctx) {
                              ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
                              const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
                              setVideoPoster(dataUrl);
                            }
                          } catch {
                            // ignore
                          }
                        }

                        const p = el.play();
                        if (p && typeof p.catch === 'function') p.catch(() => {});
                      }}
                    />
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2 font-cormorant-garamond group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-mono-2 mb-4 text-sm">{item.description}</p>
              <Link href="/portfolio" className="text-featured font-semibold group-hover:underline">
                View Portfolio →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
