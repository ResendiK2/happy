/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {FiArrowRight} from 'react-icons/fi';

import "../styles/pages/landing.css"
import LogoImg from '../images/Logo.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
            <img src={LogoImg} alt="Happy"/>
            
            <main>
                <h1>Leve felicidade para o Mundo</h1>
                <p>
                Visite orfanatos e mude o dia de muitas crianças.
                </p>
            </main>
            
            <div className="location">
                <strong>Cruzilia</strong>
                <span>Minas Gerais</span>
            </div>      
    
            <a href="/app" className="enter-app"> 
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </a>
            </div>
        </div>
    );
}

export default Landing;