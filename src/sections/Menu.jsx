import { useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PizzaCard } from "../components/PizzaCard";

export const Menu = ({ categories, pizzas }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === activeCategory);

  return (
    <section id="menu" className="mt-24">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl text-dark font-bold">The Menu</h2>
          {/* Tabs */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        {/* Pizza Cols */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-4">
          {filtered.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
};
