import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import React from "react";
import Image from "next/image";

import { Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="max-w-2xl m-auto"
      >
        <SwiperSlide>
          <Image src={"/airosea.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea1.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea2.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea3.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea4.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea5.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea6.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea7.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/airosea8.jpg"} width={600} height={500} alt={""} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
