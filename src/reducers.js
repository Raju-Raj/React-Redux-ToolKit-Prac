import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const stateReducer = createReducer(initialState,{

    increment : (state,action) => {
        state.count = state.count+1;
    },

    incrementByValue : (state,action) => {
        state.count = state.count+action.payload;
    },

    decrement : (state,action) => {
        state.count = state.count-1
    },

    decrementByValue : (state,action) => {
        state.count = state.count-action.payload;
    }
})