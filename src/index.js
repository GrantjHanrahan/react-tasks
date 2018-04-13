import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './Todolist';
// import registerServiceWorker from './registerServiceWorker';

const destination = document.querySelector("#container");

ReactDOM.render (
    <div>
        <TodoList />
        </div>,
        destination
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
