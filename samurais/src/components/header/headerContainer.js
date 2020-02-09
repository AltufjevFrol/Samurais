import React from 'react';
import {setUserDataCA} from '../../redux/authReducer';
import {connect} from 'react-redux';
import Header from "./header";
import axios from 'axios';

class HeaderContainer extends React.Component {

	componentDidMount() {

		/*запрос за данными юзера*/
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
			.then((responce) => {
				console.log(responce);
				if (responce.data.resultCode === 0) {
					this.props.setUserDataCA(responce.data.data);
				}
			})
	}

	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	}
};

export default connect(mapStateToProps, {setUserDataCA})(HeaderContainer);