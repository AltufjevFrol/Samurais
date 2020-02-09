import {createStore, combineReducers} from "redux";
import headerReducer from './headerReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
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
const store = createStore(reducers);

export default store;
window.store = store;