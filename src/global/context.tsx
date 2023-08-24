import * as init from '../init/export'

var context = () => {

    var [state, dispatch]: any = init.react.useReducer(init.reducer.default, init.variable)

    return { state, dispatch }
}

export default context