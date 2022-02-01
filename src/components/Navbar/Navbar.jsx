import styles from './Navbar.module.css';

import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.nav + ' block navbar'}>
            <NavLink to='/profile' className={styles.nav__item}>
                Profile
            </NavLink>
            <NavLink to='/dialogs' className={styles.nav__item}>
                Messenges
            </NavLink>
            <NavLink to='/news' className={styles.nav__item}>
                News
            </NavLink>
            <NavLink to='/music' className={styles.nav__item}>
                Music
            </NavLink>
            <NavLink to='/settings' className={styles.nav__item}>
                Settings
            </NavLink>
            <NavLink to='/users' className={styles.nav__item}>
                Users
            </NavLink>
        </nav>
    )
}

export default Navbar;