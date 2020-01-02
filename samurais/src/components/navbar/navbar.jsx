import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom'
function Navbar(){
	return (
			<nav className={styles.nav}>
				<ul>
					<li><NavLink className={styles.ref} activeClassName={styles.active} to="/profile">Profile</NavLink></li>
					<li><NavLink className={styles.ref} activeClassName={styles.active} to="/dialogs">Dialogs</NavLink></li>
					<li><NavLink className={styles.ref} activeClassName={styles.active} to="/">News</NavLink></li>
					<li><NavLink className={styles.ref} activeClassName={styles.active} to="/">Music</NavLink></li>
					<li><NavLink className={styles.ref} activeClassName={styles.active} to="/">Settings</NavLink></li>
				</ul>
			</nav>
	)
}

export default Navbar;

