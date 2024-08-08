import { Personajes } from '../Contexto/Index.t';

export const ChekingDataValues = (PrincipalState: Personajes ): Personajes => {
    const chekingData = localStorage.getItem("listaUsuarios");
    if (chekingData !== null) {
        let DatosDellocalStorage: Personajes = JSON.parse(chekingData);
        return DatosDellocalStorage;
    }
    return PrincipalState;
};
// const DataValues = ChekingDataValues();