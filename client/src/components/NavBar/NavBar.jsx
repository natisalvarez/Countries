import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { getCountryByName } from '../../Redux/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchName));
  };

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };


  const location = useLocation();

  const isFormPage = location.pathname === "/activities";

  return (
    <div className={styles.NavBar}>
      
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.forward}> LANDING </Link></li>
        <li><Link to="/home" className={styles.center}> HOME </Link></li>
        <li><Link to="/form" className={styles.upward}> FORM </Link></li>
        <li><Link to="/activities" className={styles.upward}> ACTIVITIES </Link></li>
      </ul>
      <div>
        {location.pathname === '/home' && 
        <SearchBar searchName={searchName}
            handleChange={handleChange}
            handleSubmit={handleSubmit}/>}
      </div>
    </div>
  );
};

export default NavBar;





