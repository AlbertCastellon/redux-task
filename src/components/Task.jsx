import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, markCompleted } from "../redux/todosSlice";

const Task = () => {
    const [text, setText] = useState("");
    const todolist = useSelector((state) => state.todolist);
    const dispatch = useDispatch();

    const handleSubmitAdd = () => {
        if (text) {
          dispatch(addTask(text));
          setText("");
        }
    };
    const handleSubmitComplete = (id) => {
        dispatch(markCompleted(id))
    }

    const handleSubmitDelete = (id) => {
        dispatch(removeTask(id));
    };

    const isCompleted = (e) => {
        return e.completed ? 'completed' : 'pending'
    }

    return (
        <div>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />{" "}
          <button onClick={handleSubmitAdd}> Añadir tarea </button>
          <ul>
            {todolist.map((task) => (
              <li key={task.id} className={isCompleted(task)}>
                {task.text}
                <button onClick={() =>handleSubmitComplete(task.id)}> Completada </button>
                <button onClick={() => handleSubmitDelete(task.id)}> Eliminar </button>
              </li>
            ))}
          </ul>
        </div>
    );
};
    



export default Task;