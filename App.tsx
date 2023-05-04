import * as init from './src/init/init'

const App = () => {

  const Stack = init.react_navigation_native_stack.createNativeStackNavigator();
  init.context.value = init.react.createContext(init.dispatcher());

  return (
    <init.context.value.Provider value={init.dispatcher()}>

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
    </init.context.value.Provider>

  );
};

export default App