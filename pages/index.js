import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services/>
      <WhyChooseUs />

      <Footer/>
    </>
  );
}
