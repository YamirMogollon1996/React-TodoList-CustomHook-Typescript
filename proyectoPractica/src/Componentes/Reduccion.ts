import { Usuario, Personajes } from './Contexto/Index.t';
type ActionTypes =
    | { type: "add", payload: Usuario }
    | { type: "eliminar", payload: Usuario }
    | { type: "ChangueValor", payload: Usuario }
    | { type: "actualizar", payload: Usuario }

export const FuncionReductora = (state: Personajes, action: ActionTypes): Personajes => {
    switch (action.type) {
        case 'add': {
            let EncontrarData = state.Lista.find(item => item.id === action.payload.id)
            if (!EncontrarData) {
                return {
                    ...state,
                    Lista: [...state.Lista, action.payload]
                }
            }
        }
        case 'eliminar': {
            return {
                ...state,
                Lista: state.Lista.filter(item => item.id != action.payload.id)
            }

        }
        case 'ChangueValor': {
            let data: (Usuario | undefined) = state.Lista.find(item => item.id === action.payload.id)
            const Valor = action.payload.id
            if (!data) throw new Error("No se encontro data");
            if (data.age) {
                if (data?.age < 100) {
                    return {
                        ...state,
                        Lista: state.Lista.map(item => item.id === Valor
                            ? { ...item, age: item.age++ } : item
                        )
                    }
                } else {
                    return {
                        ...state,
                        Lista: state.Lista.map(item => item.id === Valor
                            ? { ...item, age: 0 } : item
                        )
                    }
                }
            }
        }
        case 'actualizar': {
            let ActualizarValor: (Usuario | undefined) = state.Lista.find(item => item.id === action.payload.id)
            let acciones = action.payload.id
            return {
                ...state,
                Lista: state.Lista.map(item => item.id === acciones

                    ? { ...item, name: "Gokuuuuuuuuuuuuuuuuu" }
                    : item
                )
            }
        }
        default:
            return state
    }
}