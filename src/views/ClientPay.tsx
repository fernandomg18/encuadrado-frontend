import PaymentMethod from "@/components/PaymentMethod"
import { getAppointmentById } from "@/services/api"
import { Appointment } from "@/types"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ClientPay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [appointment, setAppointment] = useState<Appointment>()
  const { appointment_id } = useParams<{ appointment_id: string}>()

  useEffect(() => {
    setIsLoading(true);
    const fetchAppointments = async () => {
      const response = await getAppointmentById(appointment_id)
      setAppointment(response)
      setIsLoading(false)
    }
    fetchAppointments()
  }, [appointment_id])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : appointment ? (
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