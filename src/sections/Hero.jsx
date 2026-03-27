export const Hero = () => {
  return (
    <section className="min-h-screen bg-dark relative flex items-center justify-center">
      <div className="hero-bg" />
      <div className="hero-pattern" />
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 max-w-275">
        {/* Hero label */}
        <div className="hero-label flex items-center gap-2.5">
          <span className=" text-gold text-sm md:text-lg tracking-widest  font-medium uppercase">
            Naples · Italy · Since 1987
          </span>
        </div>
        <div className="hero-pizza">🍕</div>

        {/* Hero Heading */}
        <h1 className="text-cream font-bold text-5xl md:text-6xl mt-5 mb-8">
          Pizza <span className="text-gold italic">crafted</span> <br /> with
          soul.
        </h1>
        {/* Hero text */}
        <p className="text-lg leading-[1.7] text-muted max-w-115 mb-11 font-light">
          Wood-fired in our hand-built oven, with dough that's been rising since
          yesterday and tomatoes from our family's grove in Campania.
        </p>
        {/* Hero buttons */}
        <div className="md:flex items-center gap-4">
          <button className="btn-primary block mb-4">
            <a href="#menu">Order Now</a>
          </button>
          <button className="btn-secondary mb-4">
            <a href="#ourstory">Our Story</a>
          </button>
        </div>
      </div>
    </section>
  );
};
