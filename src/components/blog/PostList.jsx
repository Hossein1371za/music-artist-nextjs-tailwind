"use client"

import Link from "next/link"
import {BsArrowRight} from "react-icons/bs"

import { motion } from "framer-motion"
import { fadeIn } from "../../../varient"

const PostList = ({posts}) => {
const firstThreePost = posts.slice(0,3)

  return (
    <div>
      <div>
        {firstThreePost.map((post)=>(
          <div>پست</div>
        ))}
      </div>
    </div>
  )
}

export default PostList