import PaymentMethod from "@/components/PaymentMethod"
import { useParams } from "react-router-dom"

const appointments = [
  {
    id: "728ed52f",
    amount: 100000,
    status: "pending",
    email: "m@example.com",
    date: "2021-09-01",
  },
  {
    id: "728ed52g",
    amount: 20000,
    status: "processing",
    email: "example@si.cl",
    date: "2021-09-02",
  },
  {
    id: "728ed52h",
    amount: 3000,
    status: "paid",
    email: "elpmaxe@gmal.com",
    date: "2021-09-03",
  },
  {
    id: "728ed5fw",
    amount: 2342093,
    status: "paid",
    email: "sisiisis@gmal.com",
    date: "2021-09-02",
  },
  {
    id: "728ed5243",
    amount: 2432,
    status: "pending",
    email: "hola@gmal.com",
    date: "2021-09-06",
  },
  {
    id: "728ed5235",
    amount: 12,
    status: "failed",
    email: "dsas@gmal.com",
    date: "2021-09-02",
  },
  {
    id: "728ed556",
    amount: 3000,
    status: "processing",
    email: "dsadsadasdada@gmal.com",
    date: "2021-09-03",
  },
  {
    id: "728ed543",
    amount: 1000,
    status: "paid",
    email: "iris@gmal.com",
    date: "2021-09-01",
  },
]

const ClientPay = () => {
  const { appointment_id } = useParams<{ appointment_id: string }>()

  const appointment = appointments.find((appointment) => appointment.id === appointment_id)
  console.log(appointment)

  return (
    <div 
      className="flex items-center justify-center h-screen bg-gray-50"
    >
      {appointment ? (
        <PaymentMethod appointment={appointment}/>
      ) : (
        <div>
          <p>Error 404: Appointment not found</p>
        </div>
      )}
      
    </div>
  )
}

export default ClientPay