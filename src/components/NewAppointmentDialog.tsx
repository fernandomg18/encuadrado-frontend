import DatePicker from "@/components/DatePicker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { createAppointment } from "@/services/api";
import { appendAppointments } from "@/store/appointments/appointmentsSlice";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentStatusSelect from "./PaymentStatusSelect";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const NewAppointmentDialog = () => {
  const [date, setDate] = useState<Date>()
  const [email, setEmail] = useState<string>()
  const [amount, setAmount] = useState<string>()
  const [status, setStatus] = useState<string>()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);

  const resetForm = () => {
    setDate(undefined)
    setEmail('')
    setAmount('')
    setStatus('')
  }

  const handleSubmit = async () => {
    if (!date || !email || !amount || !status) {
      alert("Please fill all fields")
      return
    }
    const newAppointment = {
      date: date.toISOString().split('T')[0],
      email,
      amount: parseInt(amount),
      status,
      user_id: user.id
    }
    try {
      const response = await createAppointment(newAppointment);
      dispatch(appendAppointments(response));
      resetForm();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-gradient-to-br from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700 hover:text-white ml-auto"
        >
          <Plus className="pr-1"/>
            Add Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new appointment</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePicker date={date} setDate={setDate}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount (CLP)
            </Label>
            <Input
              id="amount"
              type="number"
              className="col-span-3"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right col-span-1">
              Status
            </Label>
            <div className="col-span-3">  
              <PaymentStatusSelect status={status} setStatus={setStatus}/>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button 
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewAppointmentDialog;