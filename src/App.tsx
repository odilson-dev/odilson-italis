import LogoShowcase from "./components/LogoShowCase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCard";
import Hero from "./sections/hero";
import AppShowcase from "./sections/showcase-section";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      {/* Display company Logo I already collaborate with */}
      <LogoShowcase />
      <FeatureCards />
    </>
  );
}

export default App;
