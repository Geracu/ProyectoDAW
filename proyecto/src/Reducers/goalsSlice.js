import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: []
  },
  reducers: {
    addGoal: (state, action) => {
      const { name, description, dueDate, identifier } = action.payload;
      state.value.push({ name, description, dueDate, isCompleted: false, identifier });
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
