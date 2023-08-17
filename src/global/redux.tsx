import * as init from '../init/init'

type Action = { type: 'any'; payload: any };

const reducer = (state: any = init.creator.creator, action: Action): any => {
    switch (action.type) {
        case 'any':
            return {
                ...state,
                order: {
                    ...state.order,
                    ...action.payload,
                },
            }
        default:
            return state
    }
};

const store = init.reduxjs.configureStore({reducer})

var redux = () => {
    
    var state = init.react_redux.useSelector((State: any) => State);
    var dispatch = init.react_redux.useDispatch()

    return { state, dispatch }
}

export {
    redux
};