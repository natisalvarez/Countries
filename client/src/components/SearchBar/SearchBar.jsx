import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import  { onSearch } from '../../Redux/actions';
import * as actions from '../../Redux/actions'



const SearchBar = () => {
    
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () =>{ 
         dispatch(onSearch(name))
    }
    return(
        <div>
            <input type="search" placeholder='Write the name of a country' onChange={handleChange} value={name}/>

            <button onClick={() =>{handleClick();setName('')}}>Search</button>
        </div>
    )
}

export default SearchBar;