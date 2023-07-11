import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.mainContainer}>
            <Link to="/home" className={styles.button}> HOME </Link>
            <Link to="/activities" className={styles.button}> ACTIVITIES </Link>
            <Link to="/" className={styles.button}> LANDING </Link>
        </div>
    )
}

export default NavBar;