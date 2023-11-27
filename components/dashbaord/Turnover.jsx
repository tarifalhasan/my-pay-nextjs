import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BiSolidGrid } from "react-icons/bi";

import { Button } from "../ui/button";
import TurnOverAreaChart from "./charts/TurnOverAreaChart";

const Turnover = () => {
  return (
    <div className=" space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h5 className=" text-heading-5">Chiffre d’affaires</h5>
          <p className="text-sm text-gray-medium-blue-grey">
            Evolution par mois
          </p>
        </div>
        <Select>
          <SelectTrigger className="w-[128px]">
            <SelectValue placeholder="Année 2023" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">Année 2023</SelectItem>
            <SelectItem value="2024">Année 2024</SelectItem>
            <SelectItem value="2021">Année 2021</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col lg:flex-row  gap-8">
        <div className=" w-full lg:basis-[70%]">
          <TurnOverAreaChart />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-[#ECF2FF] w-11 h-11 rounded-[8px] grid place-items-center">
              <BiSolidGrid size={22} className=" text-primary-blue" />
            </div>
            <div>
              <h3 className=" text-heading-3">$63,489.50</h3>
              <p className="text-sm text-gray-medium-blue-grey">
                Total des gains
              </p>
            </div>
          </div>
          <ul className=" pt-5 space-y-4">
            <li>
              <div className="flex items-start gap-4">
                <div className=" mt-2 w-2 h-2 rounded-full bg-primary-blue" />
                <div>
                  <p className=" text-sm text-gray-md">Gains du mois</p>
                  <h5 className=" text-heading-5">$48,820</h5>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-4">
                <div className=" mt-2 w-2 h-2 rounded-full bg-primary-blue" />
                <div>
                  <p className=" text-sm text-gray-md">Dépenses du mois</p>
                  <h5 className=" text-heading-5">$26,498</h5>
                </div>
              </div>
            </li>
          </ul>
          <div className=" pt-20">
            <Button className=" " variant="secondary">
              Voir le rapport complet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turnover;
