import { createSlice } from '@reduxjs/toolkit'

export const Counter = createSlice({
    name : 'counter',
     initialState : {
        value : 10 ,
     },
     reducers : {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
     }
});

export const  {increment , decrement}  = Counter.actions

export default   Counter.reducer;

