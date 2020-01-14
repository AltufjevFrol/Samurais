import React from 'react';
import {addPostCreateAction, addNewSymbolPostCreateAction} from '../../../redux/profileReducer';
import Sender from '../../sender/sender';
import Context from '../../../context'

function SendPostContainer(props) {



		return <Context.Consumer>

			{function (store) {
				function addPost() {
					let action = addPostCreateAction();
					store.dispatch(action);
				}


				function addNewSymbolPost(text) {
					let action = addNewSymbolPostCreateAction(text);
					store.dispatch(action);
				}

				return (
					<Sender
						hendlerSend={addPost}
						hendlerInput={addNewSymbolPost}
					/>)
			}
			}
		</Context.Consumer>

}


export default SendPostContainer;