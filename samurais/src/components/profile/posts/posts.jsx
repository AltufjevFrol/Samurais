import React from 'react';
import styles from './posts.module.css';
import PostContainer from './post/PostContainer';
import SendPostContainer from './SendPostContainer';

function Posts(props) {

	let posts = props.store.getState().profile.postsData.map((post) => (
		<PostContainer key={post.id} store={props.store} post={post}/>));

	return (
		<div className={styles.blok_posts}>
			<h1>My posts</h1>
			<SendPostContainer store={props.store}/>
			{posts}
		</div>
	)

}

export default Posts;