export default function Contactus() {
  return (
    <div className="flex flex-col bg-gray-300">
      <div>
        <h1 className="text-black text-center">Contact Us</h1>
      </div>
      <div>
        <h5 className="font-bold text-primary italic text-center">
          Need Help?
        </h5>
        <h2 className="text-center font-bold text-black">Get in touch</h2>
      </div>
      <div>
        <div className="m-2 p-2">
          <label for="first_name" className=" mb-2 text-sm font-medium">
            First Name*
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white   text-sm rounded-lg   block w-full p-2.5"
          />
        </div>
        <div className="m-2 p-2">
          <label for="first_name" className=" mb-2 text-sm font-medium">
            Last Name*
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-white   text-sm rounded-lg   block w-full p-2.5"
          />
        </div>
        <div className="m-2 p-2">
          <label for="first_name" className=" mb-2 text-sm font-medium">
            Your Mail*
          </label>
          <input
            type="email"
            id="your_email"
            className="bg-white   text-sm rounded-lg   block w-full p-2.5"
          />
        </div>
        <div className="m-2 p-2">
          <label for="first_name" className="mb-4 text-sm font-medium">
            Web address*
          </label>
          <input
            type="text"
            id="web_address"
            className="bg-white   text-sm rounded-lg   block w-full p-2.5"
          />
        </div>
        <div className="m-2  p-2 rounded-lg">
          <select className="p-3 w-full rounded-lg text-sm">
            <option className="" selected>
              Services
            </option>
            <option className="" value="">
              EPC
            </option>
            <option className="" value="">
              Import and Export Services
            </option>
            <option className="" value="">
              Advertisement Equipment
            </option>
            <option className="" value="">
              Plan New Small Scale Business Setup
            </option>
            <option className="" value="">
              Government Projexts
            </option>
            <option className="" value="">
              International Joint Venture Projects
            </option>
          </select>
        </div>
        <div className="m-2 p-2">
          <label for="first_name" className="mb-4 text-sm font-medium">
            Message*
          </label>
          <textarea className="bg-white   text-sm rounded-lg   block w-full p-2.5"></textarea>
        </div>
      </div>
    </div>
  );
}
