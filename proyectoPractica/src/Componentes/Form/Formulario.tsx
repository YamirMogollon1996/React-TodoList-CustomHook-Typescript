import React, { useEffect, useState } from "react";
import { Usuario } from '../Contexto/Index.t';
import UseForm from "./UseForm";
// import UseCustomHook from "./UseCustomHook"  ;

interface Initialpros {
  id: number;
  name: string;
  email: string;
  age: number;
}

const InitialForm: Usuario = {
  id: 0,
  name: "",
  email: "",
  age: 0,
};

const Formulario = () => {
  const [  estado ,setEstado ]  =  useState<Usuario>({} as Usuario)
  const { Formulario, HandleChanuge, HandleSubmit, SetFormulario } =
    UseForm<Usuario>(InitialForm);
  const {  age ,  email , name ,id }  = Formulario 


  const HandleCke = ()=>{

    setEstado({
      id:1,
      age:11,
      name:"mm",
      email:"mm@"
    })
  }
  return (
    <>
      <div className="container mt-5">
        <form onSubmit={HandleSubmit}>
          <div>


          <input 
          value={name}
            onChange={HandleChanuge}
            name="name"
            className="form-control  m-2"
          ></input>
          <input  
            value={email}
            onChange={HandleChanuge}
            name="email"
            className="form-control m-2"
          ></input>
          <input 
          value={age}
            onChange={HandleChanuge}
            name="age"
            className="form-control m-2"
          ></input>
          <button className="btn btn-primary">Add</button>
          </div>
        </form>
        {/* <h1>{id}</h1> */}
      </div>

      {/* {<h1>{JSON.stringify(Formulario)}</h1>} */}
    </>
  );
};

export default Formulario;
