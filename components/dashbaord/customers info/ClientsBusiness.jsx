"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data = [
  {
    name: "AlphaTech Solutions",
    siret: "123 456 789 00012",
    activity: "Technologies de l'information",
    company_website: "www.futuremedinnovations.com",
  },
  {
    name: "AlphaTech Solutions",
    siret: "123 456 789 00012",
    activity: "Technologies de l'information",
    company_website: "www.futuremedinnovations.com",
  },
  {
    name: "AlphaTech Solutions",
    siret: "123 456 789 00012",
    activity: "Technologies de l'information",
    company_website: "www.futuremedinnovations.com",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nom de l’entreprise",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "siret",
    header: "Numéro de siret",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("siret")}</div>
    ),
  },
  {
    accessorKey: "activity",
    header: "Domaine d’activités",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("activity")}</div>
    ),
  },
  {
    accessorKey: "company_website",
    header: "Site web de l’entreprise",
    cell: ({ row }) => (
      <Link
        target="_blank"
        href={`https://${row.getValue("company_website")}`}
        className=" text-primary-blue"
      >
        {row.getValue("company_website")}
      </Link>
    ),
  },
];

export default function ClientBusiness() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full ">
      <div className="rounded-[8px] space-y-5 p-4 border">
        <div className=" space-y-2 pb-3">
          <h5 className=" text-heading-5">Changer image</h5>
          <p className="text-sm text-gray-medium-blue-grey">
            Changer l’image de votre profil
          </p>
        </div>
        <div className="rounded-[8px] p-4 border">
          <Table className="min-w-max w-full table-auto">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow className="!border h-[65px]" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="[&_tr:last-child]:border [&_tr]:!border">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="h-[60px]"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className=" text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-7 pb-2">
          <Switch className="rounded-md h-[21px]" />
        </div>
      </div>
    </div>
  );
}
