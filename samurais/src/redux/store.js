/*
let updateApp;

let state = {
    _dialogs: {
        dialogsData: [
            {id: 1, name: 'Dimych', messages: []},
            {id: 2, name: 'Andrew', messages: []},
            {id: 3, name: 'Sveta', messages: []},
            {id: 4, name: 'Sasha', messages: []},
            {id: 5, name: 'Viktor', messages: []},
            {id: 6, name: 'Valera', messages: []}
        ],

        messagesData: [
            {id: 1, from: 'Dimych', to: 'me', time: null, message: 'Hi'},
            {id: 2, from: 'me', to: 'me', time: null, message: 'How is your it-kamasutra?'},
            {id: 3, from: 'Dimych', to: 'me', time: null, message: 'Yo'},
            {id: 4, from: 'me', to: 'me', time: null, message: 'Yo'},
            {id: 5, from: 'Dimych', to: 'me', time: null, message: 'Yo'}
        ]
    },
    header: null,
    navbar: null,
    profile: {postsData: []},
    sender: {newText: ''}
};


export function addMessage(text) {
    let lastMessage = state._dialogs.messagesData[state._dialogs.messagesData.length - 1];
    let id = lastMessage ? lastMessage.id + 1 : 1;
    let from = 'me';
    let pathArr = window.location.pathname.indexOf('/');
    let to = +pathArr[pathArr.length - 1];
    let message = text;
    state.sender.newText = '';
    let MessageItem = {id, from, to, message};
    state._dialogs.messagesData.push(MessageItem);
    updateApp(state, addMessage, addPost, addLikePost)
}

export function addPost(text) {
    let lastPost = state.profile.postsData[state.profile.postsData.length - 1];
    let id = lastPost ? lastPost.id + 1 : 1;
    let like = 0;
    let post = text;
    state.sender.newText = '';
    let PostItem = {id, post, like};
    state.profile.postsData.push(PostItem);
    updateApp(state, addMessage, addPost, addLikePost);
}

export function addLikePost(idPost) {
    let post = state.profile.postsData.find((post) => post.id === idPost);
    if (post) {
        ++post.like;
        updateApp(state, addMessage, addPost, addLikePost)
    }
}

export function subscribe(observer) {
    updateApp = observer;
}

export default state;
window.redux = redux;
*/
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import headerReducer from './headerReducer'

const store = {
	_state: {
		dialogs: {
			dialogsData: [
				{id: 1, name: 'Dimych', messages: []},
				{id: 2, name: 'Andrew', messages: []},
				{id: 3, name: 'Sveta', messages: []},
				{id: 4, name: 'Sasha', messages: []},
				{id: 5, name: 'Viktor', messages: []},
				{id: 6, name: 'Valera', messages: []}
			],
			messagesData: [],
			newMessageText: '',
		},
		header: null,
		navbar: null,
		profile: {
			postsData: [],
			newPostText: '',
		},
	},

	get state() {
		console.log('STATE WAS READ');
		return this._state
	},

	_updateApp: null,

	subscribe(observer) {
		this._updateApp = observer;
	},

	despatch(action) {

		this.state.profile = profileReducer(this.state.profile, action);
		this.state.dialogs = dialogsReducer(this.state.dialogs, action);
		this.state.navbar = navbarReducer(this.state.navbar, action);
		this.state.header = headerReducer(this.state.header, action);

		this._updateApp(this);
	}
};


export default store;
window.store = store;