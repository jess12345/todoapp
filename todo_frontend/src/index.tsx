import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './pages/redux/reducers'
import TaskAction from './pages/redux/actions/task'
import subscribe from './pages/redux/subscribers'

const store = createStore(rootReducer)

const unsubscribes = subscribe(store)

// -------------------------------------------------------------------------
store.dispatch(TaskAction.addTask('Learn about actions'))
store.dispatch(TaskAction.addTask('Learn about reducers'))
store.dispatch(TaskAction.addTask('Learn about store'))
store.dispatch(TaskAction.completeTask(1))
// -------------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
