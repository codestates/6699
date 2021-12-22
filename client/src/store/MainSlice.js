import { createSlice } from "@reduxjs/toolkit";
const initialState = { articles: [], isRendered:false, focusedTitle:'',sayingTitles:[],likes:[], focusedSayingId:0, sayingIds:[], posts:[],likeOrNew:'like'}; 
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
    setLikes:(state,{ payload}) => {
      state.likes= payload;
    },
    setFocusedSayingId:(state,{ payload}) => {
      state.focusedSayingId = payload;
    },
    setSayingIds:(state,{ payload}) => {
      state.sayingIds = payload;
    },
    setPosts:(state,{ payload}) => {
      state.posts = payload;
    },
    setLikeOrNew:(state,{ payload}) => {
      state.likeOrNew = payload;
    }
    }});
                
export const { setArticles, setSayings, setIsRendered, setFocusedTitle, setSayingTitles, setLikes, setFocusedSayingId,setSayingIds, setPosts, setLikeOrNew } = mainSlice.actions;
<<<<<<< HEAD
export default mainSlice.reducer;
=======
export default mainSlice.reducer;

>>>>>>> a47500496db3d82e18861cd94ae23594db338c3d
