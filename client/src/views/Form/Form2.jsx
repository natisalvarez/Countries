
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../Redux/actions";
import style from "./Form.module.css";
import { NavLink } from "react-router-dom";


const Form = () => {
const dispatch = useDispatch();
const countries = useSelector((state) => state.Countries) || [];


useEffect(() => {
dispatch(getCountries());
}, [dispatch]);


const initialFormState = {
name: "",
difficulty: "",
duration: "",
season: "",
country: null,
};


const [form, setForm] = useState(initialFormState);
const [errors, setErrors] = useState({});


const handleCountryChange = (event) => {
const selectedCountry = event.target.value;
setForm({
...form,
country: selectedCountry,
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
<label> Duration </label>
<input
type="text"
value={form.duration}
onChange={changeHandler}
name="duration"
/>
<span className={style.errorMessage}>{errors.duration}</span>
<label> hours </label>
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
value={form.country}
onChange={handleCountryChange}
name="country"
>
<option value="All Countries">All Countries</option>
{countries.map((country) => (
<option key={country.id} value={country.id}>
{country.id}
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
OPCION II
import React, { useState, useEffect } from "react";
import validation from "../../components/Validation/Validation";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";
import {getCountries} from '../../Redux/actions';

const Form = () => {
  const allCountries = useSelector((state) => state.Countries);
  const dispatch = useDispatch();

  console.log(allCountries)

  useEffect(() => {
    // Llama a la acción getCountries para cargar los datos de los países 
    dispatch(getCountries());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: ""
    });

  const handleChange = (event) => {
    const property = event.target.name; //la propiedad del formulario que va a ser modificada
    const value = event.target.value;

    let updatedForm = {
      ...form,
      [property]: value,
    };

    if (property === "country") {
      updatedForm = {
        ...updatedForm,
        countryId: [...form.countryId, value],
      };
    }

    setForm(updatedForm);
    setErrors(validation(updatedForm));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
   

      setForm({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
      });

      alert("The activity was succeffuly created");
    } else {
      alert("Please, complete the inputs");
    }
    event.target.reset();
  };

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre: </label>
          <select
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          >
            <option value="" disabled>
            Select an activity
            </option>
            <option value="Swimming">Swimming</option>
            <option value="Hiking">Hiking</option>
            <option value="Cycling Tour">Cycling</option>  
          </select>
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>

        <div >
          <label htmlFor="difficulty">difficulty: </label>
          <select
            id="difficulty"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
           
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="1">1 (null difficulty )</option>
            <option value="2">2 (low difficulty )</option>
            <option value="3">3 (media difficulty )</option>
            <option value="4">4 (high difficulty )</option>
            <option value="5">5 (extreme difficulty)</option>
          </select>
          {errors.difficulty && (
            <p className={style.error}>{errors.difficulty}</p>
          )}
        </div>
        <div >
          <label htmlFor="duration">Duration (hours): </label>
          <input
            id="duration"
            type="number"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            min={1}
            max={5}
          />
          {errors.duration && <p className={style.error}>{errors.duration}</p>}
        </div>

        <div >
          <label htmlFor="season">Season: </label>
          <select
            name="season"
            id="season"
            value={form.season}
            onChange={handleChange}
            
          >
            <option value="" disabled>
              Select a season
            </option>
            <option value="summer">summer</option>
            <option value="autumn">autumn</option>
            <option value="winter">winter</option>
            <option value="spring">spring</option>
          </select>
          {errors.season && (
            <p className={style.error}>{errors.season}</p>
          )}
        </div>
        <div >
          <label htmlFor="countryId">Country / Countries: </label>
          <select
            name="countryId"
            id="countryId"
            onChange={handleChange}
          >
            <option value="">Select the country</option>
            {allCountries?.map((country) => (
              <option value={country.id} key={country.id}>
                {country.id}
              </option>
            ))}
          </select>
          {errors.countryId && <p className={style.error}>{errors.countryId}</p>}
        </div>
        <div>
          <button type="submit" >
           Submit Activity!
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;



ULTIMO FORM

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
    countryId: "",
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


*/
