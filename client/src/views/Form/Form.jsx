import { useEffect, useState } from "react";
import validation from "../../components/Validation/Validation";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions";
import style from './Form.modules.css'


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
        [property]: value}) */

    const changeHandler = (event) => {
        console.log(event.target)
        setForm({
            ...form,
            [event.target.name]: event.target.value
            //aca basicamente digo que el event.target.name es igual al input
        })
        setErrors(validation())
    };

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        //evita que se recargue la pagina al hacer submit

    }

    return (
        <div>

            <h2> Please, post the activity that you can enjoy in each country! </h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <input type="text"
                        value={form.name}
                        onChange={changeHandler}
                        name="name"></input>
                    <label> Name </label>
                </div>

                <div>
                    <input type="text"
                        value={form.difficulty}
                        onChange={changeHandler}
                        name="difficulty"></input>
                    <label> Difficulty </label>
                </div>


                <div>
                    <input type="text"
                        value={form.duration}
                        onChange={changeHandler}
                        name="duration"></input>
                    <label> Duration </label>
                </div>

                <div>
                    <input type="text"
                        value={form.season}
                        onChange={changeHandler}
                        name="season"></input>
                    <label> Season </label>
                </div>

                <div>
                    <input type="text"
                        value={form.country}
                        onChange={changeHandler}
                        name="country"></input>
                    <label> Country </label>
                </div>

            </form>

            <div>
          <button type="submit">
            Create activity  
          </button>
        </div>
        </div>
    )
};

export default Form;