import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Lab } from "./components/Lab";
import { News } from "./components/News";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { Teaching } from "./components/Teaching";
import { navItems } from "./data/portfolio";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggle } = useTheme();
  const activeSection = useScrollSpy(navItems.map((n) => n.id));

  return (
    <>
      <Header activeSection={activeSection} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Teaching />
        <Lab />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
