import LogoShowcase from "./components/LogoShowCase";
import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/experience";
import FeatureCards from "./sections/FeatureCard";
import Footer from "./sections/Footer";
import Hero from "./sections/hero";
import AppShowcase from "./sections/showcase-section";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      {/* Display company Logo I already collaborate with */}
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
