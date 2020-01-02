import React from 'react';
import styles from './profile.module.css'
import Posts from '../posts/posts.jsx'
import ProfileInfo from "../profile_info/profileInfo.jsx";

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

export default Profile;
