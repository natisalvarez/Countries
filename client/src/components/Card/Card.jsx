import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) =>{
    return (
        <div className={styles.Card}>
            <Link to= {"/detail/:id"}>
            <h3>Name:{props.name}</h3>
            </Link>
            <p>Flag:{props.flag}</p>
            <p>Capital:{props.capital}</p>
            
        </div>
    )
}

export default Card;



