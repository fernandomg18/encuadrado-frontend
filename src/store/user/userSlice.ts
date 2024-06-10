import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  user: '',
  email: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userInitialState,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = userInitialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;