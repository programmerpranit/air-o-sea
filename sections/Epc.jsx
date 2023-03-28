import Image from "next/image";
import React from "react";

const Epc = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <h2 className="font-bold text-center p-2 m-2">EPC</h2>
      <div className=" m-2 p-2">
        <div className="flex flex-wrap">
          <div className="max-w-3xl m-auto w-full">
            <ul
              className="flex mb-0 list-none cursor-pointer flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <p
                  className={
                    "text-xs font-bold  uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-black border-2 border-primary "
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    setOpenTab(1);
                  }}
                >
                  E
                </p>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <p
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-black border-2 border-primary "
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    setOpenTab(2);
                  }}
                >
                  P
                </p>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <p
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-black border-2 border-primary "
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    setOpenTab(3);
                  }}
                >
                  C
                </p>
              </li>
            </ul>

            <div className="relative flex flex-col text-center min-w-0 break-words bg-white w-full mb-6  rounded">
              
                <div className={openTab === 1 ? "block border rounded-lg shadow-lg" : "hidden"} id="link1">
                  <h4 className="text-center my-5">Engineering</h4>
                  <div className="flex justify-center items-center m-2">
                    <Image
                      className="border-2 rounded-2xl"
                      width={200}
                      height={200}
                      src="/engineering_1.jpeg"
                      alt="eng"
                    />
                  </div>
                  <p className="p-1 m-2">
                    We have the expertise to take the End to End consultancy
                    responsibility of mega projects.
                  </p>
                  <p className="m-2 p-1">
                    We assist in design, sourcing, procurement, development,
                    testing and delivery.
                  </p>
                  <p className="m-2 p-1">
                    Based on the requirements we have successfully delivered
                    projects for Hospitals, Hotels, Restaurants, School, Colleges, Bungalows, Flats & Townships
                    
                  </p>
                </div>
                <div className={openTab === 2 ? "block border rounded-lg shadow-lg" : "hidden"} id="link2">
                  <h4 className="text-center my-5">Procurement</h4>
                  <div className="flex justify-center items-center m-2">
                    <Image
                      className="border-2 rounded-2xl"
                      width={200}
                      height={200}
                      src="/procurement.jpg"
                    />
                  </div>
                  <p className="m-2 p-2">
                    Full service interior design consulting (visioning, design,
                    specification, implementation)
                  </p>
                  <p className="m-2 p-2">
                    FF&E (furniture, fixtures, and equipment) selection and
                    specification
                  </p>
                  <p className="m-2 p-2">
                    OS&E (operating, supplies, and equipment) selection and
                    specification
                  </p>
                </div>
                <div className={openTab === 3 ? "block border rounded-lg shadow-lg" : "hidden"} id="link3">
                  <h4 className="text-center my-5">Consultancy</h4>
                  <div className="flex justify-center items-center m-2">
                    <Image
                      className="border-2 rounded-2xl"
                      width={300}
                      height={300}
                      src="/consulting.png"
                      alt=""
                    />
                  </div>
                  <p className="p-2 m-2">
                    We help our customers to navigate the importing goods which
                    give them comfort of smooth sailing.
                  </p>
                  <p className="p-2 m-2">
                    We search all the different manufacturers throughout China
                    and choose the unique product.
                  </p>
                  <p className="p-2 m-2">
                    We help people to make international business in their
                    native language.
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Epc;
