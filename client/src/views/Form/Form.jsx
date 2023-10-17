import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../Redux/actions";
import style from "./Form.module.css";
import { NavLink } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';
import Lottie from 'lottie-react';
import map from '../../assets/map.json';
import lottieLanding from '../../assets/lottieLanding.json';

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.Countries) || [];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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
    const errors = {}
    if (!form.name) errors.name = "  You must select an activity";
    if (!form.duration) errors.duration = "  You must select the duration";
    if (!form.difficulty) errors.difficulty = "  You must select a level of difficutly";
    if (!form.season) errors.season = "  You must select a season";
    if (!form.countryId) errors.countryId = "  You must select a country";
    return errors
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    console.log(event.target)
    const value = event.target.value;
    validation({ ...form, [property]: value })
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
    dispatch(createActivity(form));
    // se crea la actividad con lo escrito en el form
    // Restablecer el formulario después del envío
    console.log(form)
    resetForm();
  };

  return (
    <div>
    {loading ? (
        <div className={style.spinner}>
      <SpinnerDotted 
        size={200}
        thickness={100}
        speed={100}
        color="#DF6E5A"
      />
      </div>
    ) : (
    <div className={style.container}>
         {/* <iframe
          src="https://lottie.host/?file=4cefb2ae-491f-42ef-8a75-7a4086f3300a/ho4qFKsZkX.json"
          className={style.backgroundIframe}
        ></iframe> */}
         <Lottie animationData={map} className={style.backgroundIframe}/>
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
            <select
              id="difficulty"
              name="difficulty"
              value={form.difficulty}
              onChange={changeHandler}>
              <option value="" disabled>
                Select a level of difficulty
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <span className={style.errorMessage}>{errors.difficulty}</span>
          </div>


          <br />


          <div>
            <label> Duration (hours) </label>
            <select
              id="duration"
              name="duration"
              value={form.duration}
              onChange={changeHandler}>
              <option value="" disabled>
                Select the time
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <span className={style.errorMessage}>{errors.duration}</span>
          </div>

          <br />

          <div>
            <label> Which season is the perfect for this activity :</label>
            <select
              id="season"
              name="season"
              value={form.season}
              onChange={changeHandler}>
              <option value="" disabled>
                Season
              </option>
              <option value="summer">summer</option>
              <option value="autumn">autumn</option>
              <option value="winter">winter</option>
              <option value="spring">spring</option>
            </select>
            <span className={style.errorMessage}>{errors.difficulty}</span>
          </div>

          <br />

          <div>
            <label> Country : </label>
            <select
              value={form.countryId}
              onChange={handleCountryChange}
              name="countryId">
              <option value="All Countries">All Countries</option>
              {countries.map((countryId) => (
                <option key={countryId.id} value={countryId.id}>
                  {countryId.name}
                </option>
              ))}
            </select>
            <span className={style.errorMessage}>{errors.countryId}</span>
          </div>
          <br />
          <div>
            <button className="button" type="submit" value="Submit">
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
  )};
</div>
)};

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