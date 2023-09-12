import React from "react";

const RighSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:contact@drafted.com">
        <p className="text-sm rotate-90 w-72 tracking-wide">
          contact@drafted.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textLight inline-flex"></span>
    </div>
  );
};
export default RighSide;
