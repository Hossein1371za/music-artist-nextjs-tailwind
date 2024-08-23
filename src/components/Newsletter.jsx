"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const Newsletter = () => {
  return (
    <section
      className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat"
      id="contact"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full items-center justify-center">
          <SectionHeader
            pretitle="تماس با ما"
            title="در خبر نامه ما ثبت نام کنید"
          />
          <div className="relative flex items-center w-full max-w-xl">
            <input
              type="text"
              placeholder="ایمیل..."
              className="w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8"
            />
            <button type="submit" className="bg-accent absolute left-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6">مشترک شوید</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
