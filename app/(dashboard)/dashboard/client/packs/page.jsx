"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreditCardForm from "./CreditCardForm";
import DataTable from "./DataTable";
// Other imports...

const Packs = () => {
  const [isMonthliyPlan, setIsMonthliyPlan] = useState(false);
  const [planMapdata, setMapData] = useState([]);
  const plans = {
    monthly: [
      {
        name: "SILVER",
        isPopular: false,
        icons: "/assets/icons/silver.svg",
        price: 8.99,
        features: {
          transaction: 30,
          features2: "Lorem Ipsum",
          features3: null,
          features4: null,
          features5: null,
        },
      },
      {
        name: "BRONZE",
        isPopular: true,
        icons: "/assets/icons/BRONZE.svg",
        price: 10.99,
        features: {
          transaction: 30,
          features2: "Lorem Ipsum",
          features3: "Lorem Ipsum",
          features4: null,
          features5: null,
        },
      },
      {
        name: "SILVER",
        isPopular: false,
        icons: "/assets/icons/silver.svg",
        price: 8.99,
        features: {
          transaction: 30,
          features2: "Lorem Ipsum",
          features3: "Lorem Ipsum",
          features4: "Lorem Ipsum",
          features5: "Lorem Ipsum",
        },
      },
    ],
    annual: [
      {
        name: "SILVER",
        isPopular: false,
        icons: "/assets/icons/silver.svg",
        price: 35.99,
        features: {
          transaction: 30,
          features2: "Lorem Ipsum",
          features3: null,
          features4: null,
          features5: null,
        },
      },
      {
        name: "BRONZE",
        isPopular: true,
        icons: "/assets/icons/BRONZE.svg",
        price: 119.99,
        features: {
          transaction: 30,
          features2: "Lorem Ipsum",
          features3: "Lorem Ipsum",
          features4: null,
          features5: null,
        },
      },
      {
        name: "SILVER",
        isPopular: false,
        icons: "/assets/icons/silver.svg",
        price: 200.99,
        features: {
          transaction: 100,
          features2: "Lorem Ipsum",
          features3: "Lorem Ipsum",
          features4: "Lorem Ipsum",
          features5: "Lorem Ipsum",
        },
      },
    ],
  };

  useEffect(() => {
    if (!isMonthliyPlan) {
      setMapData(plans.monthly);
    } else {
      setMapData(plans.annual);
    }
  }, [isMonthliyPlan]);

  return (
    <div className=" space-y-5 mb-5 xl:space-y-10">
      {/* mask */}
      <div className=" h-[121px] bg-light-info rounded-[12px] flex items-center px-2 sm:px-5 relative overflow-hidden">
        <h2 className=" text-heading-1 text-slate-info">Les packs</h2>
        <Image
          width={168}
          height={165}
          quality={100}
          src={"/assets/images/product-review .png"}
          alt="detail de ticket"
          className="absolute  left-[82%]"
        />
      </div>
      <div className=" w-full space-y-5 mx-auto max-w-[734px]">
        <h2 className=" text-heading-2 text-center">
          Des plans flexibles conçus pour répondre à vos besoins
        </h2>
        <div className="flex items-center gap-1  justify-center">
          <p className="text-sm">Mensuel</p>
          <Switch
            checked={isMonthliyPlan}
            onCheckedChange={setIsMonthliyPlan}
          />
          <p>Annuel</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {planMapdata.map((data, index) => (
          <div
            key={index}
            className=" space-y-4 shadow-shadow-1 p-5 rounded-[8px]"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm">{data.name}</p>
              {data.isPopular && (
                <span className=" text-xs bg-light-warning px-4 py-1 rounded-full">
                  POPULAIRE
                </span>
              )}
            </div>
            <div className=" py-2">
              <Image
                alt={data.name}
                src={data.icons}
                width={90}
                height={90}
                quality={100}
                className=" w-[]"
              />
            </div>
            <div className=" ">
              <h3 className="text-4xl py-4 relative flex items-center">
                <small className=" text-base -mt-4 font-bold">$</small>
                {data.price}
                <small className="text-base  mt-4">
                  /{!isMonthliyPlan ? "mo" : "year"}
                </small>
              </h3>
            </div>
            <ul className="space-y-2">
              {Object.entries(data.features).map(
                ([featureKey, featureValue]) => (
                  <li key={featureKey}>
                    {featureValue !== null && featureValue !== "" ? (
                      <>
                        <span className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                              fill="#539BFF"
                            />
                          </svg>
                          <span className="text-sm">{featureValue}</span>
                        </span>
                      </>
                    ) : (
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.5469 17.954C19.7582 18.1653 19.8769 18.452 19.8769 18.7509C19.8769 19.0497 19.7582 19.3364 19.5469 19.5477C19.3355 19.7591 19.0489 19.8778 18.75 19.8778C18.4511 19.8778 18.1645 19.7591 17.9531 19.5477L12.0009 13.5937L6.04687 19.5459C5.83553 19.7572 5.54888 19.8759 5.25 19.8759C4.95111 19.8759 4.66447 19.7572 4.45312 19.5459C4.24178 19.3345 4.12305 19.0479 4.12305 18.749C4.12305 18.4501 4.24178 18.1635 4.45312 17.9521L10.4072 11.9999L4.455 6.04586C4.24365 5.83451 4.12492 5.54787 4.12492 5.24898C4.12492 4.9501 4.24365 4.66345 4.455 4.45211C4.66634 4.24076 4.95299 4.12203 5.25187 4.12203C5.55076 4.12203 5.8374 4.24076 6.04875 4.45211L12.0009 10.4062L17.955 4.45117C18.1663 4.23983 18.453 4.12109 18.7519 4.12109C19.0508 4.12109 19.3374 4.23983 19.5487 4.45117C19.7601 4.66251 19.8788 4.94916 19.8788 5.24804C19.8788 5.54693 19.7601 5.83358 19.5487 6.04492L13.5947 11.9999L19.5469 17.954Z"
                            fill="#7C8FAC"
                          />
                        </svg>
                        <span className="text-sm text-gray-medium-blue-grey">
                          {featureKey}
                        </span>
                      </span>
                    )}
                  </li>
                )
              )}
            </ul>
            <div className=" py-3">
              <Button variant="secondary" className="w-full">
                Choisir
              </Button>
            </div>
          </div>
        ))}
      </div>
      <DataTable />
      {/* Ajouter Carte Bleue */}
      <div className="pb-4">
        <h5 className="  text-heading-1">Ajouter Carte Bleue</h5>
        <CreditCardForm />
      </div>
    </div>
  );
};

export default Packs;
