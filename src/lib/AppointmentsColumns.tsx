import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Appointment } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Copy, MoreHorizontal, SquareArrowOutUpRight } from "lucide-react"

function getPaymentLink(appointment_id: string) {
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  const newUrl = `${baseUrl}/client-payment/${appointment_id}`;
  return newUrl;
}

export const columns: ColumnDef<Appointment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(false);
          table.getRowModel().rows.forEach((row) => {
            if (row.original.status !== "paid") {
              row.toggleSelected(!!value);
            }
          });
        }}
        aria-label="Select all"
        className="bg-white text-orange-500 border-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          if (row.original.status !== 'paid') {
            row.toggleSelected(!!value)
          }
        }}
        aria-label="Select row"
        disabled={row.original.status === 'paid'}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      let color = "black";
      const value = row.getValue("status");
      if (value === "paid") {
        color = "text-green-500";
      } else if (value === "pending") {
        color = "text-yellow-500";
      } else if (value === "failed") {
        color = "text-red-500";
      } else if (value === "processing") {
        color = "text-blue-500";
      }
    
      return <p className={color}>{value as string}</p>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Amount (CLP)
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      }).format(amount)
 
      return <div className="text-right font-medium mr-8">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const appointment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                const url = getPaymentLink(appointment.id);
                window.open(url, '_blank');
              }}
            >
              Go to payment link <SquareArrowOutUpRight size={16} className="absolute right-2" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  getPaymentLink(appointment.id)
                )
              }
            >
              Copy payment link <Copy size={16} className="absolute right-2"/>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(appointment.id)}
            >
              Copy appointment ID <Copy size={16} className="absolute right-2"/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
