import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegCircleCheck } from "react-icons/fa6";

import AddCreditCardModal from "@/components/modals/AddCreditCardModal";
import { Eye } from "lucide-react";

const MyCompanyListOfInvoices = () => {
  const data = [
    {
      invoiceNumber: "253595",
      date: "2023-11-25",
      status: "paid",
      price: "$3.9k",
    },

    {
      invoiceNumber: "253595",
      date: "2023-11-25",
      status: "pending",
      price: "$24.5k",
    },
    {
      invoiceNumber: "253595",
      date: "2023-11-25",
      status: "in_progress",
      price: "$12.8k",
    },
    {
      invoiceNumber: "253595",
      date: "2023-11-25",
      status: "canceled",

      price: "$2.4k",
    },
    {
      invoiceNumber: "253595",
      date: "2023-11-25",
      status: "paid",
      price: "$3.9k",
    },
  ];

  return (
    <div>
      <h3 className=" text-heading-5 pb-4">Liste des factures</h3>
      <div className=" rounded-[8px] p-2 xl:p-4 shadow-shadow-1">
        <Table className="table-auto min-w-max w-full">
          <TableHeader>
            <TableRow className="border-x border-t">
              <TableHead>No facture</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border">
            {data.map((data, index) => (
              <TableRow className="border-x h-[4rem]" key={index}>
                <TableCell className="font-medium">
                  {data.invoiceNumber}
                </TableCell>
                <TableCell>{data.date}</TableCell>
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
                      ? "open"
                      : data.status === "pending"
                      ? "En attente"
                      : data.status === "in_progress"
                      ? "En cours"
                      : "Annulée"}
                  </Badge>
                </TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell className="text-center">
                  <div className=" inline-flex items-center gap-3">
                    <button>
                      <Eye className=" w-6 h-6 text-[#6C7984]" />
                    </button>
                    <AddCreditCardModal />

                    <button>
                      <FaRegCircleCheck className=" w-6 h-6 text-[#6C7984]" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyCompanyListOfInvoices;
