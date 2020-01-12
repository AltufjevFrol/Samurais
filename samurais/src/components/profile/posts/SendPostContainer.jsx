import React from 'react';
import {addPostCreateAction, addNewSymbolPostCreateAction} from '../../../redux/profileReducer'
import Sender from '../../sender/sender'
function SendPostContainer(props) {

	function addPost() {
		let action = addPostCreateAction();
		props.store.dispatch(action);
	}


	function addNewSymbolPost(text) {
		let action = addNewSymbolPostCreateAction(text);
		props.store.dispatch(action);
	}

	return (
		<Sender
			hendlerSend={addPost}
			hendlerInput={addNewSymbolPost}
		/>)
}

export default SendPostContainer;