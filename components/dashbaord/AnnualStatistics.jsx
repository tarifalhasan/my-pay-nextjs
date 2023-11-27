import Image from "next/image";

const AnnualStatistics = () => {
  return (
    <div className=" rounded-12 shadow-shadow-1 p-4">
      <h5 className=" text-heading-5">Statistiques annuel</h5>
      <div className="flex i justify-between">
        <div className=" pt-6  space-y-4">
          <h3 className=" text-heading-3">$36,358</h3>
          <div className="flex flex-1 items-center gap-1">
            <div className=" bg-[#E6FFFA] w-5 h-5 rounded-full grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.1333 11.7667L11.8333 11.0667L5.26659 4.5L11.2333 4.5V3.5L3.56659 3.5L3.56659 11.1667H4.56659L4.56659 5.2L11.1333 11.7667Z"
                  fill="#13DEB9"
                />
              </svg>
            </div>
            <p className="text-base text-gray-medium-blue-grey">
              <b className=" text-foreground">+9%</b>than last year
            </p>
          </div>
          <ul className="flex items-center gap-2">
            <li className="text-xs flex items-center gap-1 text-gray-medium-blue-grey">
              <span className=" w-[10px] block  h-[10px] rounded-full bg-primary-blue"></span>
              2023
            </li>
            <li className="text-xs flex items-center gap-1 text-gray-medium-blue-grey">
              <span className=" w-[10px] block  h-[10px] rounded-full"></span>
              2022
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={"/assets/images/pie.svg"}
            alt="sds"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnualStatistics;
