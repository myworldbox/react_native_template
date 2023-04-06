import * as react from 'react';
import * as react_navigation_native from '@react-navigation/native';
import * as react_navigation_native_stack from '@react-navigation/native-stack';

import * as home from '../screen/home'
import * as splash from '../screen/splash'

var screen = {
    home: home.default,
    splash: splash.default
}

export {
    react,
    react_navigation_native,
    react_navigation_native_stack,

    screen
}