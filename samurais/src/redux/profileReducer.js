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
		let copyState = {...state};
		copyState.postsData = [...state.postsData];
		let lastPost = state.postsData[state.postsData.length - 1];
		let id = lastPost ? lastPost.id + 1 : 1;
		let like = 0;
		let post = state.newPostText;
		state.newPostText = '';
		let time = new Date();
		let PostItem = {id, post, like, time};
		copyState.postsData.push(PostItem);
		return copyState;
	};

	const addLikePost = (idPost) => {

		let copyState={
			...state,
			postsData: [...state.postsData]
		};

		let post = copyState.postsData.find((post) => post.id === idPost);
		if (post) {
			++post.like;
		}
		return copyState;
	};
	const addNewSymbolPost = (newText) => {
		let copyState = {...state};
		copyState.newPostText = newText;
		return copyState;
	};

	switch (action.type) {
		case ADD_POST:
			return addPost();
		case ADD_LIKE_POST:
			return addLikePost(action.idPost);
		case ADD_NEW_SYMBOL_POST:
			return addNewSymbolPost(action.newText);
		default:
			return state
	}

}

export default profileReducer;