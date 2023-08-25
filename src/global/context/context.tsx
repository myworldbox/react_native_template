import * as init from '../../init/export'

var context = () => {
    return init.react.useContext(init.writable.value)
}

var store = () => {
    return init.react.createContext(init.variable.default)
}

var creator = () => {

    var [state, dispatcher]: any = init.react.useReducer(init.reducer.default, init.variable.default)

    return { state, dispatch: (value: any) => init.dispatch.default(dispatcher, value) }
}

export {
    store,
    context,
    creator
}