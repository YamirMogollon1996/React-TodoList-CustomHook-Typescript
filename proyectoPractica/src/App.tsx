import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Biblioteca from "./Componentes/Contexto/Biblioteca";
import Contexto from "./Componentes/Contexto/Contexto";
import Arreglos from "./Componentes/PruebaCodigoMentor/Arreglos";  
import Gentelman from "./Componentes/PrubeaGetleman/Gentelman";

function App() {
  return (
    <>
      <Contexto>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Biblioteca></Biblioteca>}></Route>
            <Route path="/Arreglos" element={<Arreglos></Arreglos>}></Route>
            <Route path="/Gentelman" element={<Gentelman></Gentelman>}></Route>
          </Routes>
        </BrowserRouter>
      </Contexto>
    </>
  );
}

export default App;
