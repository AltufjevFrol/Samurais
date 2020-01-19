const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET-USERS';
export const followCA = (idUser) => ({type: FOLLOW, id: idUser});
export const unfollowCA = (idUser) => ({type: UNFOLLOW, id: idUser});
export const getUsersCA = (users) => ({type: GET_USERS, users});
let initialState = {
	users: [],
};

const userReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.id) {
						return {...user, followed: true}
					}
					return user;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.id) {
						return {...user, followed: false}
					}
					return user;
				}),
			};
		case GET_USERS:
			return {...state, users: [...state.users, ...action.users]};
		default:
			return state;
	}

};
export default userReducer;