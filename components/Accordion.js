import { useState } from "react";
export default function Accordion({ title, content }) {


  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  const minusIcon = "-";
  const plusIcon = "+";
  
  return (
    <div className=" ">
      <div
        className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
        onClick={toggleExpanded}
      >
        <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
          <h5 className="flex-1">{title}</h5>
          <div className="flex-none pl-2">
            {expanded ? minusIcon : plusIcon}
          </div>
        </div>
        <div
          className={`px-6 pt-0 overflow-hidden transition-all duration-500   ${
            expanded ? " ease-in  " : "max-h-0 ease-out"
          }`}
        >
          <p className="pb-4 text-left">{content}</p>
        </div>
      </div>
    </div>
  );
}
