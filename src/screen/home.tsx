import * as init from '../init/export'

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

var { width, height } = Dimensions.get('window')

function Home({ navigation }: any): JSX.Element {

    var context: any = init.context.context()
    var redux = init.redux.redux();

    init.react.useEffect(() => {
        console.log("redux ---> ", redux.state.path, "\ncontext ---> ", context.state.path)
    }, [redux.state, context.state])

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

                    redux.dispatch('path', (redux.state.path ?? "") + "-")
                    redux.dispatch('phone_counter', (redux.state.phone_counter ?? 0) + 1)

                    context.dispatch('path', (context.state.path ?? "") + "-")
                    context.dispatch('phone_counter', (context.state.phone_counter ?? 0) + 1)

                }}></Button>

                <Text>{"context['path']: " + context.state['path']}</Text>
                <Text>{"context['phone_counter']: " + context.state['phone_counter']}</Text>
                <Text>{"redux['path']: " + redux.state.path}</Text>
                <Text>{"redux['phone_counter']: " + redux.state.phone_counter}</Text>

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
