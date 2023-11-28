import as from "@/public/assets/images/assets.svg";

import Image from "next/image";
import CustomButton from "./CustomButton";
const PackSubscribe = () => {
  const standard_packdage_features = [
    `Transactions e-commerce`,
    `Services basés sur l'abonnement`,
    `Dons en ligne pour des associations à but non lucratif`,
    `Paiements de réservations et de réservations`,
    `Vente de produits numériques`,
  ];
  const customs_packdage_features = [
    `Transactions Sécurisées`,
    `Support Multi-Devises`,
    `Protection contre la Fraude`,
    `Paiement Personnalisable`,
    `Interface Adaptée aux Mobiles`,
    `Transactions Sécurisées`,
    `Support Multi-Devises`,
    `Protection contre la Fraude`,
    `Paiement Personnalisable`,
    `Interface Adaptée aux Mobiles`,
  ];
  return (
    <div className="">
      <div className=" ">
        <div className="container py-10  space-y-8">
          <div className=" pb-5">
            <h2 className=" text-center text-[1.8rem] leading-normal tracking-tight sm:text-[2.5rem] xl:text-[2.9375rem] font-mediums">
              Choisissez votre pack & Abonnez-vous
            </h2>
            <p className="text-heading-5 font-medium text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className=" flex flex-col py-8  overflow-hidden lg:flex-row gap-7 lg:gap-0">
            <div className=" relative z-30  lg:max-w-[800px] space-y-7 w-full overflow-hidden  standard_packdage">
              <div className=" space-y-6 pt-9">
                <button className=" px-7 hover:opacity-80 active:opacity-50 bg-btn text-black text-[1.125rem]  flex items-center justify-center rounded-full h-[45px] mx-auto outline-none focus:outline-none">
                  STANDARD
                </button>
                <div className="flex pt-3 items-center  justify-center gap-7">
                  <Image
                    width={62}
                    height={44}
                    src={"/assets/icons/logo-cb-1.svg"}
                    alt=""
                  />

                  <Image
                    width={62}
                    height={44}
                    src={"/assets/icons/MasterCard-Logo-1.svg"}
                    alt=""
                  />
                  <Image
                    width={62}
                    height={44}
                    src={"/assets/icons/ancien-logo-visa-1.svg"}
                    alt=""
                  />
                </div>
                <h2 className="light_text text-[3rem] sm:text-[4.375rem] text-center bg-gradient-sm bg-clip-text">
                  5% + 0.25 €
                </h2>
              </div>
              <div className="py-5 px-3  sm:px-5 ">
                <h3 className=" text-heading-5 font-bold py-4">
                  Business Acceptés :
                </h3>
                <ul className="space-y-4 pb-[6.4rem] ">
                  {standard_packdage_features.map((data, i) => (
                    <li key={i}>
                      <div className="  flex  items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M22.04 12.6253C22.4307 13.016 22.4307 13.6494 22.04 14.04L15.3733 20.7067C15.1787 20.9014 14.9227 21 14.6667 21C14.4107 21 14.1547 20.9027 13.96 20.7067L9.96 16.7067C9.56933 16.316 9.56933 15.6827 9.96 15.292C10.3507 14.9013 10.984 14.9013 11.3747 15.292L14.668 18.5853L20.628 12.6253C21.0173 12.236 21.6493 12.236 22.04 12.6253ZM29 16C29 23.168 23.168 29 16 29C8.832 29 3 23.168 3 16C3 8.832 8.832 3 16 3C23.168 3 29 8.832 29 16ZM27 16C27 9.93467 22.0653 5 16 5C9.93467 5 5 9.93467 5 16C5 22.0653 9.93467 27 16 27C22.0653 27 27 22.0653 27 16Z"
                            fill="url(#paint0_linear_126_10489)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_126_10489"
                              x1="-14.6"
                              y1="-40.3333"
                              x2="50.593"
                              y2="-34.4475"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#4B86FC" />
                              <stop offset={1} stopColor="#75F2F6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className=" text-[.8rem] leading-relaxed sm:text-[1.125rem] text-[#F7F7F7] font-medium">
                          {data}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" w-full absolute bottom-0 left-0 right-0 h-[68px] bg-[#07111E] flex items-center justify-center">
                <p className=" text-[1.4rem] text-white text-center">
                  Démarrer
                </p>
              </div>
            </div>
            <div className="premium_pack relative z-20 xl:left-[-1rem]  xl:-top-[1.25rem] space-y-5">
              <div className=" py-7 space-y-4">
                <button className=" px-7 hover:opacity-80 active:opacity-50 bg-btn text-black text-[1.125rem]  flex items-center justify-center rounded-full h-[45px] mx-auto outline-none focus:outline-none">
                  SUR MESURE
                </button>
                <p className="pera">Dix fonctionnalités essentielles</p>
              </div>
              <ul className="space-y-4 pl-3  sm:pl-16 pt-6">
                {customs_packdage_features.map((data, i) => (
                  <li key={i}>
                    <div className="  flex  items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M22.04 12.6253C22.4307 13.016 22.4307 13.6494 22.04 14.04L15.3733 20.7067C15.1787 20.9014 14.9227 21 14.6667 21C14.4107 21 14.1547 20.9027 13.96 20.7067L9.96 16.7067C9.56933 16.316 9.56933 15.6827 9.96 15.292C10.3507 14.9013 10.984 14.9013 11.3747 15.292L14.668 18.5853L20.628 12.6253C21.0173 12.236 21.6493 12.236 22.04 12.6253ZM29 16C29 23.168 23.168 29 16 29C8.832 29 3 23.168 3 16C3 8.832 8.832 3 16 3C23.168 3 29 8.832 29 16ZM27 16C27 9.93467 22.0653 5 16 5C9.93467 5 5 9.93467 5 16C5 22.0653 9.93467 27 16 27C22.0653 27 27 22.0653 27 16Z"
                          fill="url(#paint0_linear_126_10489)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_126_10489"
                            x1="-14.6"
                            y1="-40.3333"
                            x2="50.593"
                            y2="-34.4475"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#4B86FC" />
                            <stop offset={1} stopColor="#75F2F6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className=" text-[.8rem] leading-relaxed sm:text-[1.125rem] text-[#F7F7F7] font-medium">
                        {data}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-[357px] rotate-[47.457deg]  blur-[325px] h-[445px] rounded-[200px] bg-bulb absolute right-0 top-[45%] z-10" />
      </div>
      <div className=" relative  z-40 overflow-hidden container">
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between">
          <div className=" space-y-6">
            <h3 className="  lg:max-w-[613px] text-[1.2rem] sm:text-[1.8rem] lg:text-[2.2rem]  font-medium leading-[125%]">
              Nous disposons d’une api solide fait pour s’intégrer au mieux à
              votre environnement.
            </h3>
            <CustomButton title={"VOIR l’API"} />
          </div>
          <div className=" flex justify-end">
            <Image src={as} alt="" />
          </div>
        </div>
      </div>
      <div className=" w-[357px] rotate-[47.457deg]  blur-[325px] h-[445px] rounded-[200px] bg-bulb absolute right-0 top-[85%] z-10" />
    </div>
  );
};

export default PackSubscribe;
