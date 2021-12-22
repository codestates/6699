import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedSayings:[],likedArticles:[],isFocus:'post' };

const mySlice = createSlice({
  name: 'mypage',
  initialState: initialState,
  reducers: {
    setLikedSayings: (state, { payload }) => {
      state.likedSayings = payload;
    },
    setLikedArticle: (state,{payload}) => {
      state.likedArticles = payload;
    },
    setIsFocus:(state, { payload }) => {
      state.isFocus = payload;
    }
  }
});

export const {setLikedSayings, setLikedArticle, setIsFocus }
 = mySlice.actions;

export default mySlice.reducer;