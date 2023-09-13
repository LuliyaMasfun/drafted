import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ScrollTrainTitleProps = {
  title: string;
};

const TextBanner = () => {
  return (
    <>
      <section
        id="home"
        className="font-logoFont items-center max-w-contentContainer py-24 justify-center"
      >
        <div className="scroll-train">
          <ScrollTrainTitle title="DRAFTED" />
        </div>
      </section>
    </>
  );
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.9,
      ease: "easeIn",
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0.5,
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const outlinedTextStyles = {
  color: "transparent",
  WebkitTextFillColor: "transparent",
  textFill: "transparent",
  WebkitTextStroke: "2px #FFFFFF",
  textStroke: "2px #FFFFFF",
};

const ScrollTrainTitle = ({ title }: ScrollTrainTitleProps) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 * count) {
        setCount(count + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count]);

  return (
    <motion.div
      className="text-9xl font-logoFont items-center max-w-contentContainer py-24 justify-center"
      variants={container}
      initial="hidden"
      animate="show"
      style={count === 1 ? {} : outlinedTextStyles}
    >
      {[...Array(count)].map((_, index) => (
        <motion.h1
          key={index}
          variants={item}
          className={`text-9xl ${count === 1 && index === 0 ? "" : "outlined"}`}
        >
          {title}
        </motion.h1>
      ))}
    </motion.div>
  );
};

const RevealText = () => {
  return (
    <div className="relative font-logoFont items-center max-w-contentContainer justify-center ">
      <ScrollTrainTitle title="DRAFTED" />
    </div>
  );
};

export default RevealText;
