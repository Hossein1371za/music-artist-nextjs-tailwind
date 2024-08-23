"use client"

import SectionHeader from "./SectionHeader"
import {motion} from "framer-motion"
import { fadeIn } from "../../varient"

const Newsletter = () => {
  return (
    <section className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat" id="contact">
        <div className="container mx-auto h-full">
            <div>
                <SectionHeader pretitle="تماس با ما" title="در خبر نامه ما ثبت نام کنید" />
            </div>
        </div>
    </section>
  )
}

export default Newsletter