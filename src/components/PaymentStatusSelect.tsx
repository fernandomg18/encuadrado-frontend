import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PaymentStatusSelectProps } from "@/types";

const PaymentStatusSelect = ({setStatus}: PaymentStatusSelectProps) => {
  return (
    <Select onValueChange={setStatus}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select payment status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Payment Status</SelectLabel>
          <SelectItem value="paid">Paid</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="failed">Failed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default PaymentStatusSelect