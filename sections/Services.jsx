import Accordion from "@/components/Accordion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBarChartFill, BsAirplane } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="flex flex-col my-10">
        <p className="sub-heading">Services</p>
        <h3 className="text-bold text-center">We Provides Best Services</h3>

        <div className="flex flex-wrap justify-center my-10">
          <div className="rounded-lg flex w-full md:w-2/5 gap-5 items-center m-4 p-4 bg-gray-100">
            {/* <Image
              alt=""
              className=""
              src="/demo.png"
              width="100"
              height="50"
            /> */}
            <BsBarChartFill size={60} className={"w-24"} />
            <div className="flex-col flex">
              <h4>EPC</h4>
              <Link href={"/services/epc"}>
                <p className="text-primary font-semibold">Know More</p>
              </Link>
            </div>
          </div>

          <div className="rounded-lg flex w-full gap-5 md:w-2/5 items-center m-4 p-4 bg-gray-100">
            <BsAirplane size={60} className={"w-24"} />

            <div className="flex-col flex">
              <h4>Import and Export Services</h4>

              <Link href={"/services/import-export"}>
                <p className="text-primary font-semibold">Know More</p>
              </Link>
            </div>
          </div>

          <div className="rounded-lg flex w-full gap-5 md:w-2/5 items-center m-4 p-4 bg-gray-100">
            <RiGovernmentLine size={60} className={"w-24"} />
            <div className="flex-col flex">
              <h4>Government Projects</h4>
              <Link href={"/services/government-projects"}>
                <p className="text-primary font-semibold">Know More</p>
              </Link>
            </div>
          </div>

          <div className="rounded-lg flex w-full gap-5 md:w-2/5 items-center m-4 p-4 bg-gray-100">
            <FaHandsHelping size={60} className={"w-24"} />

            <div className="flex-col flex">
              <h4>International Joint Venture Projects</h4>

              <Link href={"/services/international-projects"}>
                <p className="text-primary font-semibold">Know More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
