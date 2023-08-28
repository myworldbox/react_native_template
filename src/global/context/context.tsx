import * as init from '../../init/export'

var store = () => {

    var [state, dispatcher]: any = init.react.useReducer(init.reducer.default, init.variable.default)

    return { state, dispatch: (value: any) => init.dispatch.default(dispatcher, value) }
}

var context = () => {
    return init.react.useContext(init.writable.value)
}

var creator = () => {
    return init.react.createContext(init.variable.default)
}

export {
    store,
    context,
    creator
}