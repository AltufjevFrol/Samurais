import React from 'react';
import styles from './posts.module.css';
import Post from './post/post.jsx';
import Sender from '../../sender/sender';
import {addPostCreateAction} from '../../../redux/profileReducer';
import {addNewSymbolPostCreateAction} from '../../../redux/profileReducer';

function Posts(props) {

	let refField = React.createRef();

	function keyDown(e) {
		if (e.nativeEvent.key === 'Enter') {
			e.preventDefault();
			clickSend();
		}
	}

	function clickSend() {
		if (refField.current.innerText !== '') {
			let post = refField.current.innerText;
			props.despatch({type: 'ADD-POST', text: post});
			refField.current.innerText = '';
		}
	}

	let posts = props.profile.postsData.map((post) => (
		<Post
			key={post.id}
			post={post}
			despatch={props.despatch}
		/>
	));
	return (
		<div className={styles.blok_posts}>
			<h1>My posts</h1>
			<Sender
				newText={props.profile.newPostText}
				hendlerSend={props.despatch}
				SendCreateAction={addPostCreateAction}
				NewSymbolTextCreateAction={addNewSymbolPostCreateAction}
			/>
			{posts}
		</div>
	)

}

export default Posts;