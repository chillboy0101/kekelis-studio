import Image from 'next/image';

export default function Content20() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-last">
            <Image
              src="/content-20.jpg"
              alt="Testimonial photo"
              width={600}
              height={800}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="text-center md:text-left">
            <Image
              src="/testionial-1-stars.png"
              alt="5 stars rating"
              width={120}
              height={24}
              className="mb-6 mx-auto md:mx-0"
            />
            <p className="text-lg md:text-xl text-mono-1 mb-6">
              "I booked Sarah for a brand photo shoot and got the best content we’ve ever had. She planned the shoot, styled simple sets, and took some amazing photos. Engagement is up, and our site finally feels like us."
            </p>
            <h3 className="text-2xl font-semibold font-cormorant-garamond">Sophie Dines</h3>
            <p className="text-mono-2 text-sm">True Grit Outfitters</p>
          </div>
        </div>
      </div>
    </section>
  );
}
