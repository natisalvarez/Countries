
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { getCountries } from '../../Redux/actions';
import style from "./Home.module.css"
import CountryOrder from '../../components/Filters/CountryOrder';
import CountryFilters from '../../components/Filters/CountryFilters';
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const CountriesFilter = useSelector((state) => state.CountryFilter);
  const itemsPerPage = 10; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  // useSelector para traer el currentPage y luego settearlo en 1 en el reducer
  // se configura el numero de paginas y la cantidad de paises a mostrar por pagina
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CountriesFilter.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (

    <div className={style.prueba1}>
      <div className={style.prueba}>

        {location.pathname != "/detail/:id" && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={CountriesFilter.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <div>
        <div className={style.filters}>
          <CountryOrder />
          <CountryFilters />
        </div>

      
        <div className={style.homeContainer}>
          <CardsContainer CountriesFilter={currentItems} />
        </div>
      </div>
    </div>

  );
};

export default Home;


