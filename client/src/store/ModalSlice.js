import { createSlice } from '@reduxjs/toolkit';

const initialState = { loginModal: false, signupModal: false, postModal: false, sayingModal: false, sayingCategoryModal: false };

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
      state.postModal = payload;
    },
    showSayingModal: (state, { payload }) => {
      state.sayingModal = payload;
    },
    showSayingCategoryModal: (state, { payload }) => {
      state.sayingCategoryModal = payload;
    },

  }
});
export const { showLoginModal, showSignupModal, showPostModal, showSayingModal,showSayingCategoryModal } = modalSlice.actions;
export default modalSlice.reducer;