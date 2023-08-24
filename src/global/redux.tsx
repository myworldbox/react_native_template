import * as init from '../init/export'

var redux = () => {

    var state = init.react_redux.useSelector((state: any) => state);
    var dispatcher = init.react_redux.useDispatch()

    const dispatch = (name: any, value: any) => {
        dispatcher({ type: 'any', payload: { name, value } });
    };

    return { state, dispatch }
}

export default redux