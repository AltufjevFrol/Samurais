import {createStore, combineReducers} from "redux";
import headerReducer from './headerReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let reducers = combineReducers({
	header: headerReducer,
	navbar: navbarReducer,
	profile: profileReducer,
	dialogs: dialogsReducer,
});
const store = createStore(reducers);

export default store;
window.store = store;