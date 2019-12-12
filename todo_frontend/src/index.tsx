import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import taskList from './pages/reducers/task'
import { addTask, completeTask } from './pages/actions/task'

const store = createStore(taskList)

// -------------------------------------------------------------------------
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addTask('Learn about actions'))
store.dispatch(addTask('Learn about reducers'))
store.dispatch(addTask('Learn about store'))
store.dispatch(completeTask(1))
unsubscribe()
// -------------------------------------------------------------------------


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
