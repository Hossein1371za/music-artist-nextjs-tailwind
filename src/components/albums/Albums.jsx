"use client"

import AlbumSlider from "./AlbumSlider"
import {motion} from "framer-motion"
import { fadeIn } from "../../../varient"

import SectionHeader from "../SectionHeader"

const Albums = () => {
  return (
    <section id="discography">
        <div className="container mx-auto">
            <SectionHeader pretitle="فهرست ها" title="محبوب ترین آلبوم ها"/>
            <div>
                <AlbumSlider/>
            </div>
        </div>
    </section>
  )
}

export default Albums