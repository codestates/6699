import { createSlice } from '@reduxjs/toolkit';

const initialState = { loginModal: false, signupModal: false,postModal: false,sayingModal: false};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showLoginModal: (state, { payload }) => {
      state.loginModal = payload;
    },
    showSignupModal: (state, { payload }) => {
      state.signupModal = payload;
    },
    showPostModal: (state, { payload }) => {
      state.PostModal = payload;
    },
    showSayingModal: (state, { payload }) => {
      state.SayModal = payload;
    }}
});

export const { showLoginModal, showSignupModal,showPostModal,showSayingModal } = modalSlice.actions;
export default modalSlice.reducer;