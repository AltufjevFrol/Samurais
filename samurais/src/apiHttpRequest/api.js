import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "911f303f-91db-4c17-9cf0-964e96ae8b8e"
	}
});

const API = {
	getAuthMe() {
		return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me').then(responce => responce.data);
	},
	getUser(id) {
		return instance.get(`profile/${id}`).then((responce) => responce.data);
	},
	getUsers(pageSize, numPage) {
		return instance.get(`users?count=${pageSize}&page=${numPage}`).then((responce) => responce.data);
	},
	followUser(id) {
		return instance.post(`follow/${id}`).then((responce) => responce.data);
	},
	unFollowUser(id) {
		return instance.delete(`follow/${id}`).then((responce) => responce.data);
	},
};


export default API