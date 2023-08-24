import * as init from '../init/export'

type Action = { type: 'any'; payload: any };

const reducer = (state: any = init.variable, action: Action) => {

    console.log(Object.keys(action), action)
    switch (action.type) {
        case 'any': {
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            };
        }
        default:
            return state;
    }
};

export default reducer
