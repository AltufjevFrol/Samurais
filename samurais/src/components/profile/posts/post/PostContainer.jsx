import React from 'react';
import {addLikePostCreateAction} from "../../../../redux/profileReducer";
import Post from "./post";

function PostContainer(props) {

	let post = props.store.getState().profile.postsData.filter((post) => post.id === props.post.id)[0];
	let textPost = post.post;
	let likes = post.like;

	function addLike() {
		let action = addLikePostCreateAction(post.id);
		props.store.dispatch(action);
	}

	return <Post post={textPost} likes={likes} hendlerLike={addLike}/>


}

export default PostContainer;


