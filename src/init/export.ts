import * as react from 'react';
import * as react_native from 'react-native';
import * as react_navigation_native from '@react-navigation/native';
import * as react_navigation_native_stack from '@react-navigation/native-stack';

import * as react_redux from 'react-redux'
import * as reduxjs from '@reduxjs/toolkit'

import * as Home from '../screen/home'
import * as Info from '../screen/info'

import * as context from '../global/context/context'
import * as redux from '../global/redux/redux'

import * as dispatch from '../global/dispatch'
import * as reducer from '../global/reducer'
import * as variable from '../global/variable'

var writable: any = {
    value: undefined,
    writable: true
}

var screen: any = {
    Home: Home.default,
    Info: Info.default
}

export {
    react,
    react_native,
    react_navigation_native,
    react_navigation_native_stack,

    react_redux,
    reduxjs,

    context,
    redux,
    
    dispatch,
    reducer,
    variable,

    screen,

    writable
}