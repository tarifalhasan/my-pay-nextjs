"use client";
import Pagination from "@/components/ui/Pagination";
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
import { Eye } from "lucide-react";

const TableOfDocuments = () => {
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
    <div>
      <div className="flex items-center justify-between">
        <h5 className=" text-sm pb-5 sm:text-xl font-semibold">
          Tableau des documents
        </h5>
        <Button variant="secondary">Ajouter</Button>
      </div>
      <div className="w-full mx-auto">
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
      <div className=" flex justify-center py-5">
        <Pagination />
      </div>
    </div>
  );
};

export default TableOfDocuments;
