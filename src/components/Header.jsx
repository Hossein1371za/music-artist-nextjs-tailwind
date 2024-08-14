"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import NavMobile from "./NavMobile"
import Nav from "./Nav";

import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      } `}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
        {/* menu btn */}
        <div>menu btn</div>
        {/* socials */}
        <div>social icon</div>
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/logo.svg"}
            fill
            className="object-contain "
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
