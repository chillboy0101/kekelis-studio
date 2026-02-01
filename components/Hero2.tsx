export default function Hero2() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: "url('/hero-about.jpg')",
      }}
    >
      <div className="relative z-10 min-h-screen bg-black/20 text-contrast-light">
        <div className="container mx-auto px-6">
          <div className="min-h-screen pt-28 pb-16 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-cormorant-garamond">Hello, I'm Kekeli!</h1>
            <p className="max-w-xl mb-8 text-sm md:text-base">
              I turn real moments into polished photos with calm direction, great light, and a simple process. I work with portraits, couples, families, and brands, delivering thoughtfully edited galleries that look true to life and age well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/portfolio"
                className="btn-pill-outline text-center"
              >
                View Portfolio
              </a>
              <a
                href="/book-a-session"
                className="btn-pill-primary text-center"
              >
                Book a Session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
