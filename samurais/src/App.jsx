import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile.jsx';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";

function App(props) {

	return (
		< div className="app-wraper">
			< Header/>
			< Navbar/>
			< div className="app-wraper-content">
				<Route exact path="/profile" component={Profile}/>
				<Route path="/dialogs" component={DialogsContainer}/>
				<Route path="/users" component={UsersContainer}/>
			</div>
		</div>
	);
}

export default App;