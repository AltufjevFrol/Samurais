import {connect} from "react-redux";
import Users from "./users";
import {
	changePageSizeCA,
	followCA,
	getUsersCA,
	setTotalCountUsersCA, showDateCA, showLoadingCA,
	switchNewPageCA,
	unfollowCA,
	linkUpCA,
	linkDownCA,
	setLinkFirstCA
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalCountUsers: state.usersPage.totalCountUsers,
		curentPage: state.usersPage.curentPage,
		pageSize: state.usersPage.pageSize,
		loading: state.usersPage.loading,
		curentLinkPart: state.usersPage.curentLinkPart,
	}
};
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
		},
		switchNewPage: (numPage) => {
			dispatch(switchNewPageCA(numPage))
		},
		changePageSize: (newSize) => {
			dispatch(changePageSizeCA(+newSize))
		},
		setTotalCountUsers: (totalCount) => {
			dispatch(setTotalCountUsersCA(totalCount))
		},
		showLoading: ()=>{dispatch(showLoadingCA())},
		showDate: ()=>{dispatch(showDateCA())},
		linkUp: ()=>{dispatch(linkUpCA())},
		linkDown: ()=>{dispatch(linkDownCA())},
		setLinkFirst: ()=>{dispatch(setLinkFirstCA())}

	}

};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;