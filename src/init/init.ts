
import * as react from 'react';
import * as react_native from 'react-native';
import * as react_navigation_native from '@react-navigation/native';
import * as react_navigation_native_stack from '@react-navigation/native-stack';

import * as Home from '../screen/home'
import * as Info from '../screen/info'

var context: any = {
    value: undefined,
    writable: true
}

var screen: any = {
    Home: Home.default,
    Info: Info.default
}

var creator: any = {

    project: "init",

    path: "",

    json: {},

    email: {},

    message: "",

    temp: [],

    total_member: 0,

    firebase: {
        user: "",
        confirmation: "",
        recaptcha_verifier: "",
        phone_verified: false,
        email_verified: false,
    },

    render: false,
    phone_render: false,
    email_render: false,
    phone_counter: 0,
    email_counter: 0,

    data: []
}

var dispatcher = () => {

    var [state, dispatch] = react.useReducer((state: any) => ({ ...state }), creator)

    return { state, dispatch }
}

export {
    react,
    react_native,
    react_navigation_native,
    react_navigation_native_stack,

    context,

    screen,
    creator,
    dispatcher
}