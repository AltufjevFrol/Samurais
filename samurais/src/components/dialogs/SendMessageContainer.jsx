import React from 'react';
import {addMessageCreateAction, addNewSymbolMessageCreateAction} from '../../redux/dialogsReducer';
import Sender from '../sender/sender';
import Context from "../../context";

function SendPostContainer(){

	return <Context.Consumer>
		{(store) => {
			function addMessage() {
				let action = addMessageCreateAction();
				store.dispatch(action);
			}


			function addNewSymbolMessage(text) {
				let action = addNewSymbolMessageCreateAction(text);
				store.dispatch(action);
			}

			return (
				<Sender
					hendlerSend={addMessage}
					hendlerInput={addNewSymbolMessage}
				/>)
		}
		}
	</Context.Consumer>
}

		export default SendPostContainer;