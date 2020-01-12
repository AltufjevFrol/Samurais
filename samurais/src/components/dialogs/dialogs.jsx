import React from 'react';
import styles from './dialogs.module.css';

import Dialog from './dialog/dialog.jsx';
import Message from './message/message.jsx'
import SenderMessageContainer from './SendMessageContainer';


function Dialogs(props) {
	let dialogsItems = props.store.getState().dialogs.dialogsData
		.map((dialog) => <Dialog key={dialog.id} dialog={dialog}/>);

	let messagesItems = props.store.getState().dialogs.messagesData
		.map((message) => <Message key={message.id} message={message}/>);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsItems}
			</div>
			<div className={styles.messages}>
				{messagesItems}
			</div>
			<SenderMessageContainer store={props.store}/>
		</div>
	)

}

export default Dialogs;