import React from 'react';
import styles from './dialogs.module.css';

import Dialog from './dialog/dialog.jsx';
import Message from './message/message.jsx'
import SenderMessageContainer from './SendMessageContainer';
import Context from '../../context';

function Dialogs(props) {

	return <Context.Consumer>
		{(store) => {
			let dialogsItems = store.getState().dialogs.dialogsData
				.map((dialog) => <Dialog key={dialog.id} dialog={dialog}/>);

			let messagesItems = store.getState().dialogs.messagesData
				.map((message) => <Message key={message.id} message={message}/>);

			return (
				<div className={styles.dialogs}>
					<div className={styles.dialogsItems}>
						{dialogsItems}
					</div>
					<div className={styles.messages}>
						{messagesItems}
					</div>
					<SenderMessageContainer/>
				</div>
			)
		}
		}

	</Context.Consumer>


}

export default Dialogs;