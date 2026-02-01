export default function Contact013() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 font-cormorant-garamond">Available for Hire in Accra</h2>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Ghana location map"
            src="https://www.google.com/maps?q=Accra%2C%20Ghana&z=7&output=embed"
            className="w-full h-[400px] md:h-[600px] border-0"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
