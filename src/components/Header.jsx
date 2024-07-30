"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="container mx-auto">
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image src={"/assets/header/logo.svg"} fill />
        </Link>
      </div>
    </header>
  );
};

export default Header;
