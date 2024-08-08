import { createContext, useContext } from "react";
import { GlobalContextoS } from "../ContextoGlobal";
import React from "react";

const UsecontextGlobal = () => {
  const {
    estadousuarios,
    EliminarCrossan,
    AgregarUsuario,
    DispararAcciones,
    UpdateRecine, 
  
  } = useContext(GlobalContextoS);
  return {
    estadousuarios,
    EliminarCrossan,
    AgregarUsuario,
    DispararAcciones,
    UpdateRecine,
  };
};

export default UsecontextGlobal;
