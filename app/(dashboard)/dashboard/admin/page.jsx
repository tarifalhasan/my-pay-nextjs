import Mask from "@/components/dashbaord/Mask";
import SearchBar from "@/components/ui/SearchBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";

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
import { BiFilterAlt } from "react-icons/bi";

const THEAD = ["Nom complet", "Email", "Numéro de téléphone", "Actions"];

const TABLEDATA = [
  {
    name: "Sunil Joshi",
    role: "Web Designer",
    avatar: "/assets/images/avatar2.png",
    email: "sunil@web.com",
    phone: "+33 612 344 586",
  },
  {
    name: "Sunil Joshi",
    role: "Web Designer",
    avatar: "/assets/images/avatar2.png",
    email: "sunil@web.com",
    phone: "+33 612 344 586",
  },
  {
    name: "Sunil Joshi",
    role: "Web Designer",
    avatar: "/assets/images/avatar2.png",
    email: "sunil@web.com",
    phone: "+33 612 344 586",
  },
  {
    name: "Sunil Joshi",
    role: "Web Designer",
    avatar: "/assets/images/avatar2.png",
    email: "sunil@web.com",
    phone: "+33 612 344 586",
  },
];
const AdminDashboard = () => {
  return (
    <div className="space-y-7 mb-5">
      <Mask title={"Liste des clients"} />
      <div className="bg-white rounded-8 shadow-shadow-1 px-2 flex items-center h-[82px]">
        <h2 className="text-heading-5">Liste des clients</h2>
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
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={`${data.avatar}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h6 className="text-base font-semibold">{data.name}</h6>
                    <p className="text-sm">{data.role}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-base">{data.email}</TableCell>
              <TableCell className="text-base font-semibold">
                {data.phone}
              </TableCell>
              <TableCell>
                <div className=" inline-flex items-center gap-2">
                  <FaRegEye size={24} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <BsThreeDotsVertical size={20} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[249px]">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <IoMailOpenOutline className=" text-2xl text-gray-medium-blue-grey" />
                        <span className=" text-sm text-gray-medium-blue-grey">
                          Changer votre email
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <LuPencilLine className=" text-2xl text-gray-medium-blue-grey" />
                        <span className=" text-sm text-gray-medium-blue-grey">
                          Réinitialiser le mot de passe
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex  justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default AdminDashboard;
