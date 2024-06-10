import { getUserAppointments } from '@/services/api';
import { setAppointments } from "@/store/appointments/appointmentsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "../lib/AppointmentsColumns";
import { DataTable } from "./DataTable";

const AppointmentsTable = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserAppointments(user.id);
      dispatch(setAppointments(result));
    };

    fetchData();
  }, [dispatch, user.id]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} />
    </div>
  )
}

export default AppointmentsTable;