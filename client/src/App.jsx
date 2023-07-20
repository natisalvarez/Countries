import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import ActivityCardContainer from './views/ActivityCardContainer/ActivityCardContainer'
import './App.css'

function App() {

  const location = useLocation();

  return (
    <div>
      <div>
        {location.pathname !== '/' && <NavBar />}
      </div>

      <Routes>
        <Route exact path= "/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/activities" element={<ActivityCardContainer />} />
      </Routes>
    </div>
  );
}

export default App;



