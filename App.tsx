import * as init from './src/init/init'

const Stack = init.react_navigation_native_stack.createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App