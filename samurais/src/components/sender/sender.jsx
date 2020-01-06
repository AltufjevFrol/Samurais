import React from 'react';
import styles from './sender.module.css';

class Sender extends React.Component {
    constructor(props) {
        super(props);
        this.messages = props.data;
        this.callback = props.callback;
        this.state = {};
        this.addMessage = this.addMessage.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.imput = React.createRef();
        this.refDialogs=props.refDialogs;
    }

    addMessage() {
        if (this.imput.current.innerText !== '') {
            let message = this.imput.current.innerText;
            this.imput.current.innerText = "type...";
            this.callback(message,/* this.messages*/);
            this.setState();
            this.refDialogs.current.update();
        }
    }

    keyDown(e) {
        if (e.nativeEvent.key === 'Enter') {
            e.preventDefault();
            this.addMessage();
        }
    }

    render() {

        return (

            <div className={styles.sender}>
                <div ref={this.imput} contentEditable="true" className={styles.field} onKeyDown={this.keyDown}>
                    type...
                </div>
                <div className={styles.button} onClick={this.addMessage}>Send</div>
            </div>
        )
    }

}

export default Sender;