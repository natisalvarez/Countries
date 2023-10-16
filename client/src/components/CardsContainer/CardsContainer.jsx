import style from './CardsContainer.module.css';
import Card from '../Card/Card';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../Redux/actions';

//Vienen countriesFilter por Home (filtra 10 por pag)
const CardsContainer = ({ CountriesFilter }) => {
  const dispatch = useDispatch(); 
  // LLamo a la función dispatch

  // Despacho la acción para limpiar el filtro
    const handleFilterClear = () => {
        dispatch(getCountries());
      };
    
    console.log(CountriesFilter)
    return (
        <div className={style.container}>
          {CountriesFilter.length === 0 
          ? (<p>No results matched. Please, refresh Countries!</p>) 
          : (
            <div className={style.cards}>
              {CountriesFilter?.map((country) => (
                <Card
                  key={country?.id}
                  id={country?.id}
                  name={country?.name}
                  img={country?.image}
                  continent={country?.continent}
                  capital={country?.capital}
                  subregion={country?.subregion}
                  population={country?.population}
                  area={country?.area}
                  flag={country?.flag}
                />
              ))}
            </div>
          )}
        </div>
      );
    };
    
    export default CardsContainer;
/* 
Activities: []
area: 160
capital: "Vaduz"
continent: 
"Europe"
id: "LIE"
image: "https://flagcdn.com/li.svg"
name: "Liechtenstein"
population: 38137
subregion: "Western Europe"

*/

