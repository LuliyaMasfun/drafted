"use client";
import { motion } from "framer-motion";
import logo from "../public/images/DRAFTED.png";
import Image from "next/image";
import Link from "next/link";
import menu from "../public/images/icons8-hamburger-menu-30.png";

const Navbar = () => {
  return (
    <div className="w-full relative z-10 h-20 lg:h-[12vh] top-0 z-50 bg-transparent">
      <div className="max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="hidden mdl:flex text-[14px] gap-7">
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link href="#aboutUs">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                About us
              </motion.li>
            </Link>
            <Link href="#services">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Services
              </motion.li>
            </Link>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#home">
            <Image className="w-16" src={logo} alt="logo" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="hidden mdl:flex text-[14px] gap-7">
            <Link href="#resources">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Resources
              </motion.li>
            </Link>
            <Link href="#membership">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Membership
              </motion.li>
            </Link>
            <Link href="#contactUs">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Contact Us
              </motion.li>
            </Link>
          </ul>

          <div
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden 
          text-4xl text-textLight cursor-pointer overflow-hidden group"
          >
            <span
              className="w-full h-[2px] bg-textLight inline-flex transform group-hover:translate-x-2 
            transition-all ease-in-out duration-300"
            ></span>
            <span
              className="w-full h-[2px] bg-textLight inline-flex transform group-hover:translate-x-3 
            transition-all ease-in-out duration-300"
            ></span>
            <span
              className="w-full h-[2px] bg-textLight inline-flex transform group-hover:translate-x-1 
            transition-all ease-in-out duration-300"
            ></span>

            {/*<button>
              <Image src={menu} alt="burger menu" />
            </button>
            */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Navbar;
