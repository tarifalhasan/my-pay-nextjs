import { OurPaymentMethodsData } from "@/constants/data";
import heroImage from "@/public/assets/images/hero_assets.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" min-h-screen  w-full h-full bg-hero bg-no-repeat bg-cover">
      <div className="  relative">
        <header className="flex  container py-5 items-center justify-between bg-transparent">
          <Link href={"/"}>
            <Image
              src={"/assets/images/Logo (1).svg"}
              alt="logo"
              width={53}
              height={52.909}
            />
          </Link>
          <div className="flex items-center gap-1">
            <Image
              src={"/assets/images/Arrow Up Icon.svg"}
              alt=""
              width={34}
              height={34}
            />
            <p className=" text-t-22">Espace client</p>
          </div>
        </header>
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
            <button className="hero_btn">
              COMMENCER
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="18.5"
                  fill="url(#paint0_linear_111_1322)"
                />
                <path
                  d="M14.817 12.0207L14.7551 13.8349L22.2618 13.8863L11.3038 24.6155L12.6445 25.9848L23.6026 15.2557L23.4826 22.7487L25.3496 22.7516L25.4572 12.0729L14.817 12.0207Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_111_1322"
                    x1="-55.5"
                    y1="-10"
                    x2="50"
                    y2="37"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C88FC" />
                    <stop offset="1" stop-color="#75F2F6" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
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
        <div className="container pt-[5rem] 2xl:pt-[7rem]">
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
