import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountryByContinent, filterActivities } from '../../Redux/actions'
import style from "./CountryFilters.module.css";


const CountryFilters = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allActivities);

  
  const continentOptions = [
    { value: "All", label: "All" },
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "Africa" },
    { value: "Oceania", label: "Oceania" },
    { value: "Europe", label: "Europe" },
    { value: "South America", label: "South America"},
    { value:  "North America", label:  "North America"},
    { value: "Antarctica", label: "Antartic" }
  ];

  
  const activityOptions = [
    { value: "All activities", label: "All activities" },
    { value: "Trekking", label: "Trekking" },
    { value: "Surfing", label: "Surfing" },
    { value: "Skiing", label: "Skiing" },
    { value: "Cycling", label: "Cycling" },
    { value: "Climbing", label: "Climbing" }
  ];

  const handleFilterContinent = (event) => {
    dispatch(filterCountryByContinent(event.target.value));
  };


  const handleFilterActivity = (event) => {
    dispatch(filterActivities(event.target.value));
    console.log(countries);
  };

  return (
    <>
      <div className={style.filtersContainer}>
        <div className={style.section}>
          
          <h3> Continents </h3>

          <select onChange={handleFilterContinent} className={style.select}>
            {continentOptions.map((option) => (
              <option className={style.option} key={option.value} value={option.value}>
              {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={style.section}>
        <h3> Activities </h3>

          <select onChange={handleFilterActivity} className={style.select}>
            {activityOptions.map((option) => (
              <option className={style.option} key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CountryFilters;

