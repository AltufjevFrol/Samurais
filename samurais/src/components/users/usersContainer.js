import {connect} from "react-redux";
import {linkUpCA, linkDownCA, loadUsers, switchPage, changePage, follow, unfollow} from "../../redux/usersReducer";
import React from 'react';
import Users from "./users";
import withRedirectToLogin from "../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.loadUsers(this.props.pageSize, this.props.curentPage);
	}

	render() {

		return (
			<Users
				users={this.props.users}
				totalCountUsers={this.props.totalCountUsers}
				pageSize={this.props.pageSize}
				curentLinkPart={this.props.curentLinkPart}
				curentPage={this.props.curentPage}
				isLoading={this.props.isLoading}
				switchPage={this.props.switchPage}
				changePage={this.props.changePage}
				followingInProgres={this.props.followingInProgres}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				linkUpCA={this.props.linkUpCA}
				linkDownCA={this.props.linkDownCA}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalCountUsers: state.usersPage.totalCountUsers,
		curentPage: state.usersPage.curentPage,
		pageSize: state.usersPage.pageSize,
		isLoading: state.usersPage.isLoading,
		curentLinkPart: state.usersPage.curentLinkPart,
		followingInProgres: state.usersPage.followingInProgres,
		isAuth: state.auth.isAuth
	}
};

export default compose(connect(mapStateToProps, {
    linkUpCA,
    linkDownCA,
    loadUsers, switchPage, changePage, follow, unfollow,
}), withRedirectToLogin)(UsersContainer)

/*
просто взяли контейнерную компоненту UserContainer и с помощью HOCа withRedirecTotLogin получили другую контейнерную
компоненту которая в зависимости от state.auth.isAuth рендерит UserContainer либо Redirect
*/

