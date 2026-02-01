import Image from 'next/image';

const testimonials = [
  {
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl in velit consectetur dignissim mollis."',
    avatar: '/testionial-1-1.png',
    name: 'Pauline Gilbert',
    title: 'Founder, Yellow Bird',
  },
  {
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl in velit consectetur dignissim mollis."',
    avatar: '/testionial-1-2.png',
    name: 'Sophie Hanson',
    title: 'Model',
  },
  {
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl in velit consectetur dignissim mollis."',
    avatar: '/testionial-1-3.png',
    name: 'John Doe',
    title: 'CEO, Adstart Studio',
  },
];

export default function Testimonial001() {
  return (
    <section className="py-12 md:py-16 px-6 border-y border-mono-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`text-center ${index < testimonials.length - 1 ? 'pb-8 border-b md:border-b-0 md:pb-0 md:border-r md:pr-12 border-mono-3' : ''}`}>
              <Image
                src="/testionial-1-stars.png"
                alt="5 stars rating"
                width={95}
                height={16}
                className="mx-auto mb-4"
              />
              <p className="text-mono-2 text-sm mb-4">{testimonial.quote}</p>
              <div className="flex items-center justify-center space-x-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-left font-cormorant-garamond">{testimonial.name}</h4>
                  <p className="text-mono-2 text-xs text-left">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
