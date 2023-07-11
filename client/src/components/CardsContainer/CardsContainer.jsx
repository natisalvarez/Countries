import styles from "./CardsContainerStyles.modules.css?inline";
import Card from '../Card/Card';
import { useSelector } from 'react-redux';


const CardsContainer = () => {
    const countries = useSelector(state => state.allCountries);

    return (
        <div className={styles.CardsContainer}>
            {countries.map(country => {
                return <Card
                    key={country.cca3}
                    name={country.name.common}
                    continent={country.region}
                    capital={country.capital}
                    subregion={country.subregion}
                    population={country.population}
                    area={country.area}
                    flag={country.flag}
                />
            })}
        </div>
    )
}

export default CardsContainer;