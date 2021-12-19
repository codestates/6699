import { configureStore, createSlice } from "@reduxjs/toolkit"

const store =  createSlice({
  name: "storeReducer",
  initialState: {text:'', count: 0},
  reducers: {
  add: (state, action) => {state.text = action.payload},
  plus: (state, action) => {state.count++} }
})

export const { add, plus } = store.actions;
export default configureStore({ reducer: store.reducer });