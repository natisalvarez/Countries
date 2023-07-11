import axios from "axios";
import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES, 
  ADD_ACTIVITIES,
  COUNTRY_DETAIL
} from "./actionTypes";

export const getCountries = () => {
  try {
    return async function (dispatch) { // la action creator tiene que retornar una función que hace la request
      const apiData = await axios.get("http://localhost:3001/countries");
      console.log(apiData)
      const countries = apiData.data;
      dispatch({ type: GET_COUNTRIES, payload: countries });
      // el type es lo que tiene que hacer y el 
      // payload es el array de countries. 
      // Como es una petición tiene que ser asincrona. 
    };
  } catch (error) {
    alert("Error: " + error.response.data.error);
  }
}


export const onSearch = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );

      if (data.length) {
        return dispatch({
          type: SEARCH_COUNTRIES,
          payload: data,
        });
      }
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

export const addActivity = (activities) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/activities",
        activities
      );
      return dispatch({ 
        type: ADD_ACTIVITIES, 
        payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

export const getCountryByDetail = () =>{
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
  
        if (data.length) {
          return dispatch({
            type: COUNTRY_DETAIL,
            payload: data,
          });
        }
      } catch (error) {
        alert("Error: " + error.response.data.error);
      }
    };
  };
