const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_SYMBOL_MESSAGE = 'ADD-NEW-SYMBOL-MESSAGE';
export const addMessageCreateAction = (text) => ({type: ADD_MESSAGE});
export const addNewSymbolMessageCreateAction = (newText) => ({type: ADD_NEW_SYMBOL_MESSAGE, newText: newText});

function dialogsReducer(state, action) {

	const addMessage = () => {
		let lastMessage = state.messagesData[state.messagesData.length - 1];
		let id = lastMessage ? lastMessage.id + 1 : 1;
		let from = 'me';
		let pathArr = window.location.pathname.split('/');
		let nameDialog = pathArr[pathArr.length - 1];
		let to = nameDialog;
		let message = state.newMessageText;
		state.newMessageText = '';
		let time = new Date();
		let MessageItem = {id, from, to, message, time};
		state.messagesData.push(MessageItem);
	};

	const addNewSymbolMessage = (newText) => {
		state.newMessageText = newText;
	};

	switch (action.type) {
		case ADD_MESSAGE:
			addMessage();
			break;
		case ADD_NEW_SYMBOL_MESSAGE:
			addNewSymbolMessage(action.newText);
			break;
		default:
			return state;
	}
	return state;
}

export default dialogsReducer;