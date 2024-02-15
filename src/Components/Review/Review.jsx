import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ReviewData from "./ReviewData";
export default function Review() {
  return (
    <div id="review" className="mt-16 bg-primaryColorLight p-12 md:py-48 rounded-md">
      <div className="flex flex-col mx-auto items-center">
        <div>
          <h4 className="title">Customer Review</h4>
        </div>

        <div className="seperator mx-auto"></div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            suscipit veritatis totam cum ad iure?
          </p>
        </div>
      </div>

      <Swiper
       slidesPerView={1}
       spaceBetween={10}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         768: {
           slidesPerView: 2,
           spaceBetween: 40,
         },
       }}
       modules={[Pagination]}
 
        className=" cursor-pointer"
      >
        {ReviewData.map((value, index) => (
          <SwiperSlide>
            <div key={index} className=" p-4 gap-2 rounded-md mt-4 bg-primaryColor">
              <div className="py-6">
                <p>{value.content}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <img
                    src={value.img}
                    alt="error"
                    className="w-12 h-12  rounded-full"
                  />
                </div>
                <div>
                  <p className=" text-xl font-Roboto">{value.name}</p>
                  <p>{value.profession}</p>
                </div>
                <div className="ml-auto text-3xl text-secondaryColor">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
