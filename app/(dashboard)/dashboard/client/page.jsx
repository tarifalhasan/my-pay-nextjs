import AnnualStatistics from "@/components/dashbaord/AnnualStatistics";
import Contracts from "@/components/dashbaord/Contracts";
import MonthlyEarning from "@/components/dashbaord/MonthlyEarning";
import Turnover from "@/components/dashbaord/Turnover";
import WeeklyStatistics from "@/components/dashbaord/WeeklyStatistics";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DashboardClient = () => {
  const featuresData = [
    {
      title: "Transactions",
      value: "96",
      icon: "/assets/icons/report 1.svg",
      bgColor: "#ECF2FF",
      textColor: "#5D87FF",
    },
    {
      title: "Chiffre du mois",
      value: "3,650",
      icon: "/assets/icons/google-analytics 1.svg",
      bgColor: "#FEF5E5",
      textColor: "#FFAE1F",
    },
    {
      title: "Paiements refusés",
      value: 96,
      icon: "/assets/icons/wallet 1.svg",
      bgColor: "#FBF2EF",
      textColor: "#FA896B",
    },
  ];

  return (
    <div className="space-y-5 mb-6 xl:space-y-8">
      <div className=" grid sm:grid-cols-2 xl:flex gap-5 items-center">
        {featuresData.map((item, i) => (
          <div
            key={i}
            style={{ background: `${item.bgColor}` }}
            className={cn("w-full xl:w-[252.302px] rounded-[8px]  px-5 py-5 ")}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={45}
              height={45}
              quality={100}
              className=" block mx-auto"
            />
            <div className="space-y-1 pt-4">
              <p
                style={{ color: `${item.textColor}` }}
                className="text-sm font-semibold text-center"
              >
                {item.title}
              </p>
              <h4
                style={{ color: `${item.textColor}` }}
                className="text-heading-4 text-center"
              >
                {item.value}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className=" col-span-12 xl:col-span-8 rounded-12 space-y-4 shadow-shadow-1 bg-white p-5">
          {/* Chiffre d’affaires */}
          <Turnover />
        </div>
        <div className=" col-span-12 xl:col-span-4 grid grid-rows-2 gap-5">
          <AnnualStatistics />
          <MonthlyEarning />
        </div>
      </div>
      <Contracts />
      <div className="flex  gap-6 flex-wrap">
        <WeeklyStatistics />
        <div className=" px-5 rounded-md bg-warning h-[75px] flex items-center gap-2">
          <Image
            src={"/assets/icons/imgpsh_fullsize_anim (11) 1 (1).png"}
            alt=""
            width={35}
            height={35}
          />
          <p className="text-[#FF6174] text-base font-semibold">
            Il faut que vous remplissiez des documents !
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
