import Image from 'next/image';

export default function Cta006({
  showButton = true,
  buttonHref = '/book-a-session',
  buttonLabel = 'Book a Session →',
}: {
  showButton?: boolean;
  buttonHref?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="relative py-16 md:py-20 px-6 text-contrast-light">
      <Image
        src="/cta-006.jpg"
        alt="Background image for call to action"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="relative z-10 container mx-auto">
        <div
          className={`grid ${showButton ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-8 items-center text-center ${showButton ? 'md:text-left' : ''}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-cormorant-garamond">
            Ready to Book
            <br />
            Your Session?
          </h2>
          {showButton && (
            <div className="flex justify-center md:justify-end">
              <a
                href={buttonHref}
                className="btn-pill-primary w-full sm:w-auto"
              >
                {buttonLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
