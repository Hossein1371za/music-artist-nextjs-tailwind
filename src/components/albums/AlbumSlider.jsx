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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);

  if (error) return "دسترسی به اطلاعات امکان پذیر نمیباشد!";
  if (!data) return "...در حال بارگزاری";

  return (
    <>
      <Swiper
        effect={"cowerflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id} className="mb-12">
              <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                <div className="flex flex-1 w-full h-[500px]">
                  <div className="flex flex-1 flex-col xl:px-12">
                    {album.tracks?.map((track, index) => {
                      return (
                        <div
                          className="flex flex-1 w-full h-[500px]"
                          key={index}
                        >
                          <div className="flex flex-1 items-center gap-x-2 font-semibold xl:font-extrabold">
                            <div className="text-sm xl:text-base">
                              {track.name}
                            </div>
                            <div className="text-accent text-sm xl:text-lg">
                              .0{index + 1}
                            </div>
                          </div>
                          <div>
                            <AudioPlayer
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                width: "100%",
                              }}
                              src={track.src}
                              loop
                              preload="none"
                              color="#fff"
                              volume={40}
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image
                    src={album.img}
                    fill
                    priority
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} breakpoints={{}}>
        {data?.map((thumb, index) => {
          return <SwiperSlide key={index}>thumb</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default AlbumSlider;
