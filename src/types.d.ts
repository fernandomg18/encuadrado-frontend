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