import { configureStore } from "@reduxjs/toolkit";
import  Counter  from './../Slice/Slice';


const Store = configureStore({
    reducer : {
        Counter ,
    }
})


export default Store;