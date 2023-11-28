"use client";
import { OurPaymentMethodsData } from "@/constants/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftQuete, RightQuote } from "../svg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Import Swiper styles
import "swiper/css";

const OurClients = () => {
  const data = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <div className="container space-y-8 pt-[5rem] 2xl:pt-[5rem]">
      <h2 className=" text-lg lg:text-3xl text-center">Nos clients</h2>
      <div className="flex  flex-wrap items-center py-10 xl:py-16 justify-between gap-5">
        {OurPaymentMethodsData.map((data) => (
          <div key={data.key}>{data.images}</div>
        ))}
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((Data, i) => (
          <SwiperSlide key={i}>
            <div className=" bg-slider_bg backdrop-blur-[5px] rounded-[20px] px-5  space-y-5 xl:px-8 py-10">
              <Image
                className=" w-[70px] h-[70px] block mx-auto"
                src={"/assets/images/white_logo.svg"}
                alt="Herman Jensen"
                width={70}
                height={70}
              />
              <div className="flex items-center justify-between">
                <RightQuote />
                <LeftQuete />
              </div>
              <p className=" text-[0.8rem] text-center font-normal sm:font-medium sm:text-[1.30rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className=" pt-5 pb-4 flex justify-center">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h6 className=" text-xl text-white font-normal">
                      Herman Jensen
                    </h6>
                    <p className=" text-base font-normal text-white opacity-50">
                      CEO MyPay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurClients;
