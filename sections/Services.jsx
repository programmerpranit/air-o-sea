import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="sub-heading">Services</p>
        <h3 className="text-bold text-center">We Provides Best Services</h3>

        <div className="grid lg:grid-cols-3">
          <div className="rounded-lg flex  m-4 p-4 bg-gray-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 ">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h5>International Joint Venture Project</h5>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 bg-gray-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p className="">Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 ">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 bg-gray-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
