import * as init from '../init/export'

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

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

  var context = init.context.default();
  var redux = init.redux.default();

  context.state.temp = [{
    width: 1, height: 0.2, child: <Text>1</Text>
  }, {
    width: 1, height: 0.2, child: <Text>2</Text>
  }, {
    width: 1, height: 0.2, child: <Text>3</Text>
  }, {
    width: 1, height: 0.2, child: <Text>4</Text>
  }, {
    width: 1, height: 0.2, child: <Text>5</Text>
  },]

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

    <init.react_native.Button title='path' onPress={(e) => {
      e.preventDefault()

      redux.dispatch('path', (redux.state.path ?? "") + "-")
      redux.dispatch('phone_counter', (redux.state.phone_counter ?? 0) + 1)

      context.dispatch('path', (context.state.path ?? "") + "-")
      context.dispatch('phone_counter', (context.state.phone_counter ?? 0) + 1)

    }}></init.react_native.Button>


    <Text>{"context['path']: " + context.state['path']}</Text>
    <Text>{"context['phone_counter']: " + context.state['phone_counter']}</Text>
    <Text>{"redux['path']: " + redux.state.path}</Text>
    <Text>{"redux['phone_counter']: " + redux.state.phone_counter}</Text>


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
