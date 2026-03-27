import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
