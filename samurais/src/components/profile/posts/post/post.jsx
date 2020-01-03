import React from 'react';
import styles from './post.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: props.message};
        this.likeIncrement= this.likeIncrement.bind(this);
    }

    likeIncrement() {
        this.props.message.likes = ++this.props.message.likes;
        this.setState({message: this.props.message});
    }

    render() {
        let message = this.props.message;
        console.log(`message ${this.props.message.id}`)
        return (
            <div>
                <div className={styles.post}>{message.message}</div>
                <div className={styles.like}><img onClick={this.likeIncrement} alt="fingerUp"
                                                  src="https://upload.wikimedia.org/wikipedia/commons/5/50/Facebook_Thumb_icon.svg"/>
                    <span>Like</span><span> {this.props.message.likes}</span>
                </div>
            </div>
        )
    }

}

export default Post;