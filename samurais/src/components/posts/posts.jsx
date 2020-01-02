import React from 'react';
import styles from './posts.module.css'
import Post from '../post/post.jsx'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
        this.addMessage = this.addMessage.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    addMessage() {
        if (document.getElementById('field').innerText !== '') {
            let messages = this.state.messages;
            messages.push(document.getElementById('field').innerText);
            document.getElementById('field').innerText = "";
            this.setState({
                messages: messages,
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

        let posts = this.state.messages.map((message) => <Post message={message}/>);
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