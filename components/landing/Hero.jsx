import { OurPaymentMethodsData } from "@/constants/data";

import heroImage from "@/public/assets/images/hero_assets.png";
import Image from "next/image";
import CustomButton from "./CustomButton";
import LandingHeader from "./Header";
const Hero = () => {
  return (
    <div className=" min-h-screen  w-full h-full bg-hero bg-no-repeat bg-cover">
      <div className="  relative">
        <LandingHeader />
        <div className="flex gap-10  px-0 lg:px-[1rem] flex-col container   lg:flex-row  relative overflow-hidden lg:items-center lg:justify-between">
          <div className=" px-[1rem] lg:px-0  space-y-7 max-w-[711px]">
            <h2 className=" text-[1.8rem] leading-normal tracking-tight sm:text-[2.5rem] xl:text-[2.9375rem] font-mediums">
              <span className=" bg-clip-text font-bold bg-gradient-sm light_text">
                MyPay
              </span>{" "}
              Plateforme de gestion de paiements en ligne pour business
              High-Risk.
            </h2>
            <p className=" text-xs sm:text-sm text-light-white font-medium">
              Business High-Risk pris en charge : Servitia Financia et
              Investitiones , Mercator es titulorum Pecuniae mutuatae ad diem
              Mercatores cryptae valutarum. Servitia Financia et Investitiones ,
              Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
              valutarum.
            </p>
            <div>
              <CustomButton title={"COMMENCER"} />
            </div>
          </div>
          <div className=" ">
            <Image
              quality={100}
              className=" w-full h-full"
              src={heroImage}
              alt="jer"
            />
          </div>
        </div>
        <div className="container pt-[5rem] 2xl:pt-[5rem]">
          <h2 className=" text-lg lg:text-3xl text-center pb-10">
            Nos supports de paiement
          </h2>
          <div className="flex  flex-wrap items-center  justify-between gap-5">
            {OurPaymentMethodsData.map((data) => (
              <div key={data.key}>{data.images}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
