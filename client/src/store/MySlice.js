import { createSlice } from '@reduxjs/toolkit';

const initialState = { articles: [],sayings: [],comments: [],
  likedSayings:[],likedComments:[],isFocus:'post' };

const mySlice = createSlice({
  name: 'mypage',
  initialState: initialState,
  reducers: {
    setArticles:(state,{ payload})=> {
      state.articles = payload;
    },
    setSayings: (state,{payload}) => {
      state.sayings = payload;
    },
    setComments: (state,{payload}) => {
      state.comments = payload;
    },
    setLikedSayings: (state, { payload }) => {
      state.likedSayings = payload;
    },
    setLikedComments: (state,{payload}) => {
      state.likedComments = payload;
    },
    setIsFocus:(state, { payload }) => {
      state.isFocus = payload;
    }
  }
});

export const { setArticles, setSayings, setComments, setLikedSayings, setLikedComments, setIsFocus }
 = mySlice.actions;

export default mySlice.reducer;