import { Button, Dimensions, StyleSheet, View, useColorScheme } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import variable_list from '../element/variable_list';

var { width, height } = Dimensions.get('window')

var container = (_: any) => {
  return <View style={{
    width: width * _.width,
    height: height * _.height,
    borderWidth: 1,
    borderColor: 'white'
  }}>
    {
      _.child
    }
  </View>
}

function Info({ navigation, route }: any): JSX.Element {

  var context: any = context.context()
  var redux: any = redux.redux();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  var Main = <View style={{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>

    <Button title='path' onPress={(e) => {
      e.preventDefault()

      redux.dispatch({ account: { age: redux.state.account.age + 1 } })
      redux.dispatch({ account: { name: redux.state.account.name + "-" } })

      context.dispatch({ account: { age: context.state.account.age + 1 } })
      context.dispatch({ account: { name: context.state.account.name + "-" } })

    }}></Button>

    {
      variable_list(context.state)
    }

  </View>

  return Main
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Info;
