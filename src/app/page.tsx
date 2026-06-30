import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <About />
        <Services />
        <PortfolioGrid />
        <BeforeAfter />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
