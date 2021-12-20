import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLogin: false, userInfo: {} };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    getUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    }
  }
});

export const { login, logout, getUserInfo } = authSlice.actions;

export default authSlice.reducer;