import React from 'react';
import axios from 'axios';
import userPic from '../../assets/img/pngguru.com.png';
import styles from './users.module.css';

class Users extends React.Component {

	loadUsers = () => {
		this.props.showLoading();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?
			count=${this.props.pageSize}&page=${this.props.curentPage}`
		).then((response) => {
			this.props.setTotalCountUsers(response.data.totalCount);
			this.props.getUsers(response.data.items);
			this.props.showDate();
		});

	};
	switchPage = (numPage) => {
		this.props.switchNewPage(numPage);
		this.props.showLoading();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?
			count=${this.props.pageSize}&page=${numPage}`
		).then((response) => {
			this.props.getUsers(response.data.items);
			this.props.showDate();
		});
	};

	changePage = (value) => {
		this.props.changePageSize(value);
		this.props.switchNewPage(1);
		this.props.setLinkFirst();
		this.props.showLoading();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?
			count=${value}&page=1`
		).then((response) => {
			this.props.getUsers(response.data.items);
			this.props.showDate();
		});
	};

	componentDidMount() {
		this.loadUsers();
	}

	up = () => {
		if (this.props.curentLinkPart < ((this.props.totalCountUsers / this.props.pageSize) / 10) - 1) {
			this.props.linkUp();
		}
	};
	down = () => {
		if (this.props.curentLinkPart > 1) {
			this.props.linkDown();
		}
	};

	render() {
		let pages = [];

		for(let i=1; i<=Math.ceil(this.props.totalCountUsers/this.props.pageSize); i++){
			pages.push({id:i,numPage:i})
		}
		let pagesLinks = pages.map((p) => {
			let visible;
			if (this.props.curentLinkPart === 1) {
				visible = p.id >= this.props.curentLinkPart && p.id <= this.props.curentLinkPart * 10;
			} else {
				visible = p.id >= (this.props.curentLinkPart * 10) + 1 && p.id <= (this.props.curentLinkPart + 1) * 10;
			}
			return (
				<span
					className={`${styles.link} ${p.id === this.props.curentPage ? styles.curentMarker : ''}`}
					key={p.id}
					onClick={() => this.switchPage(p.id)}
					hidden={!visible}
				>
					{p.numPage}
				</span>
			)
		});

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
		let load = <div className={styles.loadingBanner}>LOADING...</div>
		return (

			<div className={styles.container}>
				<div className={styles.links}>
					<span className={styles.arrows} onClick={this.down}>
						{'<<'}
					</span>
					{pagesLinks}
					<span className={styles.arrows} onClick={this.up}>
						{'>>'}
					</span>
				</div>
				<div className={styles.countUsers}>Количество пользователей настранице
					<select className={styles.selectCountUsers} value={this.props.pageSize} onChange={(e) => this.changePage(e.target.value)}>
						<option>10</option>
						<option>20</option>
						<option>30</option>
						<option>40</option>
						<option>50</option>
					</select>
				</div>
				<div className={styles.containerUsers}>{this.props.loading === true ? load : usersList}</div>
			</div>
		)
	}

}

export default Users;