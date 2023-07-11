import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import {useLocation} from 'react-router-dom'

function App() {

  const location = useLocation();

  return (
    <div>
       {location.pathname !== '/' && <NavBar/>} 
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;



