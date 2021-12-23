import { createSlice } from "@reduxjs/toolkit";
const initialState = { articles: [], isRendered:false, focusedTitle:'',sayingTitles:[], images:[], likes:[], focusedSayingId:0, sayingIds:[], posts:[],likeOrNew:'like',index:0, nowCategory:'건강'}; 
const mainSlice = createSlice(
  { name: 'main', 
    initialState: initialState,
    reducers: {
    setArticles:(state,{payload})=> {
      state.articles = payload;
    },
    setIsRendered:(state, { payload }) => {
      state.isRendered = payload;
    },
    setFocusedTitle:(state, { payload }) => {
      state.focusedTitle = payload;
    },
    setSayingTitles:(state, { payload }) => {
      state.sayingTitles = payload;
    },
    setImages:(state,{ payload}) => {
      state.images= payload;
    },
    setLikes:(state,{ payload}) => {
      state.likes= payload;
    },
    setFocusedSayingId:(state,{ payload}) => {
      state.focusedSayingId = payload;
    },
    setSayingIds:(state,{ payload}) => {
      state.sayingIds = payload;
    },
    setPosts:(state,{ payload }) => {
      state.posts = payload;
    },
    setIndex:(state,{ payload }) => {
      state.index = payload;
    },
    setLikeOrNew:(state,{ payload }) => {
      state.likeOrNew = payload;
    },
    setCategory:(state,{ payload }) => {
      state.nowCategory = payload;
    }
    }});
                
export const { setArticles, setSayings, setIsRendered, setFocusedTitle, setSayingTitles, setImages, setLikes, setFocusedSayingId,setSayingIds, setPosts, setLikeOrNew, setIndex, setCategory} = mainSlice.actions;

export default mainSlice.reducer;

