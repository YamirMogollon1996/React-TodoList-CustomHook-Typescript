import { createContext } from "react";
import { Personajes, Usuario } from './Index.t';
interface PropsContext {
  estadousuarios: Personajes;
  EliminarCrossan: (valoreliminar: Usuario) => void;
  AgregarUsuario: (diccionar: Usuario) => void;
  DispararAcciones: (diccionar: Usuario) => void;
  UpdateRecine :  (diccionar: Usuario )=> void
}
export const GlobalContextoS = createContext<PropsContext>({} as PropsContext);
