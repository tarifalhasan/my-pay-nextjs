import Mask from "@/components/dashbaord/Mask";
import SearchBar from "@/components/ui/SearchBar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Pagination from "@/components/ui/Pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BiFilterAlt } from "react-icons/bi";

const THEAD = ["Nom de l’entreprise", "Siret", "Propriétaire", "Status"];

const TABLEDATA = [
  {
    company_name: "AlphaTech Solutions",
    siret: "Web Designer",
    owner: "/assets/images/Rectangle 154.png",
    owner_name: "Tarif",
    status: "paid",
  },
  {
    company_name: "Global Foods Inc.",
    siret: "Web Designer",
    owner: "/assets/images/avatar3.png",
    owner_name: "Lita",
    status: "paid",
  },
  {
    company_name: "NovaDesign Studios",
    siret: "Web Designer",
    owner: "/assets/images/avatar4.png",
    owner_name: "jack",
    status: "pending",
  },
  {
    company_name: "Sunil Joshi",
    siret: "EcoGreen Solutions",
    owner: "/assets/images/avatar5.png",
    owner_name: "Steve",
    status: "paid",
  },
];
const ListOfCountryEnterpris = () => {
  return (
    <div className="space-y-7 mb-5">
      <Mask title={"Liste des entreprises"} />
      <div className="bg-white shadow-shadow-1 rounded-8 px-2 flex items-center h-[82px]">
        <h2 className="text-heading-5">Liste des entreprises</h2>
      </div>

      <div className="flex items-center justify-between">
        <SearchBar
          className="max-w-[285px]"
          placeholder="Rechercher par nom, email etc..."
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <BiFilterAlt className="text-gray-md" size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table className="w-full table-auto min-w-max">
        <TableHeader>
          <TableRow className="border h-[65px]">
            {THEAD.map((td, i) => (
              <TableHead
                className="text-base  font-semibold text-foreground"
                key={i}
              >
                {td}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border-b [&_tr]:!border-x">
          {TABLEDATA.map((data, i) => (
            <TableRow className=" !h-16" key={i}>
              <TableCell>
                <p className="text-sm">{data.company_name}</p>
              </TableCell>
              <TableCell className="text-base font-semibold">
                {data.siret}
              </TableCell>
              <TableCell className="text-base">
                <div className=" inline-flex items-center gap-2">
                  <Avatar className="!rounded-[8px]">
                    <AvatarImage className="!rounded-[8px]" src={data.owner} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-base font-semibold text-gray-md">
                    {data.owner_name}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className="w-[98px] text-xs"
                  variant={
                    data.status === "paid"
                      ? "open"
                      : data.status === "pending"
                      ? "refunded"
                      : data.status === "in_progress"
                      ? "progress"
                      : "cancel"
                  }
                >
                  {data.status === "paid"
                    ? "Actif"
                    : data.status === "pending"
                    ? "En attente"
                    : data.status === "in_progress"
                    ? "En cours"
                    : "Annulée"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex  justify-start">
        <Pagination />
      </div>
    </div>
  );
};

export default ListOfCountryEnterpris;
