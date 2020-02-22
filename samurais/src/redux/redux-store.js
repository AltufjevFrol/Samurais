import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import headerReducer from './headerReducer';
import navbarReducer from './navbarReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
	header: headerReducer,
	navbar: navbarReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;