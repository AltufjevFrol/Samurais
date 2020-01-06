import React from 'react';
import styles from './posts.module.css';
import Post from './post/post.jsx';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.posts = props.data;
        this.state = {
            update: false,
        };
        this.addMessage = this.addMessage.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.imput = React.createRef();
    }

    addMessage() {
        if (this.imput.current.innerText !== '') {
            let lastPost = this.posts[this.posts.length - 1];
            let id = lastPost ? lastPost.id + 1 : 1;
            let message = this.imput.current.innerText;
            let likes = 0;
            let PostsItem = {id, message, likes};
            this.posts.push(PostsItem);
            this.imput.current.innerText = "New post";
            this.setState({
                update: !this.state.update,
            });
        }
    }

    componentDidUpdate() {
        let winHeigh = document.documentElement.scrollHeight;
        window.scrollTo(0, winHeigh);
    }

    keyDown(e) {
        if (e.nativeEvent.key === 'Enter') {
            e.preventDefault();
            this.addMessage();
        }
    }

    render() {

        let posts = this.posts.map((post) => <Post key={post.id} data={post}/>);
        return (
            <div className={styles.blok_posts}>
                <h1>My posts</h1>
                <div className={styles.form}>
                    <div ref={this.imput} contentEditable="true" className={styles.field} onKeyDown={this.keyDown}>New
                        post
                    </div>
                    <div className={styles.button} onClick={this.addMessage}>Send</div>
                </div>
                {posts}
            </div>
        )
    }

}

export default Posts;