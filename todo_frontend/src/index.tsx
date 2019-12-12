import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './pages/redux/reducers'
import { addTask, completeTask } from './pages/redux/actions/task'
import subscribe from './pages/redux/subscribers'

const store = createStore(rootReducer)

const unsubscribes = subscribe(store)

// -------------------------------------------------------------------------
store.dispatch(addTask('Learn about actions'))
store.dispatch(addTask('Learn about reducers'))
store.dispatch(addTask('Learn about store'))
store.dispatch(completeTask(1))
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

unsubscribes.forEach(u => u())
