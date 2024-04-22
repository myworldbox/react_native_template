import { useReducer, useContext, createContext } from 'react'
import reducer from '../reducer'
import variable from '../../model/variable'
import dispatch from '../dispatch'
import Var from '../../model/var'

const context = {
    init() {
        return useContext(Var.context.provider)
    },
    getter() {
        var [state, dispatcher]: any = useReducer(reducer, variable)

        return { state, dispatch: (value: any) => dispatch(dispatcher, value) }
    },
    provider() {
        return createContext(variable)
    }
}

export default context