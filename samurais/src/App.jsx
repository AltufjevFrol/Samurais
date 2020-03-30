import React from 'react';
import './App.css';
import HeaderContainer from './components/header/headerContainer.js';
import Navbar from './components/navbar/navbar.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import Login from "./components/login/login";
import {initializeApp} from "./redux/appReducer";
import {Provider, connect} from "react-redux";
import store from "./redux/redux-store";

function App(props) {

	return (
		< div className="app-wraper">
			< HeaderContainer/>
			< Navbar/>
			< div className="app-wraper-content">
				<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
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

	render() {
		let isWaiting = !this.props.initiated;
		return (
			isWaiting ? <div>LOADING</div> : <App/>
		)
	}
}

const AppConnected = connect((state) => ({initiated: state.app.initiated}), {initializeApp})(AppContainer);
export default (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				< AppConnected/>
			</Provider>
		</BrowserRouter>
	)
};

/*
component={ProfileContainer}*/
