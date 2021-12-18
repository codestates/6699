import { configureStore, createSlice } from "@reduxjs/toolkit"; 
const store = createSlice(
  { name: "storeReducer", 
    initialState: {image:{0:'../images/category_all', 1:'../images/category_health', 2:'../images/category_study',3:'../images/category_economy',4:'../images/category_relationship',5:'../images/category_love'}, count: 1},
    reducers: { plus: (state, action) => {state.count++},
                minus: (state, action) => {state.count--}
               } });
                
export const { plus, minus } = store.actions;
export default configureStore({ reducer: store.reducer });

