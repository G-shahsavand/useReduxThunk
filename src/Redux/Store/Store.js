import { configureStore } from "@reduxjs/toolkit";
import  Counter  from './../Slice/Slice';
import  UsersList  from './../Slice/UsersSlice';


const Store = configureStore({
    reducer : {
        Counter ,
        UsersList ,
    }
})


export default Store;