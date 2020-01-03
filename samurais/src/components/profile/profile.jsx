import React from 'react';
import styles from './profile.module.css'
import Posts from './posts/posts.jsx'
import ProfileInfo from "./profile_info/profileInfo.jsx";

function Profile(props) {
    let messages = props.messages;
    let callback = props.callback;
    return (
        <div>
            <ProfileInfo/>
            <Posts messages={messages} callback={callback}/>
        </div>
    )
}

export default Profile;
