import React from 'react';
import styles from './dialogs.module.css';

import Dialog from './dialog/dialog.jsx';
import Message from './message/message.jsx'
import Sender from '../sender/sender';
import {addMessageCreateAction, addNewSymbolMessageCreateAction} from "../../redux/dialogsReducer";

function Dialogs(props) {
	let dialogsItems = props.store.state.dialogs.dialogsData.map((dialog) => <Dialog key={dialog.id} dialog={dialog}/>);
	let messagesItems = props.store.state.dialogs.messagesData.map((message) => <Message key={message.id} message={message}/>);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsItems}
			</div>
			<div className={styles.messages}>
				{messagesItems}
			</div>
			<Sender
				hendlerSend={props.store.despatch.bind(props.store)}
				SendCreateAction={addMessageCreateAction}
				NewSymbolTextCreateAction={addNewSymbolMessageCreateAction}
			/>
		</div>
	)

}

export default Dialogs;