import React from 'react';
import styles from './profile.module.css'
import PostsContainer from './posts/postsContainer.jsx'
import ProfileInfo from "./profile_info/profileInfo.jsx";

function Profile() {

	return (
		<div>
			<ProfileInfo/>
			<PostsContainer/>
		</div>
	)

}

export default Profile;
