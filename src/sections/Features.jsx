import { FEATURES } from "@/data.js";

const features = FEATURES;

export const Features = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-cream border-b border-border">
          {features.map((feat, i) => (
            <div
              key={i}
              className=" px-10 py-8 border-r border-l border-b border-border hover:bg-border transition-all duration-300 ease-in"
            >
              <span className="text-3xl mb-4 block">{feat.icon}</span>
              <h3 className="text-2xl text-dark mb-2">{feat.title}</h3>
              <p className=" text-base text-muted leading-[1.6] font-light">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
