import Accordion from "@/components/Accordion";
import { Tabs } from "@/components/Tabs";
import Image from "next/image";
import React from "react";

const Services = () => {
  const color = "pink";
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-col m-2 ">
        <div>
          <h2 className="font-bold text-center p-2 m-2">EPC</h2>
          <div className=" m-2 p-2">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-black bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      E
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-black bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      P
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                          ? "text-black bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      C
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
                  <div className="flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <h4 className="text-center">Engineering</h4>
                        <div className="flex justify-center items-center m-2">
                          <Image
                            className="border-2 rounded-2xl"
                            width={200}
                            height={200}
                            src="/engineering_1.jpeg"
                          />
                        </div>
                        <p className="p-2 m-2">
                          We have the expertise to take the End to End
                          consultancy responsibility of mega projects.
                        </p>
                        <p className="m-2 p-2">
                          We assist in design, sourcing, procurement,
                          development, testing and delivery.
                        </p>
                        <p className="m-2 p-2">
                          Based on the requirements we have successfully
                          delivered projects for
                          <ul className="list-disc">
                            <li>Hospitals</li>
                            <li>Hotels, Restaurants</li>
                            <li>School, Colleges </li>
                            <li>Bungalows, Flats & Townships</li>
                          </ul>
                        </p>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <h4 className="text-center">Procurement</h4>
                        <div className="flex justify-center items-center m-2">
                          <Image
                            className="border-2 rounded-2xl"
                            width={200}
                            height={200}
                            src="/procurement.jpg"
                          />
                        </div>
                        <p className="m-2 p-2">
                          Full service interior design consulting (visioning,
                          design, specification, implementation)
                        </p>
                        <p className="m-2 p-2">
                          FF&E (furniture, fixtures, and equipment) selection
                          and specification
                        </p>
                        <p className="m-2 p-2">
                          OS&E (operating, supplies, and equipment) selection
                          and specification
                        </p>
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <h4 className="text-center">Consultancy</h4>
                        <div className="flex justify-center items-center m-2">
                          <Image
                            className="border-2 rounded-2xl"
                            width={300}
                            height={300}
                            src="/consulting.png"
                          />
                        </div>
                        <p className="p-2 m-2">
                          We help our customers to navigate the importing goods
                          which give them comfort of smooth sailing.
                        </p>
                        <p className="p-2 m-2">
                          We search all the different manufacturers throughout
                          China and choose the unique product.
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
          </div>
        </div>
        <div>
          <h2 className="font-bold text-center p-2 m-2">
            International Joint Venture projects
          </h2>
          <div className="m-2 space-y-4">
            <h6 className="rounded-xl flex  p-4 m-2 bg-gray-100">
              Air O Sea has made contract with One of the largest Energy
              Engineering company in China. This has been highlighted in Chinese
              News papers.
            </h6>
            <h6 className="p-4 m-2 rounded-xl  border-2">
              Also Air O Sea is in process of making contract with largest
              Hands-free manufacturer in China.
            </h6>
            <h6 className="rounded-xl flex  p-4 m-2 bg-gray-100">
              We assist manufacturers from China to work with Indian companies
              to work jointly.
            </h6>
            <h6 className="p-4 m-2 rounded-xl  border-2">
              This service helps organization to easily stand in Market and
              perform in aggressively.
            </h6>
            <h6 className="rounded-xl flex  p-4 m-2 bg-gray-100">
              Join Venture has also helped organizations to Stand, Explore and
              Spread in other country.
            </h6>
            <h6 className="p-4 m-2 rounded-xl  border-2">
              There are many motivations that lead to the formation of
              International Joint Venture (IJV).
            </h6>
          </div>
        </div>
        <div className="flex flex-col p-3 m-2">
          <h4 className="text-left  ">They Include:</h4>
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
        <div>
          <h2 className="font-bold text-center p-2 m-2">Government Projects</h2>
          <div className="flex justify-center items-center">
            <Image
              alt="Government Project Image"
              className="rounded-xl"
              width={300}
              height={300}
              src="/GovtProject.jpg"
            />
          </div>
          <p className="p-4 m-2 text-left">
            Airosea is engaged with the government to help build a workforce in
            the country by providing necessary skill sets to people in their
            respective fields of work. Airosea is actively participating in
            government programs centered around delivering education and
            training to schools, beneficiaries of government programs, members
            of underprivileged societies and employees of government
            organizations.
          </p>
          <p className="p-4 m-2 text-left">
            Airosea has been working closely with the central and state
            governments, PSUs and other government organizations in India, to
            help them tackle their manpower challenges.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-center p-2 m-2 ">
            Import and Export Services
          </h2>

          <h6 className="p-4 m-2 rounded-xl  border-2">
            We can assist in export of all materials from India to China, South
            Africa, Dubai etc
          </h6>
          <h6 className="p-4 m-2 rounded-xl bg-gray-100 border-2">
            We can analyze the market requirement and provide contacts from
            other country.
          </h6>
          <h6 className="p-4 m-2 rounded-xl  border-2">
            In many countries there is huge requirement of Indian Marbal,
            Granite, Textiles, Food etc.
          </h6>
          <h6 className="p-4 m-2 rounded-xl bg-gray-100 border-2">
            We can take care of End to End export of material provided it passes
            all the required norms of another country.
          </h6>

          <div></div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="sub-heading">Services</p>
        <h3 className="text-bold text-center">We Provides Best Services</h3>

        <div className="grid lg:grid-cols-3">
          <div className="rounded-lg flex  m-4 p-4 bg-gray-100">
            <Image
              alt=""
              className=""
              src="/demo.png"
              width="100"
              height="50"
            />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 ">
            <Image
              alt=""
              className=""
              src="/demo.png"
              width="100"
              height="50"
            />
            <div className="flex flex-col m-2 p-2">
              <h5>International Joint Venture Project</h5>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 bg-gray-100">
            <Image
              alt=""
              className=""
              src="/demo.png"
              width="100"
              height="50"
            />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p className="">Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 ">
            <Image
              alt=""
              className=""
              src="/demo.png"
              width="100"
              height="50"
            />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <div className="flex">
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 bg-gray-100">
            <Image
              alt=""
              className=""
              src="/demo.png"
              width="100"
              height="50"
            />
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
