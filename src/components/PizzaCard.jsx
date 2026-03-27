import { useState } from "react";
import { AddButton } from "@/components/AddButton";

export const PizzaCard = ({ pizza }) => {
  const [qty, setQty] = useState(1);
  return (
    <div
      key={pizza.id}
      className="flex flex-col border border-border p-7 hover:shadow-[0_8px_40px_rgba(26,18,8,0.1)] -translate-y-0.5 z-10 transition-all duration-200 ease-in"
    >
      <span className="text-5xl mb-4 block">{pizza.emoji}</span>
      <h3 className="text-xl mb-1.5 font-semibold text-dark">{pizza.name}</h3>
      <p className="text-sm text-muted leading-[1.6] mb-5 font-light">
        {pizza.description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-medium text-dark">${pizza.price}</span>
        {/* Pizza quantity */}
        <div className="flex  items-center gap-2">
          <button
            onClick={() => (qty <= 0 ? setQty(0) : setQty((prev) => prev - 1))}
            className="w-7 h-7 border border-border cursor-pointer rounded-xs text-base flex items-center justify-center hover:bg-dark hover:text-cream hover:border-dark transition-all duration-200 ease-in"
          >
            -
          </button>
          <span>{qty}</span>
          <button
            onClick={() => setQty((prev) => prev + 1)}
            className="w-7 h-7 border border-border cursor-pointer rounded-xs text-base flex items-center justify-center hover:bg-dark hover:text-cream hover:border-dark transition-all duration-200 ease-in"
          >
            +
          </button>
        </div>

        {/* Pizza Add button */}
        <AddButton>Add to cart</AddButton>
      </div>
    </div>
  );
};
