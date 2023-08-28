import * as init from '../init/export'

type Action = { type: 'any'; payload: any };

const reducer = (state: any = init.variable.default, action: Action) => {

    if (Object.keys(state).includes(action.type)) {
        return {
            ...state,
            [action.type]: {
                ...state[action.type],
                ...action.payload
            }
        };
    } else {
        return state
    }
};

export default reducer
