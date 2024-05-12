import {createSlice} from '@reduxjs/toolkit'

export const optionSlice = createSlice({
    name:'option',
    initialState:{
        currentView:'goals'
    },
    reducers:{
        changeView: (state, action) => {
            state.currentView = action.payload;
        }
    }
})

export const {changeView} = optionSlice.actions;

export default optionSlice.reducer