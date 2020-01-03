import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
];

let messagesData = [
    {id: 1, message: 'Hi', likes: 3},
    {id: 2, message: 'How is your it-kamasutra?', likes: 10},
    {id: 3, message: 'Yo', likes: 5},
    {id: 4, message: 'Yo', likes: 7},
    {id: 5, message: 'Yo', likes: 1}
];


ReactDOM.render(<App dialogs={dialogsData} messages={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
