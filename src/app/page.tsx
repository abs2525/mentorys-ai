import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import AIToolsPreview from "@/components/AIToolsPreview";
import ClientsCarousel from "@/components/ClientsCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <AIToolsPreview />
        <ClientsCarousel />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
