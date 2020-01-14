import React from 'react';
import styles from './posts.module.css';
import PostContainer from './post/PostContainer';
import SendPostContainer from './SendPostContainer';
import Context from '../../../context';

function Posts(props) {

	return <Context.Consumer>
		{function (store) {
			let posts = store.getState().profile.postsData.map((post) => (
				<PostContainer key={post.id} post={post}/>));

			return (
				<div className={styles.blok_posts}>
					<h1>My posts</h1>
					<SendPostContainer/>
					{posts}
				</div>
			)
		}
		}
	</Context.Consumer>


}

export default Posts;