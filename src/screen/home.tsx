import * as init from '../init/init'

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Dimensions
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ScrollAnimation from '../animation/ScrollAnimation';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

var { width, height } = Dimensions.get('window')

function Home({ navigation }: any): JSX.Element {

    var inject = init.dispatcher();
    var context: any = init.react.useContext(init.context.value)

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />

                <Button title='navigation' onPress={(e) => {
                    e.preventDefault()

                    navigation.navigate('Info', {});

                }}></Button>

                <Button title='no navigation' onPress={(e) => {
                    e.preventDefault()

                    context.state['path'] += "-";
                    inject.dispatch()

                }}></Button>

                <Text>{"context.state['path']: " + context.state['path']}</Text>

                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
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

export default Home;
