import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import { Provider } from 'react-redux'
import store from './store'
import TodoList from "./todolist";

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

serviceWorker.unregister();
