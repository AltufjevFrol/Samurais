import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import API from "../../apiHttpRequest/api.js";
import {failGetUserInfoCA, getUserInfoCA, setLoadingCA} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let id;
		id = +this.props.match.params.userId;
		if (this.props.userInfo && id === this.props.userInfo.userId) {
			return;
		}

		this.props.setLoadingCA(true);

		API.getUser(id).then(resp => {
			this.props.getUserInfoCA(resp);
			this.props.failGetUserInfoCA(null);
			this.props.setLoadingCA(false);
		}).catch(e=>{
			this.props.failGetUserInfoCA(e);
			this.props.setLoadingCA(false);
		})



	}

	/*componentDidUpdate(prevProps, prevState, snapshot) {
		if (!this.props.match.params.userId) {
			this.props.setLoadingCA(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.auth.id}`,
				{withCredential: true})
				.then((responce) => {
					this.props.getUserInfoCA(responce.data);
					this.props.failGetUserInfoCA(null);
					this.props.setLoadingCA(false);
				}).catch((e) => {
				this.props.failGetUserInfoCA(e);
				this.props.setLoadingCA(false);
			})
		}

	}*/

	render() {

		return <Profile {...this.props}/>
	}
}

const mapStateToProps = (state) => {
	return {
		userInfo: state.profilePage.userInfo,
		error: state.profilePage.error,
		isLoading: state.profilePage.isLoading,
		auth: state.auth,
	}
};

let ProfileURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
	/*Здесь будут action creaters для userInfo*/
	getUserInfoCA,
	failGetUserInfoCA,
	setLoadingCA,
})(ProfileURLContainer);