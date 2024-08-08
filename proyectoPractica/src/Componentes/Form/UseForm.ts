import React, { useState } from "react";
import UsecontextGlobal from "../Contexto/Hooks/UsecontextGlobal";
import { Usuario } from '../Contexto/Index.t';
// Usuario
const UseForm = <T extends object>(initialState: (T | Usuario)) => {
  const [Formulario, SetFormulario] = useState(initialState);
  const { AgregarUsuario, estadousuarios } = UsecontextGlobal();
  const HandleChanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetFormulario({
      ...Formulario,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ValorValues = Object.values(Formulario).map(item => item === "").find(item => item === true)
    const ArrayForm: (Usuario) = {
      id: estadousuarios.Lista.length + 1,
      name: Formulario?.name,
      email: Formulario?.email,
      age: Formulario?.age
    }

    if (ValorValues === undefined)
      AgregarUsuario(ArrayForm);

  };

  return { Formulario, HandleChanuge, HandleSubmit, SetFormulario };
};

export default UseForm;
