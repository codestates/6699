import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLogin: false, userInfo: {} };
//isLogin, userInfo <- state 2개
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state) => {  //login 액션
      state.isLogin = true;
    },
    logout: (state) => { //logout 액션
      state.isLogin = false;
    },
    getUserInfo: (state, { payload }) => { //getUserInfo 액션
      state.userInfo = payload;
    }
  }
});

export const { login, logout, getUserInfo } = authSlice.actions;

export default authSlice.reducer;