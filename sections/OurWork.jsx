import Work from "@/components/Work";
import React from "react";

const OurWork = () => {
  return (
    <>
      <div className="p-5">
        <p className="sub-heading">Our Work</p>
        <h3 className="font-bold text-center my-2 text-black">
          Our Goal is the Quality
        </h3>
        <Work name={"Fortune hotel ichalkaranji"} image={"/work/fortune.jpg"} />
        <Work
          name={"Puranik builder sales office"}
          image={"/work/puranik.webp"}
        />
        <Work
          name={"Golden curry - tharmax chowk Chinchwad"}
          image={"/work/golden.jpg"}
        />
        <Work
          name={"Maharaja restaurant sangvi "}
          image={"/work/maharaja.avif"}
        />
        <Work
          name={"Linking barrel "}
          image={"/work/linking.avif"}
        />
        <Work
          name={"Nation 11 restaurant Satara"}
          image={"/work/nation.webp"}
        />
        <Work
          name={"The royal peacock sello - Finland"}
          image={"/work/the-royal-peacock.jpg"}
        />
        <Work
          name={"Hotel citrus Chinchwad"}
          image={"/work/chinchwad.jpeg"}
        />
        <Work
          name={"Hotel purnabhrama MIT collage road Pune"}
          image={"/work/mit.webp"}
        />
        <Work
          name={"Hotel surya Solapur"}
          image={"/work/surya.jpg"}
        />
        <Work
          name={"Hotel signature back side of Phoenix mall"}
          image={"/work/signature.jpg"}
        />
        <Work
          name={"Hotel Qaswa Hills Kholapur"}
          image={"/work/qaswa.jpg"}
        />



      </div>
    </>
  );
};

export default OurWork;
