import * as init from './src/init/init'

var UserContext;

const App = () => {

  const Stack = init.react_navigation_native_stack.createNativeStackNavigator();
  UserContext = init.react.createContext(init.dispatcher());

  return (
    <UserContext.Provider value={init.dispatcher()}>

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
    </UserContext.Provider>

  );
};

export { UserContext }

export default App