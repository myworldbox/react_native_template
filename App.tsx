import { Provider } from "react-redux";
import redux from "./src/state/kit/redux";
import Var from "./src/model/var";
import { NavigationContainer } from "@react-navigation/native";
import Const from "./src/model/const";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import context from "./src/state/kit/context";

const App = () => {

  const Stack = createNativeStackNavigator();
  Var.store = context.store();
  Var.context = context.context();

  return (

    <Provider store={redux.store()}>
      <Var.store.Provider value={Var.context}>

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
      </Var.store.Provider>
    </Provider>
  );
};

export default App