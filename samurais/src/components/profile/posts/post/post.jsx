import React from 'react';
import styles from './post.module.css';
import {addLikePostCreateAction} from "../../../../redux/profileReducer";

function Post(props) {

	function clickLike() {
		let action = addLikePostCreateAction(props.post.id);
		props.despatch(action);
	}

	return (
		<div className={styles.blockPost}>
			<div className={styles.post}>{props.post.post}</div>
			<div className={styles.like} onClick={clickLike}>
				<div className={styles.heart}>
					{props.post.likes === 0 ? <span/> : <span> {props.post.like}</span>}
				</div>
			</div>
		</div>
	)


}

export default Post;