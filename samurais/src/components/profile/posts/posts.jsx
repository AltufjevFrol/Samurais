import React from 'react';
import styles from './posts.module.css';
import Post from './post/post';
import Sender from '../../sender/sender';
import {addLikePostCreateAction, addPostCreateAction} from "../../../redux/profileReducer";


function Posts(props) {

	/*let addPost = props.addPost;
	let addNewSymbolPost = props.addNewSymbolPost;
	let addLike = props.addLike;*/

	let posts = props.postsData.map((post) => (
		<Post key={post.id} post={post} likes={post.like} hendlerLike={props.addLikePostCreateAction}/>));

	return (
		<div className={styles.blok_posts}>
			<h1>My posts</h1>
			<Sender hendlerSend={props.addPostCreateAction} hendlerInput={props.addNewSymbolPostCreateAction}/>
			{posts}
		</div>
	)
}

export default Posts;