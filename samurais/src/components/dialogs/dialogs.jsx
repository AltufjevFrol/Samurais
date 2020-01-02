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
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogsItems = dialogsData.map((dialog) => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messages = messagesData.map((message) => <Message key={message.id} message={message.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messages}
            </div>
        </div>
    )
};
export default Dialogs;