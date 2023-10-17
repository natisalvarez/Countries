import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import style from "./Landing.module.css";
import Lottie from 'lottie-react';
import lottieLanding from '../../assets/lottieLanding.json';

const Landing = () => {

    return (
        <div>
        <div className={style.landing}>
        <div>
        <Lottie animationData={lottieLanding} className={style.backgroundIframe}/>
          </div>
        <div>
            <Link to="/home" className={style.button}> Get started! </Link>
        </div>
        </div>

    </div>
)};


export default Landing;