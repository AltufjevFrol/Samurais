import React from 'react';
import {addMessageCreateAction, addNewSymbolMessageCreateAction} from '../../redux/dialogsReducer';
import Sender from '../sender/sender';

function SendPostContainer(props) {

	function addMessage() {
		let action = addMessageCreateAction();
		props.store.dispatch(action);
	}


	function addNewSymbolMessage(text) {
		let action = addNewSymbolMessageCreateAction(text);
		props.store.dispatch(action);
	}

	return (
		<Sender
			hendlerSend={addMessage}
			hendlerInput={addNewSymbolMessage}
		/>)
}

export default SendPostContainer;