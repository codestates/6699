import { createSlice } from '@reduxjs/toolkit';

const initialState = { loginModal: false, signupModal: false }; //state2개

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showLoginModal: (state, { payload }) => {
      state.loginModal = payload;
    },
    showSignupModal: (state, { payload }) => {
      state.signupModal = payload;
    }
  }
});

export const { showLoginModal, showSignupModal } = modalSlice.actions;
export default modalSlice.reducer;