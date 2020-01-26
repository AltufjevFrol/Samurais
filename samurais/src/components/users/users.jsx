import React from 'react';
import axios from 'axios';
import userPic from '../../assets/img/pngguru.com.png';
import styles from './users.module.css';

class Users extends React.Component {

	loadUsers = () => {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.getUsers(response.data.items);
		});

	};

	componentDidMount() {
		this.loadUsers();
	}

	render() {
		let usersList = this.props.users.map((user) => {
			return (
				<div key={user.id} className={styles.userWrap}>
					<div className={styles.avatarBlock}>
						<div className={styles.avatar}><img src={user.photos.small ? user.photos.small : userPic}
																								alt="avatar"/></div>
						<div className={styles.button}>
							{user.followed ?
								<button onClick={() => {
									this.props.unfollow(user.id)
								}}>Unfollow</button> :
								<button onClick={() => {
									this.props.follow(user.id)
								}}>Follow</button>
							}
						</div>
					</div>
					<div className={styles.descriptionBlock}>
						<div className={styles.fullName}>{user.name}</div>
						<div className={styles.status}>{user.status ? user.status : 'no status'}</div>
						<div className={styles.locationCity}>{'user.location.city'}</div>
						<div className={styles.locationCountry}>{'user.location.country'}</div>
					</div>
				</div>
			)
		});

		return (
			<div className={styles.container}>
				<div className={styles.containerUsers}>{usersList}</div>
			</div>
		)
	}

}

export default Users;