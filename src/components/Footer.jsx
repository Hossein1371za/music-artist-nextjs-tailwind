"use client";

import Link from "next/link";
import Socials from "./Socials";
import Nav from "./Nav";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const Footer = () => {
  return <footer className="bg-accent section">
    <div className="container mx-auto">
      <div>
        <Link href="#">
           <h2>hello@hossein71.com</h2>
        </Link>
      </div>
      <div>
        <Nav containerStyles="flex flex-col xl:flex-row items-center justify-center gap-y-4 xl:gap-x-8 text-sm font-semibold" 
        linkStyles="hover:text-primary/80 transition-all"
        />
      </div>
      <div>
        <Socials />
      </div>
    </div>
  </footer>;
};

export default Footer;
