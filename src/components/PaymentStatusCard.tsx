import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { PaymentStatusCardProps } from "@/types";
import { CircleCheck, CircleX } from "lucide-react";

const PaymentStatusCard = ({ status }: PaymentStatusCardProps) => {
  console.log(status);
  const isSuccess = status === "successful";
  const color = isSuccess ? "text-green-500" : "text-red-600";
  const message = isSuccess ? "Successful Payment" : "Payment Failed";
  const description = isSuccess ? "You can now close this page" : "Sorry, there was a payment error";
  const Icon = isSuccess ? CircleCheck : CircleX;

  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle className={`text-gray-700 ${color}`}>
          <p className="text-sm mb-2">🔶encuadrado</p>
          <p className="flex">
            {message} <Icon className="ml-2"/>
          </p>
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default PaymentStatusCard