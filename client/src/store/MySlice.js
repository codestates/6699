import { createSlice } from '@reduxjs/toolkit';

// const initialState = { articles: [],sayings: [],comments: [],
//   likedSayings:[],likedArticle:[],isFocus:'post' };

const initialState = { articles: [],sayings: [],comments: [],
  likedSayings:[],likedArticles:[],isFocus:'post' };

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
    setLikedArticle: (state,{payload}) => {
      state.likedArticles = payload;
    },
    setIsFocus:(state, { payload }) => {
      state.isFocus = payload;
    }
  }
});

export const { setArticles, setSayings, setComments, setLikedSayings, setLikedArticle, setIsFocus }
 = mySlice.actions;

export default mySlice.reducer;