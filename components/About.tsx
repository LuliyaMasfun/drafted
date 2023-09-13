import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <div className="w-[30%]">
        <SectionTitle
          title={
            "DRAFTED creates moments that engage and start conversations that every brand should aspire to be part of."
          }
        />
      </div>

      <div className="w-[70%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        laudantium ad totam. Quod nesciunt cumque veniam saepe eligendi sapiente
        esse quasi, corrupti ad? Ratione voluptatem, accusamus delectus
        dignissimos aspernatur ex?
      </div>
    </section>
  );
};

export default About;
