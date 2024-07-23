"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const Player = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px]">
        <div className="container mx-auto">
          <div>متن</div>
          <div>
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                background:"transparent",
                boxShadow:"none",
                width:"100%",
                direction:"ltr",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
