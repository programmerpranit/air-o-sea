import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services/>
      <WhyChooseUs />

      <div className="fixed z-50 bottom-5 right-5">
        <a href="">
          <Image className="m-auto mb-3 bg-white border rounded-full p-2" src={'/call.png'} width={40} height={40} />
        </a>
        <a href="">
          <Image src={'/whatsapp.png'} width={50} height={50} />
        </a>
      </div>
    </>
  );
}
