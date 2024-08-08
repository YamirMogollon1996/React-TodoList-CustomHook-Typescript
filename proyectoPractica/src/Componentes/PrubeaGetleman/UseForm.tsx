import React, { useState } from "react";
import { Tarea } from "./Typos.D";

const initalState: Tarea = {
  id: "",
  tarea: "",
};
const UseForm = (initialState: Tarea[]) => {
  const [EstadoTareas, setEstadoTareas] = useState<Array<Tarea>>(initialState);
  const [Form, setFormulario] = useState(initalState);
  const [Erroes, setErrroes] = useState({});
  const [TareaActualizar, SetTareaActua] = useState<Tarea>({} as Tarea);
  const [ChangueValue, setChangueValues] = useState(false);

  const HandleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setErrroes({});
    } else {
      setErrroes({ ...Erroes, [e.target.name]: "Rellenar los Campos" });
    }
  };

  const handleCahnuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ChangueValue) {
      //   console.log("Pedro miguel");
      if (Object.values(Erroes).length === 0) {
        setEstadoTareas([
          ...EstadoTareas,
          { ...Form, id: JSON.stringify(Date.now()) },
        ]);
      } else {
        alert("Tiene que Completar Los campos");
      }

      setTimeout(() => {
        setFormulario(initalState);
      }, 1000);
    } else {
      console.log("Actualizar");
    }
  };

  const EliminarPiedra = (usuario: Tarea) => {
    setEstadoTareas(EstadoTareas.filter((item) => item.id != usuario.id));
  };

  const UpdateTarea = (usuario: Tarea) => {
    SetTareaActua(usuario);
  };

  const ActualizarLadata = (User: Tarea) => {
    setEstadoTareas(
      EstadoTareas.map((Usu) =>
        Usu.id === User.id ? { ...Usu, tarea: User.tarea } : Usu
      )
    );
  };

  return {
    Form,
    handleCahnuge,
    HandleSubmit,
    EstadoTareas,
    EliminarPiedra,
    UpdateTarea,
    Erroes,
    HandleBlur,
    TareaActualizar,
    ActualizarLadata,
  };
};

export default UseForm;
