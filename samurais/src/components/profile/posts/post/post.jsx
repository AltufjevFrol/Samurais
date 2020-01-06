import React from 'react';
import styles from './post.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likes: props.data.likes};
        this.likeIncrement = this.likeIncrement.bind(this);
    }

    likeIncrement() {
        ++this.props.data.likes;
        this.setState({likes: ++this.state.likes});
    }

    render() {
        let post = this.props.data;
        console.log(post)
        return (
            <div className={styles.blockPost}>
                <div className={styles.post}>{post.message}</div>
                <div className={styles.like} onClick={this.likeIncrement}>
                    <div className={styles.heart}>
                        {post.likes===0? <span/> :<span> {post.likes}</span>}
                    </div>
                </div>
            </div>
        )
    }

}

export default Post;