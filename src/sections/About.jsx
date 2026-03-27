export const About = () => {
  return (
    <section id="ourstory">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* About Image */}
          <div className="bg-dark relative overflow-hidden flex items-center justify-center min-h-120">
            <div className="text-[160px] absolute opacity-5 select-none">🍕</div>
            <div className="flex flex-col items-center text-center text-cream">
              <span className="text-base uppercase text-muted">EST.</span>
              <span className="text-7xl font-bold text-gold">1987</span>
            </div>
          </div>

          {/* About Text */}
          <div className="min-h-120 flex flex-col justify-center md:pl-8">
            <span className="text-base font-medium text-red mb-4">Our Story</span>
            <h2 className="text-4xl md:text-5xl text-dark font-bold mb-5">
              Three generations <br /> of the same dough.
            </h2>
            <p className="text-base text-muted leading-[1.7] font-light">
              Giuseppe Russo opened a hole-in-the-wall in Naples with one oven,
              one recipe, and a stubborn refusal to compromise. His
              granddaughter runs the kitchen now — same dough starter, same
              sauce, same argument about the right thickness of mozzarella.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
