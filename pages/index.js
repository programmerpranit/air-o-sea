import Aboutus from "@/components/Aboutus";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import { Main } from "next/document";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col h-screen justify-between">
        <Navbar />
        <Homepage />
        <Aboutus />
        <Center />
        <Footer />
        
      </div>
      
    </>
  );
}
