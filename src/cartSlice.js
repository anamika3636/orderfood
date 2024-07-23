import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        additems:(state,action)=>{
            state .items.push(action.payload)
        },
        removeItem:(state)=>{
           state.items.pop()
        },
        clearItem:(state)=>{
            state.items.length = 0;
        }
    }
})
export const {additems,removeItem,clearItem}=cartSlice.actions
export default cartSlice.reducer;