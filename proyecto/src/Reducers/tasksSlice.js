import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: []
    },
    reducers: {
        addTasks: (state, action) => {
            state.value.push(action.payload);
            fetch("http://localhost:3001/tasks/addTask", {
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
        initAddTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        completeTask: (state, action) => {
            state.value = state.value.filter((task) => task.id === action.payload.id);
            fetch("http://localhost:3001/tasks/removeTask/" + action.payload.id, {
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

export const { addTasks, initAddTodo, completeTask } = tasksSlice.actions;
export default tasksSlice.reducer;