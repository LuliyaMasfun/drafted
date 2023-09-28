import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

/* TODO Make SectionTitle Stick as user scroll animation */
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall ml-[45vh] py-10 lgl:py-32 flex flex-col gap-8 lg:flex-row"
    >
      <div className="w-[70%]">
        <div className="font-titleFont text-5xl font-semibold flex items-center">
          DRAFTED creates moments that engage and start conversations that every
          brand should aspire to be part of.
        </div>
      </div>
      <div className="lg:ml-20 font-thinFont text-xl w-full h-full flex flex-col items-center justify-end gap-6 overflow-y-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        laudantium ad totam. Quod nesciunt cumque veniam saepe eligendi sapiente
        esse quasi, corrupti ad? Ratione voluptatem, accusamus delectus
        dignissimos aspernatur ex? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Doloribus facilis libero nisi non hic earum
        accusantium ab exercitationem nobis, qui minima placeat beatae cum
        ratione corrupti, modi architecto ducimus impedit? Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Et esse sit a asperiores.
        Sapiente, fuga, placeat sunt voluptates tempore iste quia facere maxime
        assumenda nostrum et itaque corporis, cum facilis. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maiores, autem! A ullam odio sunt,
        nobis officiis fugit error distinctio maiores ex accusamus deserunt
        saepe, quibusdam libero illo impedit? Ut, consequuntur. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Facilis molestiae
        consequuntur accusamus, exercitationem tempore soluta?
        <p className="font-titleFont text-4xl font-semibold flex items-center">
          Distinctio error vero praesentium recusandae nam voluptates quo
          assumenda aperiam in?
        </p>
        Sapiente, fuga, placeat sunt voluptates tempore iste quia facere maxime
        assumenda nostrum et itaque corporis, cum facilis. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maiores, autem! A ullam odio sunt,
        nobis officiis fugit error distinctio maiores ex accusamus deserunt
        saepe, quibusdam libero illo impedit? Ut, consequuntur. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Facilis molestiae
        consequuntur accusamus, exercitationem tempore soluta?
      </div>
    </section>
  );
};

export default About;
