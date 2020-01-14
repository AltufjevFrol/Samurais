import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from "./App";
import store from './redux/redux-store';
import Context from './context';

function updateApp() {

	ReactDOM.render(
		< BrowserRouter>
			<Context.Provider value={store}>
				< App/>
			</Context.Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

updateApp();
store.subscribe(updateApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
