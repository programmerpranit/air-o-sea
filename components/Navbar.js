import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-white w-full rounded-b-lg p-3 py-5 z-50">
        <div className="flex md:w-3/4 m-auto justify-between items-center">
          <div className="logo">
            <Link href={"/"}>
              {/* <h4>Air O Sea</h4> */}
              <Image src={'/air-o-sea-logo.png'} width={100} height={70} alt='logo' />
            </Link>
          </div>
          <div
            className={`links flex max-md:fixed  ${
              toggle
                ? "flex-col w-2/3  right-0 text-center animate-fade fixed top-16 bg-white"
                : "max-md:hidden"
            }`}
          >
            <Link href={"/"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-blue-500">
                Home
              </p>
            </Link>

            <Link href={"/about"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-blue-500">
                About Us
              </p>
            </Link>

            <Link href={"/services"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-blue-500">
                Services
              </p>
            </Link>
          </div>
          <div
            className="hamburger md:hidden mr-5"
            onClick={() => setToggle(!toggle)}
          >
            <div className="line w-5 mb-1 rounded bg-black h-0.5"></div>
            <div className="line w-5 mb-1 rounded bg-black h-0.5"></div>
            <div className="line w-5 mb-1 rounded bg-black h-0.5"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
