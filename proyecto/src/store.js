import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice";
import optionReducer from "./Reducers/optionSlice";

export default configureStore({
    reducer:{
        goals:goalReducer,
        option:optionReducer
    }
})