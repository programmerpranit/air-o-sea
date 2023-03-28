import Image from "next/image";
import React from "react";

const ImportExport = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="font-bold text-center p-2 m-2 ">
          Import and Export Services
        </h2>

        <div className="flex justify-center flex-col my-5 items-center">
          <Image
            alt="Government Project Image"
            className="rounded-xl z-10"
            width={300}
            height={300}
            src="/GovtProject.jpg"
          />
          <div className="bg-primary w-3/4 h-40 rounded-lg -mt-36 -mr-10 "></div>
        </div>

        <div className="mx-3 space-y-5 mt-10">
          <p className="rounded-r-xl border-l-4  border-l-primary border-2 shadow flex leading-normal font-medium p-4 m-2 ">
            We can assist in export of all materials from India to China, South
            Africa, Dubai etc
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border-2 shadow flex leading-normal font-medium p-4 m-2 ">
            We can analyze the market requirement and provide contacts from
            other country.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border-2 shadow flex leading-normal font-medium p-4 m-2 ">
            In many countries there is huge requirement of Indian Marbal,
            Granite, Textiles, Food etc.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border-2 shadow flex leading-normal font-medium p-4 m-2 ">
            We can take care of End to End export of material provided it passes
            all the required norms of another country.
          </p>
        </div>
      </div>
    </>
  );
};

export default ImportExport;
