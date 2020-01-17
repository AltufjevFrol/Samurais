import React from 'react';
import styles from './posts.module.css';
import {connect} from 'react-redux';
import Posts from './posts';
import {
	addPostCreateAction,
	addNewSymbolPostCreateAction,
	addLikePostCreateAction
} from '../../../redux/profileReducer';

const mapStateToProps = (state)=> {

	return {
		postsData: state.profile.postsData,
	}
};

const mapDispatchToProps = (dispatch)=> {
	return {
		addPost() {
			dispatch(addPostCreateAction());
		},
		addNewSymbolPost(newText) {
			dispatch(addNewSymbolPostCreateAction(newText));
		},
		addLike(idPost) {
			dispatch(addLikePostCreateAction(idPost))
		}
	}

};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;