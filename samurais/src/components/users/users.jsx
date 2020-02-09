import React from 'react';
import styles from "./users.module.css";
import userPic from "../../assets/img/pngguru.com.png";
import {NavLink} from 'react-router-dom';
const Users = (props) => {

	let
		pages = [];

	for (let i = 1; i <= Math.ceil(props.totalCountUsers / props.pageSize); i++) {
		pages.push({id: i, numPage: i})
	}
	let pagesLinks = pages.map((p) => {
		let visible;
		if (props.curentLinkPart === 1) {
			visible = p.id >= props.curentLinkPart && p.id <= props.curentLinkPart * 10;
		} else {
			visible = p.id >= (props.curentLinkPart * 10) + 1 && p.id <= (props.curentLinkPart + 1) * 10;
		}
		return (
			<span
				className={`${styles.link} ${p.id === props.curentPage ? styles.curentMarker : ''}`}
				key={p.id}
				onClick={() => props.switchPage(p.id)}
				hidden={!visible}
			>
					{p.numPage}
				</span>
		)
	});

	let usersList = props.users.map((user) => {
		return (
			<div key={user.id} className={styles.userWrap}>
				<div className={styles.avatarBlock}>
					<div className={styles.avatar}>
						<NavLink to={'/profile/'+user.id}>
							<img src={user.photos.small ? user.photos.small : userPic}
									 alt="avatar"
							/>
						</NavLink>

					</div>
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
					<div className={styles.status}>{user.status ? user.status : 'no status'}</div>
					{/*<div className={styles.locationCity}>{'user.location.city'}</div>
					<div className={styles.locationCountry}>{'user.location.country'}</div>*/}
				</div>
			</div>
		)
	});

	let load = <div className={styles.loadingBanner}>LOADING...</div>;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
					<span className={styles.arrows} onClick={props.down}>
						{'<<'}
					</span>
				{pagesLinks}
				<span className={styles.arrows} onClick={props.up}>
						{'>>'}
					</span>
			</div>
			<div className={styles.countUsers}>Количество пользователей настранице
				<select
					className={styles.selectCountUsers}
					value={props.pageSize}
					onChange={(e) => props.changePage(e.target.value)}>
					<option>10</option>
					<option>20</option>
					<option>30</option>
					<option>40</option>
					<option>50</option>
				</select>
			</div>
			<div className={styles.containerUsers}>{props.isLoading === true ? load : usersList}</div>
		</div>
	)
};

export default Users;