import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterOrder } from "../../Redux/actions";
import style from "./CountryOrder.module.css";

const CountryOrder = () => {
  const dispatch = useDispatch();

  //defino los estados locales del componente con useState

  const [orderByName, setOrderByName] = useState("All");
  const [orderByPopulation, setOrderByPopulation] = useState("All");

  const handleOrderChange = (event, type) => {
    // le paso el cambio realizado y el tipo de ordenamiento a realizar

  
    const order = event.target.value;
    
    if (type === "name") {
      setOrderByName(order);
      dispatch(filterOrder(order));
    } else if (type === "population") {
      setOrderByPopulation(order);
      dispatch(filterOrder(order, "population"));
    }
  };

  return (
    <div className={style.filtersContainer}>

      <div className={style.section}>
        <h3> Order by Name </h3>

        <label>
          <input
            type="radio"
            value="All"
            checked={orderByName === "All"}
            onChange={(e) => handleOrderChange(e, "name")}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            value="A"
            checked={orderByName === "A"}
            onChange={(e) => handleOrderChange(e, "name")}
          />
          A- Z
        </label>

        <label>
          <input
            type="radio"
            value="D"
            checked={orderByName === "D"}
            onChange={(e) => handleOrderChange(e, "name")}
          />
          Z-A
        </label>
      </div>


      <div className={style.section}>
        <h3> Order by Population </h3>
        <label>
          <input
            type="radio"
            value="All"
            checked={orderByPopulation === "All"}
            onChange={(e) => handleOrderChange(e, "population")}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            value="More population"
            checked={orderByPopulation === "More population"}
            onChange={(e) => handleOrderChange(e, "population")}
          />
          More
        </label>

        <label>
          <input
            type="radio"
            value="Less population"
            checked={orderByPopulation === "Less population"}
            onChange={(e) => handleOrderChange(e, "population")}
          />
          Less
        </label>
      </div>

    </div>
  );
};

export default CountryOrder;
