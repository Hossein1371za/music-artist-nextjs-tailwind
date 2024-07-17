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
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild className="relative">
              <div className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]">
                <Image
                  src={"/assets/hero/typo-1.svg"}
                  fill
                  alt=""
                  className="object-contain"
                />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
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
      </div>
    </section>
  );
};

export default Hero;
