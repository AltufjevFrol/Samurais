import React from 'react';
import styles from './users.module.css';
import users from './usersInitial.js';
import userPic from '../assets/img/pngguru.com.png'
import axios from 'axios';

const Users = (props) => {

	if (props.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			props.getUsers(response.data.items);
		});
	}

	let usersList = props.users.map((user) => {
		return (
			<div key={user.id} className={styles.userWrap}>
				<div className={styles.avatarBlock}>
					<div className={styles.avatar}><img src={user.photos.small? user.photos.small : userPic}
																							alt="avatar"/></div>
					<div className={styles.button}>
						{user.followed ?
							<button onClick={() => {
								props.unfollow(user.id)
							}}>Unfollow</button> :
							<button onClick={() => {
								props.follow(user.id)
							}}>Follow</button>
						}
					</div>
				</div>
				<div className={styles.descriptionBlock}>
					<div className={styles.fullName}>{user.name}</div>
					<div className={styles.status}>{user.status?user.status:'no status'}</div>
					<div className={styles.locationCity}>{'user.location.city'}</div>
					<div className={styles.locationCountry}>{'user.location.country'}</div>
				</div>
			</div>

		)
	});

	return (
		<div className={styles.sersWrap}>
			{usersList}
		</div>
	)
};
export default Users;