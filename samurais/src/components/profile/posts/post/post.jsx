import React from 'react';
import styles from './post.module.css';

function Post(props) {

	function clickLike() {
		props.hendlerLike(props.post.id);
	}

	return (
		<div className={styles.blockPost}>
			<div className={styles.post}>{props.post.post}</div>
			<div className={styles.like} onClick={clickLike}>
				<div className={styles.heart}>
					{props.likes === 0 ? <span/> : <span> {props.likes}</span>}
				</div>
			</div>
		</div>
	)


}

export default Post;