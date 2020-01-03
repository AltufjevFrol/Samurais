import React from 'react';
import styles from './posts.module.css';
import Post from './post/post.jsx';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: props.messages,
        };
        this.addMessage = this.addMessage.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    addMessage() {
        if (document.getElementById('field').innerText !== '') {
            /*let id = ++this.state.messages.pop().id;
            let message = document.getElementById('field').innerText;
            let likes = 0;
            let messageItem = {id,message,likes};
            let messages=this.state.messages;
            messages.push(messageItem);
            document.getElementById('field').innerText = "";
            this.setState({
                messages: messages
            });*/
            let id = ++this.props.messages[this.props.messages.length-1].id;
            let message = document.getElementById('field').innerText;
            let likes = 0;
            let messageItem = {id,message,likes};
            this.props.messages.push(messageItem);
            document.getElementById('field').innerText = "";
            this.setState({
                messages: this.props.messages
            });
        }
    }

    componentDidUpdate() {
        let winHeigh = document.documentElement.scrollHeight;
        window.scrollTo(0,winHeigh);
    }

    keyDown(e) {
        if(e.nativeEvent.key === 'Enter'){
            e.preventDefault();
            this.addMessage();
        }
    }

    render() {

        let posts = this.state.messages.map((message) => <Post key={message.id} message={message}/>);
        return (
            <div className={styles.blok_posts}>
                <h1>My posts</h1>
                <div className={styles.form}>
                    <div id="field" contentEditable="true" className={styles.field} onKeyDown={this.keyDown}>New posts
                    </div>
                    <div className={styles.button} onClick={this.addMessage}>Send</div>
                </div>
                <div className={styles.post_wraper}>
                    {posts}
                </div>
            </div>
        )
    }

}

export default Posts;