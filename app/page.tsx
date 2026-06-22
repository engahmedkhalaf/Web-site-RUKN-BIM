import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
