import { activeBrand } from "./brand";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { Support } from "./components/Support";
import { Network } from "./components/Network";
import { Partners } from "./components/Partners";
import { Stories } from "./components/Stories";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  const brand = activeBrand;
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav brand={brand} />
      <main>
        <Hero brand={brand} />
        <Method brand={brand} />
        <Support brand={brand} />
        <Network brand={brand} />
        <Partners brand={brand} />
        <Stories brand={brand} />
        <About brand={brand} />
      </main>
      <Footer brand={brand} />
    </div>
  );
}
