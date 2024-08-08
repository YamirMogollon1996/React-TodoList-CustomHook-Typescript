import React, { useEffect, useState } from "react";

interface GrupoId {
  grupoId: number;
  nombre: string;
}
const ArrayIsiaro = [
  { grupoId: 1, nombre: "mario" },
  { grupoId: 1, nombre: "SergioBerto" },
  { grupoId: 1, nombre: "Sonia Milagros" },
  { grupoId: 2, nombre: "Lucia" },
  { grupoId: 1, nombre: "Luis" },
  { grupoId: 1, nombre: "Carmen" },
  { grupoId: 3, nombre: "Boris" },
  { grupoId: 2, nombre: "Oscar" },
];

interface Item {
  GrupoId: GrupoId;
}

interface DatosAgrupados {
  [key: string]: GrupoId[];
}

const Arreglos = () => {
  const [estado, setEstado] = useState([]);

  const FuncionNumero = (): DatosAgrupados => {

          let Datos = estado.reduce<DatosAgrupados>((acumuador, item)  => {
            if (!acumuador[item]) {
              acumuador[item] = [];
            }
            acumuador[item].push(item);
          }, {} as DatosAgrupados);
    
        return Datos
  };


  const filtroDatos = () => {
    let data = estado.reduce((acum, item) => {
      if (!acum[item.grupoId]) {
        acum[item.grupoId] = [];
      }
      acum[item.grupoId].push(item);
      return acum;
    }, {});
    return data;
  };

  useEffect(() => {
    setEstado(ArrayIsiaro);
  }, []);

  return (
    <>
      {Object.keys(filtroDatos()).map((key, index) => (
        <div>
          <h1 className="btn btn-success"> Cabeza del numero {key}</h1>
          {filtroDatos()[key].map((item) => (
            <ul>
              {
                <li>
                  {" "}
                  <h2> {item.nombre}</h2>
                </li>
              }
            </ul>
          ))}
        </div>
      ))}

      {FuncionNumero(8, 9)}
    </>
  );
};

export default Arreglos;
