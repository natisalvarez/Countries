import axios from "axios";

import {
  GET_COUNTRIES,
  GET_BY_NAME,
  CLEAN_DETAIL,
  ADD_ACTIVITIES,
  COUNTRY_DETAIL,
  SET_CURRENT_PAGE,
  FILTER_COUNTRY_CONTINENT,
  FILTER_ACTIVITIES,
  ORDER,
  GET_ACTIVITIES,
  COUNTRY_ACTIVITIES
 
} from "./actionTypes";

export const getCountries = () => {
  try {
    return async function (dispatch) { // la action creator tiene que retornar una función que hace la request
      const apiData = await axios.get("/countries");
      const countries = apiData.data;
      console.log(countries)
      dispatch({ type: GET_COUNTRIES, payload: countries });
      // el type es lo que tiene que hacer y el 
      // payload es el array de countries. 
      // Como es una petición tiene que ser asincrona. 
    };
  } catch (error) {
    alert("Error: " + error.response.data.error);
  }
}

export const getCountryByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(`/countries/?name=${name}`);
      const data = response.data;
      console.log(data)
      dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/activities");
      const data = response.data;
      console.log(data)
      dispatch({type: GET_ACTIVITIES, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};


export const getCountryByDetail = (id) =>{
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/countries/${id}`);
        return dispatch({
          type: COUNTRY_DETAIL,
          payload: data,
        });
      } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  }}

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL
  };
};

export const createActivity = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "/activities",
        form
      );
    const data = response.data; 
     console.log(data)
      alert(`The activity was created`)
      return dispatch({ 
        type: ADD_ACTIVITIES, 
        payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

  export const setCurrentPage = (page) => {
    return {
      type: SET_CURRENT_PAGE,
      payload: page,
    };
  };

  export const filterCountryByContinent = (input) => {
    console.log(input)
    return {
      type: FILTER_COUNTRY_CONTINENT,
      payload: input,
    };
  };
  
  export const filterActivities = (input) => {
    return {
      type: FILTER_ACTIVITIES,
      payload: input,
    };
  };
  
  export const filterOrder = (payload) => {
    return {
      type: ORDER,
      payload,
    };
  };

  export const getCountryActivity = (name) => {
    return {
        type: COUNTRY_ACTIVITIES,
        payload: name,
    };
  };
  


 