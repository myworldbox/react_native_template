import * as init from '../../init/export'

var context = () => {
    return init.react.useContext(init.writable.value)
}

var store = () => {
    console.log("hey ", init.variable.default)
    return init.react.createContext(init.variable.default)
}

var creator = () => {

    console.log("hey ", init.variable.default)
    var [state, dispatcher]: any = init.react.useReducer(init.reducer.default, init.variable)

    return { state, dispatch: (name: any, value: any) => init.dispatch.default(dispatcher, name, value) }
}

export {
    store,
    context,
    creator
}