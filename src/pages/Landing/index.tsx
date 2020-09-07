import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logoOficial2.png';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';

// import studyIcon from '../../assets/images/icons/study.svg';

// import icons from '../../assets/images/icons/discord.png';

// import api from '../../services/api';

import './styles.css';
//const discord = forum.link;
function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Trilha" />
        </div>

        <div className="buttons-container">
          <Link to="/cadastro-candidata" className="study">
            Sou Candidata
          </Link>
          <Link to="/cadastro-prova" className="give-classes">
            Sou Empresa
          </Link>
        </div>
        <div className="buttons-container-two">
          <Link to="/provas" className="study">
            Testes/Vagas
          </Link>
          <Link to="/candidatas" className="give-classes">
            Buscar Candidatas
          </Link>
        </div>
        {/* <Partners /> */}
        <Footer />
        <Partners />
      </div>
    </div>
  );
}

export default Landing;
