"use client";

import { useState } from "react";

import useSWR from "swr";
import Image from "next/image";

import { AudioPlayer } from "react-audio-play";

import { Swiper, SwiperSlide, swiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AlbumSlider = () => {
  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);

  if (error) return "دسترسی به اطلاعات امکان پذیر نمیباشد!";
  if (!data) return "...در حال بارگزاری";

  return <>
  <Swiper>
    {data.map((album)=>{
      return <SwiperSlide key={album.id} className="mb-12">
        <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
          <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
            <Image 
            src={album.img}
            fill
            priority
            alt=""
            className="object-contain"
            />
          </div>
          <div>
            <div>
              {album.tracks?.map((track,index)=>{
                return <div key={index}>{track.name}</div>
              })}
            </div>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>
  </>;
};

export default AlbumSlider;
