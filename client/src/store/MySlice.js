import { createSlice } from '@reduxjs/toolkit';

const initialState = {isFocus:'post', isPost:true ,posts:[], sayings:[],
comments:[], likedPosts:[], likedSayings:[]};

const mySlice = createSlice({
  name: 'mypage',
  initialState: initialState,
  reducers: {
    setIsFocus:(state, { payload }) => {
      state.isFocus = payload;
    },
    //토글에서 게시물 눌렀는지 여부 체크용 state
    setIsPost:(state, { payload })=> {
      state.isPost = payload;
    },
    //MyPosting 나의 게시물
    setPosts:(state, { payload })=>{
      state.posts = payload;
    },
    //MySaying 나의 명언
    setSayings:(state, { payload })=>{
      state.sayings = payload;
    },
    //MyComment 내가 쓴 댓글
    setComments:(state, { payload }) => {
      state.comments = payload;
    },
    //MyLikedPosting 좋아요 누른 게시물
    setLikedPost:(state, { payload })=> {
      state.likedPosts = payload;
    },
    //MyLikedSaying 좋아요 누른 명언
    setLikedSaying:(state, { payload }) => {
      state.likedSayings = payload;
    },
  }
});

export const {setIsFocus ,setIsPost, setPosts, setSayings, setComments,
setLikedPost, setLikedSaying}
 = mySlice.actions;

export default mySlice.reducer;