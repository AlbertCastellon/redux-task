import { createSlice } from '@reduxjs/toolkit';


  export const todosSlice = createSlice({
    name: 'todolist',
    initialState: [],
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          id: state.length + 1,
          text: action.payload,
          completed: false
        }
        state.push(newTask)
      },
      markCompleted: (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload);
        const task = state.find((task) => task.id === action.payload)
        if(task.completed){
          task.completed = false
        }else{
          task.completed = true
        }
      },
      removeTask: (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload);
        state.splice(index, 1)
      }
    },
  });

  export const { addTask, markCompleted, removeTask } = todosSlice.actions;
export default todosSlice.reducer;
