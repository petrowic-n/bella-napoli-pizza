import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data.js";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-dark border-b border-border  z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-8">
        {/* Header Logo */}
        <a href="#" className="text-cream text-xl tracking-tight">
          Bella <span className="text-gold italic">Napoli</span>
        </a>
        {/* Header Items */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="uppercase text-muted text-md hover:text-cream transition-colors duration-200 ease-in"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Header Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-red px-2 py-2.5 rounded-xl hover:bg-red-light transition-all duration-300 ease-in cursor-pointer">
            <span>🛒</span>
            <span className="text-cream">Cart</span>
            <span className="bg-gold text-dark text-xs font-bold w-4.5 h-4.5 inline-flex items-center justify-center rounded-full">
              0
            </span>
          </div>
          {/* Menu Button*/}
          <Menu
            className="md:hidden text-cream cursor-pointer"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className={`absolute top-26 right-0 w-full py-4 px-4 bg-cream shadow-lg`}>
          {/* Close Button */}
          <X
            className="ml-auto text-dark cursor-pointer"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Mobile Links */}
          <ul className="flex flex-col gap-4 items-start mt-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="uppercase text-dark text-lg hover:text-muted transition-colors duration-200 ease-in"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
