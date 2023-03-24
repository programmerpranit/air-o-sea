export default function Footer() {
  return (
    <div className="p-4 pt-10 bg-primary bg-opacity-5">
      <div className="">
        <h5 className="text-bold text-lg bg-">About Us</h5>
        <p>
          We are full service international organization having a registered
          office in Hong Kong, getting operated from China and corporate office
          in India. We have wide range of customers like wholesalers,
          entrepreneurs, high scale companies, energy generation organizations.
        </p>
      </div>
      <div className="my-5">
        <h5 className="text-bold text-lg">Official Info</h5>
        <p>Registered Office: Hong Kong</p>
        <p>Corporate Office: Guangzhou (China)</p>
        <p>Branch Office: India</p>
        <h6>Open Hours</h6>
        <p>Mon – Sat: 8 am – 5 pm</p>
        <p>Sunday: CLOSED</p>
      </div>
      <div className="flex flex-col my-4 text-footer_text">
        <p className="text-center my-2">
          2023 © All rights reserved by Air – O – Sea International Pvt Ltd.
        </p>
        
      </div>
    </div>
  );
}
