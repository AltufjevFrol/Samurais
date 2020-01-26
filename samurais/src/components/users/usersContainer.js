import {connect} from "react-redux";
import Users from "./users";
import {followCA, getUsersCA, unfollowCA} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({users: state.usersPage.users});
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (idUser) => {
			dispatch(followCA(idUser))
		},
		unfollow: (idUser) => {
			dispatch(unfollowCA(idUser))
		},
		getUsers: (users) => {
			dispatch(getUsersCA(users))
		}
	}

};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;