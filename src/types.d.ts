export interface newAppointment {
  date: string,
  email: string,
  amount: number,
  status: string,
  user_id: string,
}

export interface Appointment {
  id: string,
  amount: number,
  status: "pending" | "processing" | "paid" | "failed",
  email: string,
  date: string,
  user_id: string,
}

export interface User {
  id: string,
  email: string,
  user: string,
}

export interface RootState {
  appointments: {
    appointments: Appointment[]; 
  };
  user: {
    user: User;
  };
}

export interface PaymentStatusCardProps {
  status: string | undefined;
}

export interface PaymentStatusSelectProps {
  setStatus: (status: string) => void;
}