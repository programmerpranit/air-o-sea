export default function Contactus() {
  return (
    <div className="flex flex-col bg-bg">
      <div>
        
        <h1 className="text-black text-center">Contact Us</h1>
      </div>
      <div>
        <h5 className="font-bold text-primary italic text-center">
          Need Help?
        </h5>
        <h2 className="text-center font-bold text-black">
          Get in touch
        </h2>
      </div>
      <div>
        <div className="m-2 p-2">
          <label for="first_name" class=" mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-white   text-sm rounded-lg   block w-full p-2.5"
            required
          />
        </div>
      </div>
    </div>
  );
}
