import * as init from '../../init/export'

var store = () => {
    return init.reduxjs.configureStore({ reducer: init.reducer.default })
}

var redux = () => {

    var state = init.react_redux.useSelector((state: any) => state);
    var dispatcher = init.react_redux.useDispatch()

    return { state, dispatch: (value: any) => init.dispatch.default(dispatcher, value) }
}

export {
    store,
    redux
}