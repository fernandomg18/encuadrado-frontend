import PaymentStatusCard from "@/components/PaymentStatusCard";
import { useParams } from 'react-router-dom';

const PaymentStatus = () => {
  const { status } = useParams<{ status: string }>();

  return (
    <div 
      className="flex items-center justify-center h-screen bg-gray-50"
    >
      <PaymentStatusCard status={status} />
    </div>
  )
}

export default PaymentStatus