import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: []
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push({...action.payload, isCompleted: false});
    },
    completeGoal: (state, action) => {
      const index = state.value.findIndex(goal => goal.name === action.payload.name);
      if (index !== -1) {
        state.value[index].isCompleted = true;
      }
    }
  }
})

export const { addGoal, completeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
