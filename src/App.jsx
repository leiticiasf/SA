import './App.css';
import React from 'react';
import Home from './componentes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrar from "./componentes/Entrar";
import Ponto from "./componentes/Ponto";
import Visualizar from "./componentes/Visualizar";
import Mapa from "./componentes/Mapa";
import EditarPerfil from './componentes/EditarPerfil';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>

<Router>
      {}
      <Routes>
         {}
        <Route path="/entrar" element={<Entrar />} />
        {}
        <Route path="/" element={<Home />} />
        {}
        <Route path="/mapa" element={<Mapa />} />
        {}
        <Route path="/ponto" element={<Ponto />} />
        {}
        <Route path="/visualizar" element={<Visualizar/>} />
        {}
        <Route path="/editarPerfil" element={<EditarPerfil />} />
         </Routes>

        </Router>

          </>
  );  
}

export default App;
