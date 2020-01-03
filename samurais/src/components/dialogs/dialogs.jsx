import React from 'react';
import styles from './dialogs.module.css';
import {NavLink} from 'react-router-dom'


const DialogsItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={styles.item}>
            <NavLink to={path} className={styles.ref} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message.message}
            <span>Like</span>
            <span> {props.message.likes}</span>
        </div>
    )
};

const Dialogs = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogsItems = dialogs.map((dialog) => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesItems = messages.map((message) => <Message key={message.id} message={message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messagesItems}
            </div>
        </div>
    )
};
export default Dialogs;