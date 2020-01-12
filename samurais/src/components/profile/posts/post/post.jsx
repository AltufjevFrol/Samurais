import React from 'react';
import styles from './post.module.css';

function Post(props) {

	function clickLike() {
		props.hendlerLike();
	}

	return (
		<div className={styles.blockPost}>
			<div className={styles.post}>{props.post}</div>
			<div className={styles.like} onClick={clickLike}>
				<div className={styles.heart}>
					{props.likes === 0 ? <span/> : <span> {props.likes}</span>}
				</div>
			</div>
		</div>
	)


}

export default Post;