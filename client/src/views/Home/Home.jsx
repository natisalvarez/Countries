import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {

  const dispatch = useDispatch(getCountries());
  //Cuando el componente se monta ejectuame la función useEffect.
  useEffect(() => {
    dispatch(getCountries())
  }, []); // esta funcion se ejecuta cuando el componente se monta. 

  return (
    <div>
      <SearchBar />
      <CardsContainer />
    </div>
  )
};

export default Home;