import React, { useEffect } from "react";
import UsecontextGlobal from "./Hooks/UsecontextGlobal";
import Formulario from "../Form/Formulario";

const Biblioteca = () => {
  const { estadousuarios, EliminarCrossan, DispararAcciones, UpdateRecine } =
    UsecontextGlobal();
  const { Lista } = estadousuarios;

  useEffect(() => {
    localStorage.setItem("listaUsuarios", JSON.stringify(estadousuarios));
  }, [estadousuarios]);
  return (
    <>
      <div className="FormSubmitEvent">
        {Lista.map((item, index) => (
          <div
            style={{
              width: "300px",
            }}
            className="card"
            key={index}
          >
            <div className="card-header">
              <h1 className="text-primary">{item.id}</h1>
            </div>
            <div className="card-body">
              <p>{item.email}</p>
              <h1>{item.age}</h1>
              <h1>{item.name.slice(0, 15)}</h1>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-success"
                onClick={() => EliminarCrossan(item)}
              >
                Eliminar
              </button>
              <button
                onClick={() => DispararAcciones(item)}
                className="btn btn-warning m-4"
              >
                SubAge
              </button>
              <button  onClick={()=>UpdateRecine(item)} className="btn btn-secondary">Update</button>
            </div>
          </div>
        ))}
      </div>
      <Formulario></Formulario>
    </>
  );
};

export default Biblioteca;
