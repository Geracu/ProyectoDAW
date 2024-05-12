import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: []
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
      fetch("http://localhost:3001/goals/addGoals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "123456"
        },
        body: JSON.stringify(action.payload)
      }).catch((err) => {
        console.log(err);
      })
    },
    initAddGoal: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    completeGoal: (state, action) => {
      state.value = state.value.filter((goal) => goal.id !== action.payload.id);
      fetch("http://localhost:3001/goals/removeGoals/" + action.payload.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "123456"
        },
      }).catch((err) => {
        console.log(err);
      })
    },

  }
})

export const { addGoal, initAddGoal, completeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
