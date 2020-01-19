import {createStore, combineReducers} from "redux";
import headerReducer from './headerReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	header: headerReducer,
	navbar: navbarReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer
});
const store = createStore(reducers);

export default store;
window.store = store;