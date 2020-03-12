import React from 'react';
import './App.css';
import HeaderContainer from './components/header/headerContainer.js';
import Navbar from './components/navbar/navbar.jsx';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";

function App(props) {

	return (
		< div className="app-wraper">
			< HeaderContainer/>
			< Navbar/>
			< div className="app-wraper-content">
				<Route path="/profile/:userId?" render={()=><ProfileContainer />} />
				<Route path="/dialogs" component={DialogsContainer}/>
				<Route path="/users" component={UsersContainer}/>
				<Route path="/login" component={Login}/>
			</div>
		</div>
	);
}

class AppContainer extends React.Component {

	componentDidMount() {
		this.props.initializeApp()
	}

	render (){
		let isWaiting = !this.props.initiated;
	 	return(
	 		isWaiting?<div>LOADING</div>:<App/>
		)
	 }
}

export default connect((state)=>({initiated: state.app.initiated}), {initializeApp}) (AppContainer);

/*
component={ProfileContainer}*/
