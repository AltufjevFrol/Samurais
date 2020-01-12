import React from 'react';
import styles from './profile.module.css'
import Posts from './posts/posts.jsx'
import ProfileInfo from "./profile_info/profileInfo.jsx";

function Profile(props) {

	return (
		<div>
			<ProfileInfo/>
			<Posts store={props.store}/>
		</div>
	)

}

export default Profile;
