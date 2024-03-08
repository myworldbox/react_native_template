import { useReducer, useContext, createContext } from 'react'
import reducer from '../reducer'
import variable from '../variable'
import dispatch from '../dispatch'
import Var from '../../model/var'

const context = {
    creator() {
        var [state, dispatcher]: any = useReducer(reducer, variable)

        return { state, dispatch: (value: any) => dispatch(dispatcher, value) }
    },
    context() {
        return useContext(Var.store)
    },
    store() {
        return createContext(variable)
    }
}

export default context