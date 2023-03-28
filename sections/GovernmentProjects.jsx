import Image from "next/image";
import React from "react";

const GovernmentProjects = () => {
  return (
    <>
      <div className="max-w-4xl m-auto text-center my-10">
        <h2 className="font-bold text-center p-2 m-2">Government Projects</h2>
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
        <p className="p-4 m-2 mt-10">
          Airosea is engaged with the government to help build a workforce in
          the country by providing necessary skill sets to people in their
          respective fields of work. Airosea is actively participating in
          government programs centered around delivering education and training
          to schools, beneficiaries of government programs, members of
          underprivileged societies and employees of government organizations.
        </p>
        <p className="m-2 ">
          Airosea has been working closely with the central and state
          governments, PSUs and other government organizations in India, to help
          them tackle their manpower challenges.
        </p>
      </div>
    </>
  );
};

export default GovernmentProjects;
