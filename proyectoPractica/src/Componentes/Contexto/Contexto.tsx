import React, { useReducer } from "react";
import { FuncionReductora } from "../Reduccion";
import { Personajes, Usuario } from "./Index.t";
import { GlobalContextoS } from "./ContextoGlobal";
import { ChekingDataValues } from "../helpers/RecuperarLocalStorage";

const PrincipalState: Personajes = {
  Lista: [
    { id: 1, name: "yamir", email: "yamir@gmail.com", age: 22 },
    { id: 2, name: "Jhon", email: "jorgue@gmail.com", age: 122 },
    { id: 2, name: "Jhon", email: "jorgue@gmail.com", age: 122 },
  ],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Contexto = ({ children }: Props) => {
  const [estadousuarios, dispatch] = useReducer(
    FuncionReductora,
    ChekingDataValues(PrincipalState)
  ); 


  const UpdateRecine = (diccionar: Usuario   ) => {

      dispatch({
        type:"actualizar" , 
        payload: diccionar
      })
  };

  const DispararAcciones = (diccionar: Usuario) => {
    dispatch({
      type: "ChangueValor",
      payload: diccionar,
    });
  };

  const AgregarUsuario = (diccionar: Usuario) => {
    dispatch({
      type: "add",
      payload: diccionar,
    });
  };

  const EliminarCrossan = (valoreliminar: Usuario) => {
    dispatch({
      type: "add",
      payload: valoreliminar,
    });
  };

  const data = {
    estadousuarios,
    EliminarCrossan,
    AgregarUsuario,
    DispararAcciones,
    UpdateRecine,
  };
  return (
    <>
      <GlobalContextoS.Provider value={data}>
        {children}
      </GlobalContextoS.Provider>
    </>
  );
};

export default Contexto;
