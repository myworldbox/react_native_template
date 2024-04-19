import { Button, Dimensions, StyleSheet, View, useColorScheme } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import variable_list from '../element/variable_list';
import context from '../state/kit/context';
import redux from '../state/kit/redux';

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

  var _context: any = context.creator()
  var _redux: any = redux.creator();

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

      _redux.dispatch({ account: { age: _redux.state.account.age + 1 } })
      _redux.dispatch({ account: { name: _redux.state.account.name + "-" } })

      _context.dispatch({ account: { age: _context.state.account.age + 1 } })
      _context.dispatch({ account: { name: _context.state.account.name + "-" } })

    }}></Button>

    {
      variable_list(_context.state)
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
