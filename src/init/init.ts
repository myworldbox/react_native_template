import * as react from 'react';
import * as react_navigation_native from '@react-navigation/native';
import * as react_navigation_native_stack from '@react-navigation/native-stack';

import * as home from '../screen/home'
import * as splash from '../screen/splash'

var screen = {
    home: home.default,
    splash: splash.default
}

var creator = {

    project: "init",

    path: "",

    json: {},

    email: {},

    message: "",

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
    react_navigation_native,
    react_navigation_native_stack,

    screen,
    creator,
    dispatcher
}