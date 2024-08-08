import React, { useState } from "react";
import { Tarea } from "../Typos.D";

const UseSearchHook = () => {
  const [Busqedad, setBusqiedad] = useState<string>("");
  const HandleChanne2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqiedad(e.target.value);
    console.log("buscar Formulario Js");
  };
  const EnviarBusquedad = (e: React.FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault();
    console.log(Busqedad);
  };
  const HandleSearch = (RecibirTareas: Array<Tarea>): Array<Tarea> => {
    return RecibirTareas.filter((item) =>
      item.tarea.toLocaleLowerCase().includes(Busqedad)
    );
  };

  return { Busqedad, HandleChanne2, EnviarBusquedad, HandleSearch };
};

export default UseSearchHook;
