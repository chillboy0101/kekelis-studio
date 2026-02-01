const processSteps = [
  {
    step: '1',
    title: 'Get in touch',
    description: 'Share your date and needs. I’ll confirm and send you a quote.',
  },
  {
    step: '2',
    title: 'Plan the session',
    description: 'We choose location, style, outfits. Quick prep guide.',
  },
  {
    step: '3',
    title: 'Shoot day',
    description: 'Calm direction, natural light, real moments.',
  },
  {
    step: '4',
    title: 'Delivery',
    description: 'Edited gallery online. High-res downloads and prints.',
  },
];

export default function Content24() {
  return (
    <section className="bg-base py-12 md:py-24 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 md:mb-14 font-cormorant-garamond">Simple & Stress Free Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-10">
          {processSteps.map((step) => (
            <div key={step.title}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-mono-3 text-mono-1">
                <span className="font-cormorant-garamond text-xl">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-cormorant-garamond">{step.title}</h3>
              <p className="text-mono-2 text-sm max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
