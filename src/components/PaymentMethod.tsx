import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import formatAmount from "@/lib/formatAmount"
import { CreditCard, Wallet } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface Appointment {
  id: string
  amount: number
  status: string
  email: string
  date: string
}

interface PaymentMethodProps {
  appointment: Appointment;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ appointment }) => {
  const [currency, setCurrency] = useState("CLP")
  const [amount, setAmount] = useState(appointment.amount);
  const [amountFormatted, setAmountFormatted] = useState(formatAmount(amount, "CLP"));
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiresMonth, setExpiresMonth] = useState("");
  const [expiresYear, setExpiresYear] = useState("");
  const [cvc, setCvc] = useState("");
  const navigate = useNavigate();
  console.log(appointment);

  const changeAmount = (newCurrency: string) => {
    let newAmount;
    if (newCurrency === "USD") {
      newAmount = amount / 913;
      const formatted = formatAmount(newAmount, "USD");
      setAmountFormatted(formatted);
    } else if (newCurrency === "CLP") {
      newAmount = amount * 913;
      const formatted = formatAmount(newAmount, "CLP");
      setAmountFormatted(formatted);
    } else {
      newAmount = amount;
    }
    setAmount(newAmount);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    changeAmount(newCurrency);
  };

  const handlePayButton = () => {
    if (paymentMethod === "transfer") {
      navigate('/payment-status/successful');
      return;
    }
    if (!name || 
        cardNumber.length !== 16 || 
        !expiresMonth || 
        !expiresYear || 
        cvc.length !== 3) {
      navigate('/payment-status/failed');
    } else {
      navigate('/payment-status/successful');
    }
  };

  return (
    <Card className="w-5/12">
      <CardHeader>
        <CardTitle>
          <p className="text-sm mb-2">🔶encuadrado</p>
          <p className="flex text-green-500">
            Payment Method
          </p>
        </CardTitle>
        <CardDescription className="text-lg">
          Assigned email: {appointment.email}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Label>Amount</Label>
        <div className="flex items-center justify-between space-x-5">
          <Input 
            value={amountFormatted}
            readOnly
          /> 
          <Select value={currency} onValueChange={handleCurrencyChange}>
            <SelectTrigger defaultValue="CLP">
              <SelectValue placeholder="CLP"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CLP">CLP</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <RadioGroup 
          defaultValue="credit" 
          className="grid grid-cols-3 gap-4"
          onValueChange={(newValue) => setPaymentMethod(newValue)}
        >
          <div>
            <RadioGroupItem value="credit" id="credit" className="peer sr-only" />
            <Label
              htmlFor="credit"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CreditCard/>
              Credit
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="debit"
              id="debit"
              className="peer sr-only"
            />
            <Label
              htmlFor="debit"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CreditCard/>
              Debit
            </Label>
          </div>
          <div>
            <RadioGroupItem value="transfer" id="transfer" className="peer sr-only" />
            <Label
              htmlFor="transfer"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Wallet />
              Transfer
            </Label>
          </div>
        </RadioGroup>
        {paymentMethod !== "transfer" ? (
          <>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Card number</Label>
              <Input id="number"
                type="number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="month">Expires</Label>
                <Select value={expiresMonth} onValueChange={setExpiresMonth} >
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="2">February</SelectItem>
                    <SelectItem value="3">March</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">May</SelectItem>
                    <SelectItem value="6">June</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="8">August</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Year</Label>
                <Select value={expiresYear} onValueChange={setExpiresYear}>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" 
                  placeholder="CVC"
                  type="number"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)} 
                />
              </div>
            </div>
          </>
        ) : (
          <div className="grid gap-2">
            <h4 className="text-lg font-bold">Tansfer Data</h4>
            <p>Name: Ben Cuadrado</p>
            <p>Bank: Banco del Estadio </p>
            <p>Account number: 123456789</p>
            <p>RUT: 12.345.678-9</p>
            <p>Email: bencuadrado@gmal.com</p>
          
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handlePayButton}>Pay</Button>
      </CardFooter>
    </Card>
  )
}

export default PaymentMethod