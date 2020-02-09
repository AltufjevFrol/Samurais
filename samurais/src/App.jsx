import React from 'react';
import './App.css';
import HeaderContainer from './components/header/headerContainer.js';
import Navbar from './components/navbar/navbar.jsx';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";

function App(props) {

	return (
		< div className="app-wraper">
			< HeaderContainer/>
			< Navbar/>
			< div className="app-wraper-content">
				<Route path="/profile/:userId?" render={()=><ProfileContainer />} />
				<Route path="/dialogs" component={DialogsContainer}/>
				<Route path="/users" component={UsersContainer}/>
			</div>
		</div>
	);
}

export default App;

/*
component={ProfileContainer}*/
