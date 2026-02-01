import Image from 'next/image';

const teamMembers = [
  {
    image: '/6a3f5d2b-8761-4693-b09b-3722b0c6ab73.jpg',
    name: 'Kekeli',
    role: 'Photograph & Video',
  },
];

export default function Team002() {
  return (
    <section className="bg-mono-4 py-12 md:py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold font-cormorant-garamond">Meet The Team</h2>
          <p className="text-mono-2 mt-3">
            Kekeli is a photographer and videographer who brings creativity and precision to every project, capturing moments that tell your story with care and professionalism.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl mt-4 font-cormorant-garamond">{member.name}</h3>
              <p className="text-mono-2 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
