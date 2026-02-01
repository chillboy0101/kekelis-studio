import Image from 'next/image';

export default function Content10() {
  return (
    <main className="bg-base py-12 md:py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-last">
            <div className="relative aspect-[2/3] max-w-sm mx-auto md:max-w-none">
              <Image
                src="/6a3f5d2b-8761-4693-b09b-3722b0c6ab73.jpg"
                alt="Kekeli, the photographer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 font-cormorant-garamond">Hi, I'm Kekeli!</h2>
            <p className="text-mono-2 mb-4">
              I'm a professional photographer and videographer who loves honest moments and clean, natural light. I work with couples, families, creatives, and brands to tell stories that feel like you. My style is calm, collaborative, and detail-driven: I guide when needed, step back when it matters, and deliver polished images you’ll be proud to share.
            </p>
            <p className="text-mono-2 mb-6">
              From planning and mood boards to the final gallery, I keep the process simple and stress free. If you’re looking for timeless photos and videos with a modern touch, let’s create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="/about"
                className="btn-pill-primary w-full sm:w-auto"
              >
                Read More About Me
              </a>
              <a href="/contact" className="text-featured hover:underline font-semibold">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
