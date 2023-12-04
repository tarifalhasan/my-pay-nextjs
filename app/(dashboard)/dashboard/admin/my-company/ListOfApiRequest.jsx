"use client";
import { AiOutlineInfoCircle } from "react-icons/ai";

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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "Remboursé",

    name: "MyAPP",
    api_url: "https://api.com/users",
  },
  {
    id: "ffgfgr",
    amount: 316,
    status: "Encaissement",

    name: "MyAPP",
    api_url: "https://api.com/users",
  },
  {
    id: "fgfgfg",
    amount: 316,
    status: "Remboursé",

    name: "MyAPP",
    api_url: "https://api.com/users",
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
    header: "Nom de l’application",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "api_url",
    header: "Nom de l’application",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("api_url")}</div>
    ),
  },
  {
    accessorKey: "id",
    header: "Id de l’application",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },

  {
    accessorKey: "status",
    header: "Type de demandess",
    cell: ({ row }) => {
      const value = row.getValue("status");
      return (
        <Badge variant={value === "Remboursé" ? "refunded" : "open"}>
          {value}
        </Badge>
      );
    },
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <AiOutlineInfoCircle className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ListOfApiRequest() {
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
    <div className="w-full">
      <div>
        <h3 className=" text-heading-5 pb-4">Liste des requêtes API</h3>
        <div className="rounded-[8px] p-4 border">
          <Table className="min-w-max w-full table-auto">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
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
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
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
            <div className=" inline-flex items-center gap-4">
              <p className="text-xs">Rows per page:</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className=" flex items-center gap-1">
                    <span className=" text-=">5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0002 12.4997L5.8335 8.33301H14.1668L10.0002 12.4997Z"
                        fill="#2A3547"
                      />
                    </svg>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>10</DropdownMenuItem>
                  <DropdownMenuItem>20 </DropdownMenuItem>
                  <DropdownMenuItem>13</DropdownMenuItem>
                  <DropdownMenuItem>15</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <p className=" text-xs">1–5 of 12</p>
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
      </div>
    </div>
  );
}
