

import { createSlice } from "@reduxjs/toolkit"; 
const landingSlice = createSlice(
  { name: 'landing', 
    initialState: {page: 1},
    reducers: { page: (state,action) =>{state.page},
                plus: (state,action) => {state.page++},
                minus: (state, action) => {state.page--},
                all: (state, action) => {state.page=0},
                health: (state, action) => {state.page=1},
                study: (state, action) => {state.page=2},
                economy: (state, action) => {state.page=3},
                relationship: (state, action) => {state.page=4},
                love: (state, action) => {state.page=5},
               } });
                
export const { page, plus, minus, all, health, study, economy, relationship, love } = landingSlice.actions;
export default landingSlice.reducer;

