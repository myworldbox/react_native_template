import { Provider } from "react-redux";
import redux from "./src/state/kit/redux";
import { NavigationContainer } from "@react-navigation/native";
import Const from "./src/model/const";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import context from "./src/state/kit/context";
import Var from "./src/model/var";

const App = () => {

  const Stack = createNativeStackNavigator();

  Var.context.provider = context.provider();
  
  Var.redux.init = redux.init();
  Var.context.init = context.init();

  return (

    <Provider store={Var.redux.init}>
      <Var.context.provider.Provider value={Var.context.init}>

        <NavigationContainer>
          <Stack.Navigator>

            {
              Object.keys(Const.screen).map((child: any, i: any) => {

                return <Stack.Screen
                  name={child}
                  component={Const.screen[child]}
                />
              })}

          </Stack.Navigator>
        </NavigationContainer>
      </Var.context.provider.Provider>
    </Provider>
  );
};

export default App