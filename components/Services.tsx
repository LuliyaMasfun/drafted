import { motion } from "framer-motion";
import BgSwirlVideo from "./bgSwirlVideo";
import SectionTitle from "./SectionTitle";
import SubTitle from "./SubTitle";

const Services = () => {
  return (
    <section id="services" className="flex flex-col min-h-screen">
      {/* Big div covering the whole page */}
      <div className="">
        {/* Subtitles displayed in rows */}
        <div className="max-w-containerSmall">
          <p className="tracking-extraWide font-titleFont text-2xl font-semibold">
            OUR SERVICES
          </p>
          <div className="my-8">
            <SectionTitle title={"CREATING MOMENTS WORTH MENTIONING."} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="py-4">
              <SubTitle title={"PERFORMANCE MARKETING"} />
            </div>
            <div className="py-4">
              <SubTitle title={"CONTENT PRODUCTION"} />
            </div>
            <div className="py-4">
              <SubTitle title={"AUDIENCE INSIGHT"} />
            </div>
            <div className="py-4">
              <SubTitle title={"CONCEPT DEVELOPMENT"} />
            </div>
            <div className="py-4">
              <SubTitle title={"CULTURAL TREND ANALYSIS"} />
            </div>
            <div className="py-4">
              <SubTitle title={"INFLUENCER MARKETING"} />
            </div>
            <div className="py-4">
              <SubTitle title={"SOCIAL MEDIA MANAGEMENT"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
