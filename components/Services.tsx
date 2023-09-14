import { motion } from "framer-motion";
import BgWaveVideo from "./bgWaveVideo";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-containerSmall lgl:py-32 flex flex-col lg:flex-row"
    >
      <motion.div className="z-0">
        <BgWaveVideo />
      </motion.div>

      <div className="z-10 max-w-containerSmall ml-[45vh] py-10  flex flex-col gap-8">
        <p className="tracking-extraWide w-[130vh] font-titleFont text-2xl font-semibold flex items-center">
          OUR SERVICES
        </p>
        <div className="mx-auto">
          <SectionTitle title={"CREATING MOMENTS WORTH MENTIONING"} />
        </div>
      </div>
    </section>
  );
};
export default Services;
