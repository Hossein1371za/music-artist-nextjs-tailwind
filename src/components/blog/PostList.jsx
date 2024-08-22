"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../../varient";

const PostList = ({ posts }) => {
  const firstThreePost = posts.slice(0, 3);


  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pb-24 border-t border-white/10">
        {firstThreePost.map((post) => {
          const { id, date, title, descripton } = post;
          return (
            <div key={id} className="flex-1">
              <div className="font-bold text-accent mb-1">{date}</div>
              <div className="text-xl font-medium mb-4">{title}</div>
              <div className="text-white/30 mb-6 font-light">{descripton}</div>
              <Link href="#" className="flex item-center gap-x-2 group">
              ادامه مطلب
              <BsArrowLeft className="text-xl group-hover:mr-1 transition-all "/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
