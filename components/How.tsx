import { motion } from "framer-motion";
import BgSwirlVideo from "./bgSwirlVideo";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Subtitle from "./HowTitle";

interface DescTexts {
  [key: string]: string;
}

const How: React.FC = () => {
  const descTexts: DescTexts = {
    "Research & insights":
      "Preparation is key when developing a relevant and effective brand strategy. We should know. We spend hours collecting, compiling and analysing information and statistics about the latest trends as well as best methods and platforms, to achieve your desired results. Based on our solid research and well-founded insights, we develop sharp strategies for pinpointing and engaging your target audience. Give us a try.",
    "Strategy & Marketing":
      "We don’t call ourselves experts, we’re just very good at what we do. Yeah, it might sound cocky but we rather see it as a combination of our deep knowledge and our long experience. We always aim to develop groundbreaking concepts and challenging ideas to help you achieve your communicative vision. Regardless of your needs or resources, we find the creativity that makes your brands fly digitally.",
    "Creation & Implementation":
      "Insight and strategy are good, add the right kind of implementation and you can achieve greatness. We’ve created and implemented thousands of successful campaigns so when we say that we know how to make your ideas a reality, we mean it. Using our data and insights as well as our cultural knowledge, we find the right influencers and communities to boost your brand. Let us do it for you.",
    "Analysis & Reporting":
      "We analyze and follow up on results, to optimize future campaigns. We collect relevant KPIs from each campaign, always learning toward future implementations.",
  };

  const [selectedSubtitle, setSelectedSubtitle] = useState<string>(
    "Research & insights"
  );

  const handleSubtitleClick = (subtitle: string) => {
    setSelectedSubtitle(subtitle);
  };

  return (
    <section id="how" className="max-w-containerSmall lgl:py-32 flex flex-col">
      <div className="z-10 py-10 flex flex-col gap-8">
        <SectionTitle title={"HOW WE BRING GOOD IDEAS TO LIFE."} />
        <div className="font-thinFont text-xl w-full flex items-center justify-center">
          We optimize your marketing strategies to attract Gen Z consumers. Our
          approach is efficient, smooth, and outcome-driven, demonstrating our
          ability to achieve tangible results.
        </div>
      </div>

      <div className="flex flex-row">
        <div className="lg:w-[50%] py-10 flex flex-col">
          <Subtitle
            title={"Research & insights"}
            onClick={() => handleSubtitleClick("Research & insights")}
          />
          <Subtitle
            title={"Strategy & Marketing"}
            onClick={() => handleSubtitleClick("Strategy & Marketing")}
          />
          <Subtitle
            title={"Creation & Implementation"}
            onClick={() => handleSubtitleClick("Creation & Implementation")}
          />
          <Subtitle
            title={"Analysis & Reporting"}
            onClick={() => handleSubtitleClick("Analysis & Reporting")}
          />
        </div>

        <div className="lg:w-[50%] py-10">
          {selectedSubtitle && (
            <div className="font-thinFont text-xl">
              {descTexts[selectedSubtitle]}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default How;
