import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Partners />
      <Cta />
      <Footer />
    </div>
  );
}
