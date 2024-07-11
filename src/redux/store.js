import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice.js';

const store = configureStore({
    reducer: {
      todolist: todosReducer,
    },
  }
);


export default store