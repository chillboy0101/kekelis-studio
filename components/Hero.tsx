export default function Hero() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-[50%_25%] lg:bg-[50%_32%] bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: "url('/hero-home.jpg')",
      }}
    >
      <div className="relative z-10 min-h-screen bg-black/20 text-contrast-light">
        <div className="container mx-auto px-6">
          <div className="min-h-screen pt-28 pb-16 text-center flex flex-col items-center justify-center">
            <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-cormorant-garamond">
              Professional Videographer and Photographer for Brands, Events and People
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xs sm:max-w-none sm:w-auto">
              <a
                href="/get-a-quote"
                className="btn-pill-primary w-full sm:w-auto text-center"
              >
                {'Get a Free Quote \u2192'}
              </a>
              <a
                href="/portfolio"
                className="btn-pill-outline w-full sm:w-auto text-center"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
