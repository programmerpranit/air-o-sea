import Image from "next/image";

const Work = ({name, image}) => {
  return (
    <>
      <div className="border rounded-md mt-7 p-5">
        <Image src={image} width={500} height={500} alt="" />
        <h4 className="pt-5 text-center">{name}</h4>
      </div>
    </>
  );
};

export default Work;
