"use client";
import Mypay from "@/components/dashbaord/Mypay";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ClientSupport = () => {
  const router = useRouter();

  const TableData = [
    {
      id: 1,
      sujet: "Sed ut perspiciatis unde omnis iste",
      statut: "Fermé",
      date: "02-12-2021",
    },
    {
      id: 2,
      sujet: "Consequuntur magni dolores eos qui ratione",
      statut: "En attente",
      date: "02-12-2021",
    },
    {
      id: 3,
      sujet: "Exercitationem ullam corporis",
      statut: "Ouvert",
      date: "02-12-2021",
    },
    {
      id: 4,
      sujet: "Sed ut perspiciatis unde omnis iste",
      statut: "Fermé",
      date: "02-12-2021",
    },
  ];

  return (
    <div className="space-y-6 xl:space-y-10">
      {/* mask */}
      <div className=" h-[121px] bg-light-info rounded-[12px] flex items-center px-2 sm:px-5 relative overflow-hidden">
        <h2 className=" text-heading-1 text-slate-info">Mon entreprise</h2>
        <Image
          width={168}
          height={165}
          quality={100}
          src={"/assets/images/product-review .png"}
          alt="detail de ticket"
          className="absolute  left-[82%]"
        />
      </div>
      <Mypay />

      <div className="w-full xl:max-w-[95%] mx-auto">
        <Table className="min-w-max w-full table-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Sujet</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="t">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b">
            {TableData.map((row, i) => (
              <TableRow className="h-[65px]" key={i}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.sujet}</TableCell>
                <TableCell>{row.statut}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell className="text-right">
                  <Eye />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClientSupport;
