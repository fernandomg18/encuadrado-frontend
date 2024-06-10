import { createSlice } from "@reduxjs/toolkit";

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
  },
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    appendAppointments: (state, action) => {
      state.appointments = state.appointments.concat(action.payload);
    }
  },
});

export const { setAppointments, appendAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;