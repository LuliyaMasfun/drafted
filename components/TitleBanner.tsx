import React from "react";
import { motion } from "framer-motion";

const TextBanner = () => {
  return (
    <section
      id="home"
      className="font-logoFont items-center max-w-contentContainer mx-auto py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 "
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-9xl"
      >
        DRAFTED
      </motion.h1>
    </section>
  );
};

export default TextBanner;
