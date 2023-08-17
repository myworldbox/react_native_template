import * as init from '../init/init'

var context = () => {

    var [state, dispatch] = init.react.useReducer((state: any) => ({ ...state }), init.creator.creator)

    return { state, dispatch }
}

export {
    context
}