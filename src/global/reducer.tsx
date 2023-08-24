import * as init from '../init/export'

type Action = { type: 'any'; payload: any };

const reducer = (state: any = init.variable, action: Action) => {

    switch (action.type) {
        case 'any': {
            const { name, value } = action.payload;

            console.log("reducer", name, value)
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
