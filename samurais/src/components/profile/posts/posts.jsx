import React from 'react';
import styles from './posts.module.css';
import Post from './post/post';
import Sender from '../../sender/sender';


function Posts(props) {

	let postsData = props.postsData;
	let addPost = props.addPost;
	let addNewSymbolPost = props.addNewSymbolPost;
	let addLike = props.addLike;

	let posts = postsData.map((post) => (
		<Post key={post.id} post={post} likes={post.like} hendlerLike={addLike}/>));

	return (
		<div className={styles.blok_posts}>
			<h1>My posts</h1>
			<Sender hendlerSend={addPost} hendlerInput={addNewSymbolPost}/>
			{posts}
		</div>
	)
}

export default Posts;