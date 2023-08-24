import * as init from '../init/export'

var redux = () => {

    var state = init.react_redux.useSelector((state: any) => state);
    var dispatch = init.react_redux.useDispatch()

    return { state, dispatch }
}

export default redux