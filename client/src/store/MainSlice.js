import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  articles: [], 
  sayingTitles: [], 
  images: [], 
  likes: [], 
  sayingIds: [], 
  posts: [],
  totalComment: [],
  createdArticleInfo: {}, 
  sayingInfoCreatedArticle: {}, 
  focusedSayingId: 0, 
  sayingIdforCreatedArticle: 0, 
  createdArticleId: 0, 
  index: 0, 
  focusedTitle: '',
  likeOrNew: 'like',
  nowCategory: '건강',
  isRendered: false
 }; 

const mainSlice = createSlice(
  { name: 'main', 
    initialState: initialState,
    reducers: {
    setArticles:(state, { payload })=> {
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
    setImages:(state, { payload }) => {
      state.images= payload;
    },
    setLikes:(state, { payload }) => {
      state.likes= payload;
    },
    setFocusedSayingId:(state, { payload }) => {
      state.focusedSayingId = payload;
    },
    setSayingIdforCreatedArticle:(state, { payload }) => {
      state.sayingIdforCreatedArticle = payload;
    },
    setCreatedArticleId:(state, { payload }) => {
      state.createdArticleId = payload;
    },
    setSayingIds:(state, { payload }) => {
      state.sayingIds = payload;
    },
    setPosts:(state, { payload }) => {
      state.posts = payload;
    },
    setIndex:(state, { payload }) => {
      state.index = payload;
    },
    setLikeOrNew:(state, { payload }) => {
      state.likeOrNew = payload;
    },
    setCategory:(state, { payload }) => {
      state.nowCategory = payload;
    },
    getCreatedArticleInfo: (state, { payload }) => { 
      state.createdArticleInfo = payload;
    }
    ,
    getSayingInfoCreatedArticle: (state, { payload }) => { 
      state.sayingInfoCreatedArticle = payload;
    },
    getTotalComment: (state, { payload }) => { 
      state.totalComment = payload;
    }
    }});
       
export const { 
  setArticles, 
  setSayings, 
  setIsRendered, 
  setFocusedTitle, 
  setSayingTitles, 
  setImages, 
  setLikes, 
  setFocusedSayingId, 
  setSayingIdforCreatedArticle, 
  setCreatedArticleId, 
  setSayingIds, 
  setPosts, 
  setLikeOrNew, 
  setIndex, 
  setCategory, 
  getCreatedArticleInfo, 
  getSayingInfoCreatedArticle,
  getTotalComment
 } = mainSlice.actions;

export default mainSlice.reducer;

