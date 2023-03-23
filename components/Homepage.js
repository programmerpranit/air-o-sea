import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <div className="m-2 p-4 text-text_home">
        <p className="italic text-center text-primary font-bold">About Us</p>
        <h3 className="font-bold text-center my-2 text-black">
          Welcome To Airosea International Ltd
        </h3>
        <p className="my-2">
          Air O Sea International Ltd. is a disciplined multinational, dynamic
          organization with High Value and Integrity. We are strong bridge
          between India and China Businesses. With strong experience in this
          area we are providing values to our customers in various service
          lines. We not only introduce the business opportunities but making our
          customers comfortable in overseas business.
        </p>
        <p className="my-2">
          Our core services includes and not limited to Trading , Import –
          Export, End to End Project Management, Business Consulting. We are
          having Registered Office in Hong Kong and Corporate office in Pune,
          India and operating from China. We have strong network of partners
          which gives us the knowledge and capacity to give you ideal and best
          in the industry output. We have in-depth knowledge and strong
          experience in a wide range of products such as Electronics,
          Furnitures, LEDs, Gifts, Textiles, Tools , Toys, Food, Appliances,
          Mobile and many more.
        </p>
        <p className="my-2">
          At Air O Sea International Ltd., we give you Risk free access to
          China’s abundant sourcing opportunities. We are focused on Services
          and have the passion to move in all diversified area for our
          customers. It’s our commitment to assist our customers in their
          organization’s growth.
        </p>
      </div>
      <div>
        <p className="italic text-center text-primary font-bold">Services</p>
        <h3 className="text-bold text-center">Our Platform Offers</h3>
        <div>
          <div className="rounded-lg flex  m-4 p-4 bg-cyan-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <p>Read More</p>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 border-b-indigo-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <p>Read More</p>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 bg-cyan-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <p>Read More</p>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 bg-slate-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <p>Read More</p>
            </div>
          </div>
          <div className="rounded-lg flex  m-4 p-4 border-b-indigo-100">
            <Image className="" src="/demo.png" width="100" height="50" />
            <div className="flex flex-col m-2 p-2">
              <h6>International Joint Venture Project</h6>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 p-4 flex flex-col justify-center items-center">
        <p className="italic text-center text-primary font-bold">
          Why choose Us?
        </p>
        <h3 className="font-bold text-center my-2 text-black">
          Why should you business with Us?
        </h3>
        <ul className="">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            <li>24X7 Presence in China.</li>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            <li>Bilingual Support in India and China.</li>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            <li>Excellent Market reach across India.</li>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            <li>Experience to work with Chinese organizations.</li>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            <li>Talented and smart team to provide innovative solutions.</li>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            <li>Local market expertise in India and China.</li>{" "}
          </div>
        </ul>
      </div>
    </div>
  );
}
