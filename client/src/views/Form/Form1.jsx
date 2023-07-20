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
    dispatch(getCountries());
  }, [dispatch]);


  const initialFormState = {
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  };


  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});


  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setForm({
      ...form,
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
    dispatch(createActivity(form.name, form.difficulty, form.duration, form.season, form.country));
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
            <label> Activity </label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
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