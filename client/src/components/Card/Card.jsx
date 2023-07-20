import style from './Card.module.css'
import { Link } from 'react-router-dom';

//componente tonto que renderiza lo que viene por props que le envia cardsContainer
const Card = ({ id, name, img, continent }) => { // ver continent
    return (
            <div className={style.cardContainer}>

            <Link to={`/detail/${id}`}> 
            <div className={style.imgContainer}>
                <img src={img} alt="imageCountry" className={style.image} />
            </div>

            <div className={style.cardInfo}>

            <h4 className={style.cardTitle}>{name.toUpperCase()}</h4>
            <p className={style.cardSubtitle}> Continent: {continent}</p>
            </div>
            </Link>
            </div>
    )
}

export default Card;



