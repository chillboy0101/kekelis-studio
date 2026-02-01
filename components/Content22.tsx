import Image from 'next/image';

export default function Content22() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="md:order-last">
            <Image
              src="/WhatsApp-Image-2025-12-28-at-11.48.57-AM.jpeg"
              alt="Photography session in progress"
              width={600}
              height={800}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 font-cormorant-garamond leading-tight">
              Achieve Top-Tier Results,<br /> Every Single Session
            </h3>
            <p className="text-mono-2 mb-4 text-sm">
              I plan every session so you don’t have to guess: we’ll align on style, location, and outfits, then shoot in flattering light with simple direction that feels natural. I keep the pace calm, help with posing when needed, and leave room for real moments.
            </p>
            <p className="text-mono-2 text-sm">
              The goal is straightforward photos that look like you on a really good day, with clean color and timeless edits. I limit bookings, bring backup gear, and deliver a polished gallery on time—no surprises, just quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
