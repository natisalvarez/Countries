import { Link } from 'react-router-dom';
import style from "./Landing.module.css"

const Landing = () => {
    return (
        <div className={style.landing}>
            <div>
            <Link to="/home" className={style.button}> Let's start! </Link>
        </div>
        </div>
    )};

export default Landing;