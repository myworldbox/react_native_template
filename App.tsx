import * as init from './src/init/export'

init.writable.value = init.react.createContext(init.variable.default);
const store = init.reduxjs.configureStore({ reducer: init.reducer.default })

const App = () => {

  const Stack = init.react_navigation_native_stack.createNativeStackNavigator();

  return (
    <init.react_redux.Provider store={store}>
      <init.writable.value.Provider value={init.context.default()}>

        <init.react_navigation_native.NavigationContainer>
          <Stack.Navigator>

            {Object.keys(init.screen).map((child: any, i: any) => {

              return <Stack.Screen
                name={child}
                component={init.screen[child]}
              />
            })}

          </Stack.Navigator>
        </init.react_navigation_native.NavigationContainer>
      </init.writable.value.Provider>
    </init.react_redux.Provider>
  );
};

export default App