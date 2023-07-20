import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../Redux/actions";
import style from "./Form.module.css";
import { NavLink } from "react-router-dom";


const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.Countries) || [];

console.log(countries)

  useEffect(() => {
    //para que los paises esten disponibles antes de seleccionar una actividad
    dispatch(getCountries());
  }, [dispatch]);

// estado inicial del formulario: vacío
  const initialFormState = {
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: "",
  };


  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});


  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setForm({
      ...form,
      //guardo una copia de estado del countryId
      countryId: selectedCountry,
    });
  };


  const validation = (form) => {
    const errors = {};


    if (!form.name || !/[a-z]+/.test(form.name)) {
      errors.name = "Activity is required and must be a word";
    }


    if (!/^[1-5]$/.test(form.difficulty)) {
      errors.difficulty = "Invalid Number. Please enter a number between 1 and 5.";
    }


    if (!/^(1?[0-9]|2[0-4])$/.test(form.duration)) {
      errors.duration = "Invalid Number. Please enter a number between 1 and 24.";
    }


    if (!["summer", "winter", "autumn", "spring"].includes(form.season)) {
      errors.season = "Invalid season. Please choose one of: summer, winter, autumn, spring.";
    }

    if (form.countryId.length < 1) {
      errors.countryId = "Debes seleccionar al menos un (1) país";
    }


    return errors;
  };


  const changeHandler = (event) => {
    const property = event.target.name;
    console.log(event.target)
    const value = event.target.name === "season" ? event.target.value.toLowerCase() : event.target.value;


    setForm({ ...form, [property]: value });
    setErrors({});
  };


  const resetForm = () => {
    setForm(initialFormState);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validation(form);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log(`se apretó el botón`);
    dispatch(createActivity(form.name, form.difficulty, form.duration, form.season, form.countryId));
    // se crea la actividad con lo escrito en el form
    // Restablecer el formulario después del envío
    resetForm();
  };


  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h2> Please, post the activity that you can enjoy in each country! </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"> Activity </label>
            <select
            id="name"
            name="name"
            value={form.name}
            onChange={changeHandler}>
            <option value="" disabled>
            Select an activity
            </option>
            <option value="Swimming">Swimming</option>
            <option value="Trekking">Trekking</option>
            <option value="Surfing">Surfing</option>
            <option value="Skiing">Skiing</option>
            <option value="Cycling">Cycling</option>
            <option value="Cycling">Clymbing</option>
          </select>
            <span className={style.errorMessage}>{errors.name}</span>
          </div>

          <br />

          <div>
            <label> Level of difficulty (1 to 5) </label>
            <input
              type="text"
              value={form.difficulty}
              onChange={changeHandler}
              name="difficulty"
            />
            <span className={style.errorMessage}>{errors.difficulty}</span>
          </div>


          <br />


          <div>
            <label> Duration (hs) </label>
            <input
              type="text"
              value={form.duration}
              onChange={changeHandler}
              name="duration"
            />
            <span className={style.errorMessage}>{errors.duration}</span>
          </div>


          <br />


          <div>
            <label> Season </label>
            <input
              type="text"
              value={form.season}
              onChange={changeHandler}
              name="season"
            />
            <span className={style.errorMessage}>{errors.season}</span>
          </div>


          <br />


          <div>
            <label> Country ! </label>
            <select
              value={form.countryId}
              onChange={handleCountryChange}
              name="countryId"
            >
              <option value="All Countries">All Countries</option>
              {countries.map((countryId) => (
                <option key={countryId.id} value={countryId.id}>
                  {countryId.id}
                </option>
              ))}
            </select>
          </div>


          <br />


          <div>
            <button type="submit" value="Submit">
              Create activity
            </button>
          </div>
        </form>


        <br />


        <button>
          <NavLink to="/home">Back</NavLink>
        </button>


        <br />


      </div>
    </div>
  );
};


export default Form;

/*
{
  {
  "name": "Climbing", 
  "duration": 5,
  "difficulty": 4,
  "countryId": "GTM", 
  "season": "summer"
}


const Form = () => {

    const [form, setForm] = useState({
        // las propiedades del estado y del form tienen que ser las mismas.
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    }) //set form es la función que modifica el estado

    const [errors, setErrors] = useState({
        name: {},
        difficulty: {},
        duration: {},
        season: {},
        country: []
    })

    /* const changeHandler = (event) => {} // esta funcion lee lo que se escribe en el formulario y lo guarda
    // event tiene una propiedad que nos dice quién dispara el evento: event.target   
    const property = event.target.name;
    const value = event.target.value;
    setForm({
        ...form,
        [property]: value}) 

        const changeHandler = (event) => {
          console.log(event.target)
          setForm({
              ...form,
              [event.target.name]: event.target.value
              //aca basicamente digo que el event.target.name es igual al input
          })
          setErrors()
      };
*/