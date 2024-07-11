import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Task from "./components/Task";

const App = () => {
  
  return (
    <Provider store={store} >
      <Task />
    </Provider>
  );
};

export default App;
