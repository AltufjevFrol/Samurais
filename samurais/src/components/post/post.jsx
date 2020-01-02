import React from 'react';
import styles from './post.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likeCount: 0};
        this.likeIncrement= this.likeIncrement.bind(this);
    }

    likeIncrement() {
        this.setState({likeCount: this.state.likeCount+1});
    }

    render() {
        let message = this.props.message;
        console.log(`число лайков ${this.state.likeCount}`)
        return (
            <div>
                <div className={styles.post}>{message}</div>
                <div className={styles.like}><img onClick={this.likeIncrement} alt="fingerUp"
                                                  src="https://upload.wikimedia.org/wikipedia/commons/5/50/Facebook_Thumb_icon.svg"/>
                    <span>Like</span><span> {this.state.likeCount}</span>
                </div>
            </div>
        )
    }

}

export default Post;