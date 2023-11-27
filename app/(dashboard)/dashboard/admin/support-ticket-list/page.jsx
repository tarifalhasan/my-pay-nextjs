import Mask from "@/components/dashbaord/Mask";
import SearchBar from "@/components/ui/SearchBar";
import { IoMdClose } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

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
import { Badge } from "@/components/ui/badge";
import { BiFilterAlt } from "react-icons/bi";

const THEAD = [
  "Sujet du Ticket",
  "Date",
  "Entreprise",
  "Propriétaire",
  "Gravité",
  "Actions",
];

const TABLEDATA = [
  {
    subject: "AlphaTech Solutions",
    business: "Web Designer",
    owner: "/assets/images/Rectangle 154.png",
    owner: "Tarif",
    status: "paid",
    date: "05-12-2021",
  },
  {
    subject: "Global Foods Inc.",
    business: "Web Designer",
    owner: "/assets/images/avatar3.png",
    owner: "Compte A",
    status: "paid",
    date: "05-12-2021",
  },
  {
    subject: "NovaDesign Studios",
    business: "Web Designer",
    owner: "/assets/images/avatar4.png",
    owner: "Compte B",
    status: "pending",
    date: "05-12-2021",
  },
  {
    subject: "Sunil Joshi",
    business: "EcoGreen Solutions",
    owner: "/assets/images/avatar5.png",
    owner: "Compte C",
    status: "paid",
    date: "05-12-2021",
  },
];
const SupportTicketList = () => {
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
                <p className="text-sm">{data.subject}</p>
              </TableCell>
              <TableCell className="text-sm  text-gray-md">
                {data.date}
              </TableCell>
              <TableCell>
                <p className="text-sm">{data.business}</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">{data.owner}</p>
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
              <TableCell>
                <div className="flex items-center gap-2">
                  <MdOutlineRemoveRedEye size={22} />
                  <IoMdClose size={22} />
                </div>
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

export default SupportTicketList;
