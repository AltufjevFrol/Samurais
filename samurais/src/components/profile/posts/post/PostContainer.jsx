import React from 'react';
import {addLikePostCreateAction} from "../../../../redux/profileReducer";
import Post from "./post";
import Context from "../../../../context";

function PostContainer(props) {
	return <Context.Consumer>
		{(store) => {
			let post = props.post;
			let textPost = post.post;
			let likes = post.like;

			function addLike() {
				let action = addLikePostCreateAction(post.id);
				store.dispatch(action);
			}

			return <Post post={textPost} likes={likes} hendlerLike={addLike}/>
		}}
	</Context.Consumer>

}

export default PostContainer;


