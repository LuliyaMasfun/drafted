import React from "react";
import {
  SlSocialYoutube,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-end items-center gap-4 text-textLight">
        <div className="flex flex-col gap-4">
          <a href="https://www.youtube.com/@BlockJuice" target="_blank">
            <span
              className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textPurple cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
            >
              <SlSocialYoutube />
            </span>
          </a>
          <a href="https://www.youtube.com/@BlockJuice" target="_blank">
            <span
              className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textPurple cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
            >
              <SlSocialInstagram />
            </span>
          </a>
          <a href="https://www.youtube.com/@BlockJuice" target="_blank">
            <span
              className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textPurple cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
            >
              <SlSocialFacebook />
            </span>
          </a>
          <a href="https://www.youtube.com/@BlockJuice" target="_blank">
            <span
              className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textPurple cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
            >
              <SlSocialLinkedin />
            </span>
          </a>
        </div>
        <div className="w-[2px] h-32 bg-textLight"></div>
      </div>
    </>
  );
};
export default LeftSide;
