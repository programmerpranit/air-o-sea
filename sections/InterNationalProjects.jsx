import Accordion from "@/components/Accordion";
import Image from "next/image";
import React from "react";

const InterNationalProjects = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="font-bold text-center p-2 m-2">
          International Joint Venture projects
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
        <div className="m-2 space-y-6 mt-5 ">
          <p className="rounded-r-xl border-l-4  border-l-primary border-2 shadow flex leading-normal font-medium p-4 m-2 ">
            Air O Sea has made contract with One of the largest Energy
            Engineering company in China. This has been highlighted in Chinese
            News papers.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border shadow flex leading-normal font-medium p-4 m-2 ">
            Also Air O Sea is in process of making contract with largest
            Hands-free manufacturer in China.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border shadow flex leading-normal font-medium p-4 m-2 ">
            We assist manufacturers from China to work with Indian companies to
            work jointly.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border shadow flex leading-normal font-medium p-4 m-2 ">
            This service helps organization to easily stand in Market and
            perform in aggressively.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border shadow flex leading-normal font-medium p-4 m-2 ">
            Join Venture has also helped organizations to Stand, Explore and
            Spread in other country.
          </p>
          <p className="rounded-r-xl border-l-4  border-l-primary border shadow flex leading-normal font-medium p-4 m-2 ">
            There are many motivations that lead to the formation of
            International Joint Venture (IJV).
          </p>
        </div>
      </div>

      <div className="flex flex-col p-3 m-2 my-10">
        <h3 className="text-left">They Include:</h3>
        <Accordion
          title={"Risk Sharing"}
          content="Risk sharing is a common reason to form an IJV, particularly, in highly capital intensive industries and in industries where the high costs of product development equal a high likelihood of failure of any particular product."
        />
        <Accordion
          title="Economies of Scale"
          content="If an industry have high fixed costs, an IJV with a larger company can provide the economies of scale necessary to compete globally and can be an effective way by which two companies can pool resources and achieve critical mass."
        />
        <Accordion
          title="Market Access"
          content="For companies that lack a basic understanding of customers and the relationship/infrastructure to distribute their products to customers, forming an IJV with the right partner can provide instant access to established, efficient and effective distribution channels and receptive customer bases. This is important to a company because creating new distribution channels and identifying new customer bases can be extremely difficult, time consuming and expensive activities."
        />
        <Accordion
          title="Geographical Constraints"
          content="When there is an attractive business opportunity in a foreign market, partnering with a local company is attractive to a foreign company because penetrating a foreign market can be difficult both because of a lack of experience in such market and local barriers to foreign-owned or foreign-controlled companies."
        />
        <Accordion
          title="Funding Constraints"
          content="When a company is confronted with high up-front development costs, finding the right JVP can provide necessary financing and credibility with third parties."
        />
        <Accordion
          title="Acquisition Barriers; Prelude to Acquisition"
          content="When a company wants to acquire another but cannot due to cost, size, or geographical restrictions or legal barriers, teaming up with a JVP is an attractive option. The JV is substantially less costly and thus less risky than complete acquisitions, and is sometimes used as a first step to a complete acquisition with the JVP. Such an arrangement allows the purchaser the flexibility to cut its losses if the investment proves less fruitful than anticipated or to acquire the remainder of the company under certain circumstances. International Joint Ventures (IJVs) are becoming increasingly popular in the business world as they aid companies to form strategic alliances."
        />
      </div>
    </>
  );
};

export default InterNationalProjects;
