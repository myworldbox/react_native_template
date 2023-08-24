import * as init from '../init/export'

var context = () => {

    var [state, dispatcher]: any = init.react.useReducer(init.reducer.default, init.variable)

    const dispatch = (name: any, value: any) => {
        dispatcher({ type: 'any', payload: { name, value } });
    };
    return { state, dispatch }
}

export default context