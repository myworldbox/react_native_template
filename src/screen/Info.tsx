import * as init from '../init/init'

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
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

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Info({ navigation, route }: any): JSX.Element {

  var inject = init.dispatcher();
  var context: any = init.react.useContext(init.context.value)

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  init.react.useEffect(() => {
    console.log("route ---> ", route["params"], " \n\ninject ---> ", context.state['path'])
  }, [inject]);

  var Main = <SafeAreaView style={backgroundStyle}>


    <init.react_native.Button title='path' onPress={(e) => {
      e.preventDefault()

      context.state['path'] += "-";
      inject.dispatch()

    }}></init.react_native.Button>

    <init.react_native.Button title='path' onPress={(e) => {
      e.preventDefault()

      context.state['path'] += "-";

    }}></init.react_native.Button>

    <Text>{"context.state['path']: " + context.state['path']} </Text>

    <Section title="Step One">
    </Section>
  </SafeAreaView>


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
