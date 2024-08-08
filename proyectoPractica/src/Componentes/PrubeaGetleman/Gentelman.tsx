import React, { useState } from "react";
import UseForm from "./UseForm";
import ListaTarea from "./ListaTarea";
import { Tarea } from "./Typos.D";
import UseSearchHook from "./Hook/UseSearchHook";
import ModalEdit from "./ModalEdit";
const initalStateForm: Array<Tarea> = [];  


const Gentelman = () => {
  const {
    Form,
    HandleSubmit,
    handleCahnuge,
    EstadoTareas,
    EliminarPiedra,
    UpdateTarea,
    Erroes,
    HandleBlur,
    TareaActualizar,
    ActualizarLadata,
  } = UseForm(initalStateForm);

  const { Busqedad, HandleChanne2, EnviarBusquedad, HandleSearch } =
    UseSearchHook();

  const [Modal, setModal] = useState(false);
  const [ModalUdapte , setModalUdapte] =  useState( false)
  const filtro: Array<Tarea> = HandleSearch(EstadoTareas);
  const { tarea } = Form;

  const ModalScrrem =  ()=>{
      setModalUdapte(!ModalUdapte);
  }
  return (
    <>
    <h1  className="text-center bg-secondary p-2  text-white"  >Lista De usuarios con Typscript</h1>
      {ModalUdapte && (
        <ModalEdit
          ModalScrrem={ModalScrrem}
          ActualizarLadata={ActualizarLadata}
          UpdateTarea={UpdateTarea}
          filtro={filtro}
          TareaActualizar={TareaActualizar}
        >
          
        </ModalEdit>
      )}
      <div className="container">
        <form onSubmit={HandleSubmit}>
          <br></br>
          <br></br>
          <input
            value={tarea}
            onChange={handleCahnuge}
            placeholder="Tarea"
            name="tarea"
            className="form-control"
            onBlur={HandleBlur}
            // required
          ></input>
          <p
            style={{
              color: "red",
            }}
          >
            {Erroes?.tarea}
          </p>

          <div className="container w-25">
            {Modal && (
              <input
                onChange={HandleChanne2}
                className="form-control"
                placeholder="buscar"
              ></input>
            )}
          </div>
          <button className="btn btn-primary m-2">Enviar</button>
        </form>

        {!Modal ? (
          <button
            onClick={() => setModal(!Modal)}
            className="btn btn-success m-2"
          >
            Filtrar
          </button>
        ) : (
          <button
            onClick={() => setModal(!Modal)}
            className="btn btn-success m-2"
          >
            QuitarFitro
          </button>
        )}
        <ListaTarea
          EliminarPiedra={EliminarPiedra}
          EstadoTareas={filtro}
          UpdateTarea={UpdateTarea}
          ModalScrrem={ModalScrrem}
        ></ListaTarea>
      </div>
    </>
  );
};

export default Gentelman;
