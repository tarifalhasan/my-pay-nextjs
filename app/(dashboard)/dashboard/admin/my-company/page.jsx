"use client";
import Mask from "@/components/dashbaord/Mask";
import Mypay from "@/components/dashbaord/Mypay";
import { useRouter } from "next/navigation";
import Contracts from "./Contracts";
import ListOfApiRequest from "./ListOfApiRequest";
import MyCompanyListOfInvoices from "./ListOfInvoices";
import TableOfDocuments from "./TableOfDocuments";

const MyCompanysss = () => {
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
    <div className="space-y-6 xl:space-y-10 mb-6">
      {/* mask */}
      <Mask title={"Informations de l’entreprise"} />
      <Mypay />
      <TableOfDocuments />
      <Contracts />
      <MyCompanyListOfInvoices />
      <ListOfApiRequest />
      <TableOfDocuments />
    </div>
  );
};

export default MyCompanysss;
