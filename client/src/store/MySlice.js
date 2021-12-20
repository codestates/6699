import { createSlice } from '@reduxjs/toolkit';

const initialState = { sayings: [], comments: [], likedSayings:[],likedComments:[] };

const mySlice = createSlice({
  name: 'mypage',
  initialState: initialState,
  reducers: {
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
    }
  }
});

export const { setSayings, setComments, setLikedSayings, setLikedComments } = mySlice.actions;

export default mySlice.reducer;