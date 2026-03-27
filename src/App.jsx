import { PIZZAS, CATEGORIES } from "@/data.js";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { About } from "@/sections/About";
import { Menu } from "@/sections/Menu";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Menu pizzas={PIZZAS} categories={CATEGORIES} />
      </main>
    </div>
  );
}

export default App;
