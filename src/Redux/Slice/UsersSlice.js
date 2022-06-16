import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUsers = createAsyncThunk('asghar' , async ()=>{
    return( fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(List =>  {return List }))
  
})

export const UsersList = createSlice({
    name : 'List',
     initialState : {
        value : [{name : 'mammad'}] ,
        status : 'idle'
     },
     extraReducers : {
        [fetchUsers.pending] : (state) => {
            state.status = 'pending';
        },
        [fetchUsers.fulfilled] : (state , actions) => {
            state.value = actions.payload;
            state.status = 'sucsess';
        },
        [fetchUsers.rejected] : (state) => {
            state.status = 'error';
        },

     }
});


export default   UsersList.reducer;

