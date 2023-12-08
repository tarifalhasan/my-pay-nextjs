"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

import SearchBar from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
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
    appName: "How Innovation Works",
    date: "Fri, Avril 28 2023",
    type_of_request: "Type 2",
    action: "",
    response_code: "250004566",
  },
  {
    appName: "Psalms Book for Growth",
    date: "Fri, Avril 28 2023",
    type_of_request: "Type 1",
    action: "",
    response_code: "250004566",
  },
  {
    appName: "The Psychology of Money",
    date: "Fri, Avril 28 2023",
    type_of_request: "Type 3",
    action: "",
    response_code: "250004566",
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
    accessorKey: "appName",
    header: "Nom de l’application",
    cell: ({ row }) => (
      <div className="capitalize font-bold">{row.getValue("appName")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "type_of_request",
    header: "Type de demande",
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("type_of_request")}</div>
    ),
  },
  {
    accessorKey: "response_code",
    header: "Code réponse",
    cell: ({ row }) => (
      <div className="capitalize text-primary-blue">
        {row.getValue("response_code")}
      </div>
    ),
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
              <MoreHorizontal className="h-4 w-4" />
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

export default function Application() {
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
      <div className="reg_top"></div>

      <div className="rounded-[8px] p-4 border">
        <div className="flex items-center py-4">
          <SearchBar
            placeholder="Filter emails..."
            value={table.getColumn("appName")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("appName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-auto">
                <Filter />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-[8px] p-4 border">
          <Table className="min-w-max w-full table-auto">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, index, arr) => {
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
                <ChevronLeft className=" opacity-20" />
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
