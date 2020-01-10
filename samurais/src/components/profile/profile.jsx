import React from 'react';
import styles from './profile.module.css'
import Posts from './posts/posts.jsx'
import ProfileInfo from "./profile_info/profileInfo.jsx";
import {inputChar} from "../../redux/store";

function Profile(props) {

	return (
		<div>
			<ProfileInfo/>
			<Posts
				profile={props.store.state.profile}
				despatch={props.store.despatch.bind(props.store)}
			/>
		</div>
	)
}

export default Profile;
