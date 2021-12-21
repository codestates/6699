import { createSlice } from "@reduxjs/toolkit";
const initialState = { articles: [], sayings: [], isRendered:false, isFirst:'',isLikeNew:1 }; 
const mainSlice = createSlice(
  { name: 'main', 
    initialState: initialState,
    reducers: {
    setArticles:(state,{payload})=> {
      state.articles = payload;
    },
    setSayings: (state,{payload}) => {
      state.sayings = payload;
    },
    setIsRendered:(state, { payload }) => {
      state.isRendered = payload;
    },
    setIsFirst:(state, { payload }) => {
      state.isFirst = payload;
    },
    setIsLikeNew:(state,{ payload}) => {
      state.isLikeNew = payload;
    }
    }});
                
export const { setArticles, setSayings, setIsRendered, setIsFirst, setIsLikeNew } = mainSlice.actions;
export default mainSlice.reducer;

