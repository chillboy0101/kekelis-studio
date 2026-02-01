import Link from 'next/link';

export default function HomeSeo() {
  return (
    <section className="bg-base py-12 md:py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold font-cormorant-garamond text-mono-1">
            Kekeli&apos;s Studio — Photographer &amp; Videographer in Accra, Ghana
          </h2>
          <p className="mt-4 text-mono-2 text-sm sm:text-base">
            Kekeli&apos;s Studio creates professional photography and videography for events, portraits, and brands.
            If you&apos;re looking for a reliable photographer or videographer in Accra, we help you plan the shoot,
            direct on the day, and deliver clean edits that are ready to share.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-mono-3 bg-white p-6">
            <h3 className="text-xl sm:text-2xl font-semibold font-cormorant-garamond text-mono-1">Services</h3>
            <ul className="mt-4 space-y-2 text-mono-2 text-sm sm:text-base">
              <li>Event photography &amp; videography (birthdays, corporate events, celebrations)</li>
              <li>Portrait sessions (individuals, couples, creatives)</li>
              <li>Brand content (product, lifestyle, social media reels)</li>
              <li>Highlights &amp; behind-the-scenes coverage</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link href="/portfolio" className="btn-pill-primary">
                View Portfolio
              </Link>
              <Link href="/contact" className="btn-pill-outline">
                Contact
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-mono-3 bg-white p-6">
            <h3 className="text-xl sm:text-2xl font-semibold font-cormorant-garamond text-mono-1">How to Book</h3>
            <p className="mt-4 text-mono-2 text-sm sm:text-base">
              Share your date, location, and what you want to capture. We’ll confirm availability and recommend the best
              package for your shoot.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link href="/book-a-session" className="btn-pill-primary">
                Book a Session
              </Link>
              <Link href="/get-a-quote" className="btn-pill-outline">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold font-cormorant-garamond text-mono-1 text-center">
            Frequently Asked Questions
          </h3>
          <div className="mt-6 space-y-3">
            <details className="rounded-lg border border-mono-3 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-mono-1">Do you work outside Accra?</summary>
              <p className="mt-3 text-mono-2 text-sm sm:text-base">
                Yes. Accra is the main service area, but we can travel depending on the project and schedule.
              </p>
            </details>
            <details className="rounded-lg border border-mono-3 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-mono-1">How fast is delivery?</summary>
              <p className="mt-3 text-mono-2 text-sm sm:text-base">
                Delivery depends on the project type. You&apos;ll get an estimated timeline during booking, and we keep you
                updated throughout the edit.
              </p>
            </details>
            <details className="rounded-lg border border-mono-3 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-mono-1">Can I get a quote first?</summary>
              <p className="mt-3 text-mono-2 text-sm sm:text-base">
                Yes. Use the quote form and include the shoot type, date, and location so we can respond quickly.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
