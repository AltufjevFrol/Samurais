import {connect} from "react-redux";
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
import React from 'react';
import axios from 'axios';
import Users from "./users";

class UsersAPIcomponent extends React.Component {

	loadUsers = () => {
		this.props.showLoadingCA();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?
			count=${this.props.pageSize}&page=${this.props.curentPage}`
		).then((response) => {
			this.props.setTotalCountUsersCA(response.data.totalCount);
			this.props.getUsersCA(response.data.items);
			this.props.showDateCA();
		});

	};
	switchPage = (numPage) => {
		this.props.switchNewPageCA(numPage);
		this.props.showLoadingCA();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?
			count=${this.props.pageSize}&page=${numPage}`
		).then((response) => {
			this.props.getUsersCA(response.data.items);
			this.props.showDateCA();
		});
	};

	changePage = (value) => {
		this.props.changePageSizeCA(value);
		this.props.switchNewPageCA(1);
		this.props.setLinkFirstCA();
		this.props.showLoadingCA();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?
			count=${value}&page=1`
		).then((response) => {
			this.props.getUsersCA(response.data.items);
			this.props.showDateCA();
		});
	};

	componentDidMount() {
		this.loadUsers();
	}

	up = () => {
		if (this.props.curentLinkPart < ((this.props.totalCountUsers / this.props.pageSize) / 10) - 1) {
			this.props.linkUpCA();
		}
	};
	down = () => {
		if (this.props.curentLinkPart > 1) {
			this.props.linkDownCA();
		}
	};

	render() {

		return (
			<Users
				users={this.props.users}
				totalCountUsers={this.props.totalCountUsers}
				pageSize={this.props.pageSize}
				curentLinkPart={this.props.curentLinkPart}
				curentPage={this.props.curentPage}
				unfollow={this.props.unfollowCA}
				follow={this.props.followCA}
				isLoading={this.props.isLoading}
				switchPage={this.switchPage}
				down={this.down}
				up={this.up}
				changePage={this.changePage}
			/>
		)
	}

};

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalCountUsers: state.usersPage.totalCountUsers,
		curentPage: state.usersPage.curentPage,
		pageSize: state.usersPage.pageSize,
		isLoading: state.usersPage.isLoading,
		curentLinkPart: state.usersPage.curentLinkPart,
	}
};

const UsersContainer = connect(mapStateToProps, {
	followCA,
	unfollowCA,
	getUsersCA,
	switchNewPageCA,
	changePageSizeCA,
	setTotalCountUsersCA,
	showLoadingCA,
	showDateCA,
	linkUpCA,
	linkDownCA,
	setLinkFirstCA,
})(UsersAPIcomponent);
export default UsersContainer;

