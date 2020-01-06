let state = {
    dialogs: {
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
};

let callbacks = {
    addMessage(message, /*messages*/) {
        /*let lastPost = messages[messages.length - 1];*/
        let lastPost = state.dialogs.messagesData[state.dialogs.messagesData.length - 1];
        let id = lastPost ? lastPost.id + 1 : 1;
        let from = 'me';
        let pathArr = window.location.pathname.indexOf('/')
        let to = +pathArr[pathArr.length - 1];
        let PostsItem = {id, from, to, message};
        /*messages.push(PostsItem);*/
        state.dialogs.messagesData.push(PostsItem);
    }
};

export {state, callbacks};