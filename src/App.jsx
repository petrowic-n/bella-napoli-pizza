import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { About } from "@/sections/About";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
    </div>
  );
}

export default App;
