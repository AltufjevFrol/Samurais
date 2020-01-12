const ADD_POST = 'ADD-POST';
const ADD_LIKE_POST = 'ADD-LIKE-POST';
const ADD_NEW_SYMBOL_POST = 'ADD-NEW-SYMBOL-TEXT';

export const addPostCreateAction = () => ({type: ADD_POST});
export const addLikePostCreateAction = (idPost) => ({type: ADD_LIKE_POST, idPost: idPost});
export const addNewSymbolPostCreateAction = (newText) => ({type: ADD_NEW_SYMBOL_POST, newText: newText});

let initialState = {
	postsData: [],
	newPostText: '',
};

function profileReducer(state = initialState, action) {

	const addPost = () => {
		let lastPost = state.postsData[state.postsData.length - 1];
		let id = lastPost ? lastPost.id + 1 : 1;
		let like = 0;
		let post = state.newPostText;
		state.newPostText = '';
		let time = new Date();
		let PostItem = {id, post, like, time};
		state.postsData.push(PostItem);
	};

	const addLikePost = (idPost) => {
		let post = state.postsData.find((post) => post.id === idPost);
		if (post) {
			++post.like;
		}
	};
	const addNewSymbolPost = (newText) => {
		state.newPostText = newText;
	};

	switch (action.type) {
		case ADD_POST:
			addPost();
			break;
		case ADD_LIKE_POST:
			addLikePost(action.idPost);
			break;
		case ADD_NEW_SYMBOL_POST:
			addNewSymbolPost(action.newText);
			break;
		default:
			return state
	}
	return state;
}

export default profileReducer;