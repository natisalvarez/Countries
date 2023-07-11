import { Link } from 'react-router-dom';
import styles from "./Landing.modules.css?inline"

const Landing = () => {
    return (
        <div>
        <h1> Hello World! </h1>
            <Link to="/home" className={styles.button}> HOME </Link>
        </div>
    )
};

export default Landing;