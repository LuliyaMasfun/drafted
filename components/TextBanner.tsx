import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type ScrollTrainTitleProps = {
  title: string;
  sectionId: string;
};

const TextBanner = () => {
  const [visibleTitles, setVisibleTitles] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Determine the number of titles to display based on the scroll position
      const scrollPosition = window.scrollY;
      const titleCount = Math.floor(scrollPosition / 100) + 1;

      // Generate an array of titles to display
      const newTitles = Array.from(
        { length: titleCount },
        (_, index) => `Title ${index + 1}`
      );

      setVisibleTitles(newTitles);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-train">
      {visibleTitles.map((title, index) => (
        <div key={index}>
          <ScrollTrainTitle title={title} sectionId="home" />
        </div>
      ))}
    </div>
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

const ScrollTrainTitle = ({ title, sectionId }: ScrollTrainTitleProps) => {
  return (
    <motion.div
      className="text-9xl font-logoFont items-center max-w-contentContainer py-24 justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={item}
        className="text-9xl"
        style={outlinedTextStyles}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default TextBanner;
