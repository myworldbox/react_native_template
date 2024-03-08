import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import reducer from '../reducer';
import dispatch from '../dispatch';
import { useDispatch, useSelector } from 'react-redux';

const redux = {
    store() {
        return configureStore({ reducer: reducer })
    },
    creator() {

        var state = useSelector((state: any) => state);
        var dispatcher = useDispatch()

        return { state, dispatch: (value: any) => dispatch(dispatcher, value) }
    }
}


export default redux;