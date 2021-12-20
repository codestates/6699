import { createSlice } from '@reduxjs/toolkit';

const initialState = { allRank: [], healthRank: [], studyRank:[], economyRank:[], relationshipRank:[], loveRank:[], newRank:[] };

const rankSlice = createSlice({
  name: 'rank',
  initialState: initialState,
  reducers: {
    setAllRank: (state,{payload}) => {
      state.allRank = payload;
    },
    setHealthRank: (state,{payload}) => {
      state.healthRank = payload;
    },
    setStudyRank: (state, { payload }) => {
      state.studyRank = payload;
    },
    setEcoRank: (state,{payload}) => {
      state.economyRank = payload;
    },
    setRelRank: (state,{payload}) => {
      state.relationshipRank = payload;
    },
    setLoveRank: (state,{payload}) => {
      state.loveRank = payload;
    },
    setNewRank: (state,{payload}) => {
      state.newRank = payload;
    }
  }
});

export const { setAllRank, setHealthRank, setStudyRank, setEcoRank, setRelRank, setLoveRank, setNewRank } = rankSlice.actions;

export default rankSlice.reducer;