import appointmentsReducer from '@/store/appointments/appointmentsSlice';
import userReducer from '@/store/user/userSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user: userReducer,
    appointments: appointmentsReducer,
  },
});