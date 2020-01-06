import React from 'react';
import styles from './dialogs.module.css';

import Dialog from './dialog/dialog.jsx';
import Message from './message/message.jsx'
import Sender from "../sender/sender";

class Dialogs extends React.Component {
    constructor(props) {
        super(props);
        this.messages = props.data.messagesData;
        this.dialogs = props.data.dialogsData;
        this.callbacks = props.callbacks;
        this.state = {};
        this.update=this.update.bind(this);
        this.refDialogs=props.refDialogs;

    }

    update() {
        this.setState({});
    }

    render() {
        console.log(this.refDialogs);
        let dialogsItems = this.dialogs.map((dialog) => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>);
        let messagesItems = this.messages.map((message) => <Message key={message.id} message={message}/>);

        return (
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsItems}
                </div>
                <div className={styles.messages}>
                    {messagesItems}
                </div>
                <Sender
                    data={this.messages}
                    callback={this.callbacks.addMessage}
                    refDialogs={this.refDialogs}
                />
            </div>
        )
    };
}

export default Dialogs;