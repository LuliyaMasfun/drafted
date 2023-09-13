import { useRef, useEffect } from "react";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const RevealText = ({ children, width = "fit-content" }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();

  /*useEffect(() => {
    if (typeof window !== "undefined") {
      if (isInView) {
        mainControl.start("visible");
      }
    }
  }, [isInView]);
*/

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          fill: { opacity: 75, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default RevealText;
