"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Phone, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const overviewData = [
  {
    title: "Total des tickets",
    count: 8,
    bgColor: "hsla(201, 100%, 95%, 1)",
    textColoe: "hsla(224, 100%, 68%, 1)",
  },
  {
    title: "Ticket en attente",
    count: 2,
    bgColor: "hsla(38, 93%, 95%, 1)",
    textColoe: "hsla(38, 100%, 56%, 1)",
  },
  {
    title: "Tickets ouverts",
    count: 2,
    bgColor: "hsla(168, 100%, 95%, 1)",
    textColoe: "hsla(169, 85%, 47%, 1)",
  },
  {
    title: "Tickets fermés",
    count: 4,
    bgColor: "hsla(14, 100%, 97%, 1)",
    textColoe: "hsla(13, 93%, 70%, 1)",
  },
];

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
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {overviewData.map((data, index) => (
          <div
            className="flex  rounded-[8px]  items-center justify-center flex-col gap-2 h-[120px]"
            key={index}
            style={{
              background: `${data.bgColor}`,
            }}
          >
            <h2
              className="text-heading-3"
              style={{ color: `${data.textColoe}` }}
            >
              {data.count}
            </h2>
            <p className="text-base" style={{ color: `${data.textColoe}` }}>
              {data.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex  mx-auto items-center gap-5   sm:justify-between">
        <div
          style={{ background: "rgba(249, 249, 249, 0.89)" }}
          className=" rounded-[10px] px-4 py-7 inline-flex items-center gap-2"
        >
          <div className=" w-14 h-14 rounded-[13px] grid place-items-center bg-primary-blue">
            <Phone className="text-white" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-xl font-medium tracking-[-0.4px]">
              Numéro de téléphone
            </p>
            <p className="text-xl text-gray-md font-medium tracking-[-0.4px]">
              +33 676 634 529
            </p>
          </div>
        </div>
        <Button variant="secondary" className=" gap-2">
          <Plus />
          Créer un ticket
        </Button>
      </div>
      <div className="w-full max-w-[95%] mx-auto">
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
                <TableCell>
                  {" "}
                  <Badge
                    className={"w-[7rem]"}
                    variant={row.statut === "Fermé" ? "refunded" : "open"}
                  >
                    {row.statut}
                  </Badge>
                </TableCell>
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
