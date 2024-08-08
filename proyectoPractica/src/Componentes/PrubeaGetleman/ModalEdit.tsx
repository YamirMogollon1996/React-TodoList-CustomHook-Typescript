import React, { useEffect, useState } from "react";
import { Tarea } from "./Typos.D";

interface PropsModal {
  TareaActualizar: Tarea;
  filtro: Array<Tarea>;
  UpdateTarea: (ValorTarea: Tarea) => void;
  ActualizarLadata: (User: Tarea) => void;
  ModalScrrem: () => void;
}

const ModalEdit = ({
  TareaActualizar,
  filtro,
  UpdateTarea,
  ActualizarLadata,
  ModalScrrem,
}: PropsModal) => {
  const [Names, setNmes] = useState<Tarea>({} as Tarea);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNmes({
      ...Names,
      tarea: e.target.value,
    });
  };

  const HandleClcikActuaizar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ActualizarLadata(Names);
    ModalScrrem();
  };

  useEffect(() => {
    setNmes(TareaActualizar);
  }, []);

  return (
    <>
      <div className="Form-Container d-flex align-items-center justify-content-center">
        {/* <h1>{JSON.stringify( TareaActualizar)}</h1> */}
        <div className="container  p-5 bg-secondary rounded">
          <form onSubmit={HandleClcikActuaizar}>
            <input
              name="tarea"
              onChange={HandleChange}
              value={Names.tarea}
              placeholder="valorupdate"
              className="form-control"
            ></input>
            <br></br>
            <button className="btn btn-dark">Actualizar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
