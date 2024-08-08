import React from "react";
import { Tarea } from "./Typos.D";

interface PropsTareas {
  EstadoTareas: Tarea[];
  EliminarPiedra: (usuario: Tarea) => void;
  UpdateTarea: (usuario: Tarea) => void;
  ModalScrrem: () => void;
}

const ListaTarea = ({
  EstadoTareas,
  EliminarPiedra,
  UpdateTarea,
  ModalScrrem,
}: PropsTareas) => {
  const CickMee = (itemDepor  : Tarea) => {
    UpdateTarea(itemDepor);
    ModalScrrem();
  };
  return (
    <>
      <div className="">
        <h1>Lista Tareas</h1>
        {EstadoTareas.length > 0 &&
          EstadoTareas.map((item, index) => (
            <div
              key={index}
              className="d-flex border rounded justify-content-around align-items-center m-2  p-2"
            >
              <h2>{item.id}</h2>
              <h2>{item.tarea}</h2>
              <div>
                <button
                  onClick={() => EliminarPiedra(item)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => CickMee(item)}
                >
                  UpdateTarea
                </button>
              </div>
            </div>
          ))}
        {/* <h1>{EstadoTareas.length}</h1> */}
      </div>
    </>
  );
};

export default ListaTarea;
