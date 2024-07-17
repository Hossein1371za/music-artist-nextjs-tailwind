"use client";

import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const locationSequence = [
  "تهران , برج میلاد",
  3000,
  "تهران , شهرک غرب",
  3000,
  "تبریز , سالن همایش",
  3000,
  "اصفهان , چهار باغ",
  3000,
  "شیراز , حافظیه ",
  3000,
];
const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        <div className="hidden xl:flex absolute left-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10">
          <Image
            src={"/assets/hero/singer.png"}
            width={617}
            height={893}
            alt=""
            quality={100}
            priority
          />
        </div>
        <div>text</div>
      </div>
    </section>
  );
};

export default Hero;
