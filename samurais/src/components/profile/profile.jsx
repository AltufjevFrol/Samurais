import React from 'react';
import styles from './profile.module.css'
import Posts from './posts/posts.jsx'
import ProfileInfo from "./profile_info/profileInfo.jsx";

function Profile(props) {
    let data= props.data;

    return (
        <div>
            <ProfileInfo/>
            <Posts data={data}/>
        </div>
    )
}

export default Profile;
