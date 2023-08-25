import * as init from '../init/export'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var { width, height } = init.react_native.Dimensions.get('window')

var container = (_: any) => {
  return <init.react_native.View style={{
    width: width * _.width,
    height: height * _.height,
    borderWidth: 1,
    borderColor: 'white'
  }}>
    {
      _.child
    }
  </init.react_native.View>
}

function Info({ navigation, route }: any): JSX.Element {

  var context: any = init.context.context()
  var redux = init.redux.redux();

  const isDarkMode = init.react_native.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  var Main = <init.react_native.View style={{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>

    <init.react_native.Button title='path' onPress={(e) => {
      e.preventDefault()

      redux.dispatch('path', (redux.state.path ?? "") + "-")
      redux.dispatch('phone_counter', (redux.state.phone_counter ?? 0) + 1)

      context.dispatch('path', (context.state.path ?? "") + "-")
      context.dispatch('phone_counter', (context.state.phone_counter ?? 0) + 1)

    }}></init.react_native.Button>


    <init.react_native.Text>{"context['path']: " + context.state['path']}</init.react_native.Text>
    <init.react_native.Text>{"context['phone_counter']: " + context.state['phone_counter']}</init.react_native.Text>
    <init.react_native.Text>{"redux['path']: " + redux.state.path}</init.react_native.Text>
    <init.react_native.Text>{"redux['phone_counter']: " + redux.state.phone_counter}</init.react_native.Text>


  </init.react_native.View>

  return Main
}

const styles = init.react_native.StyleSheet.create({
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
