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
import variable_list from '../element/variable_list';
import context from '../state/kit/context';
import redux from '../state/kit/redux';

var { width, height } = Dimensions.get('window')

const deeply = (originalObj: any, objectName: any, value: any) => {
    // Split the nested object name into an array of keys
    const keys = objectName.split('.');

    // Create a deep copy of the original object
    const updatedObj = JSON.parse(JSON.stringify(originalObj));

    // Get a reference to the nested object
    let nestedObj = updatedObj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        nestedObj = nestedObj[key];
    }

    // Update the nested object with the new value
    const lastKey = keys[keys.length - 1];
    nestedObj[lastKey] = value;

    return updatedObj;
};

function Home({ navigation }: any): JSX.Element {

    var _context: any = context.getter();
    var _redux: any = redux.getter();

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

                <Button title='context' onPress={(e) => {
                    e.preventDefault()

                    _context.dispatch({
                        account: {
                            "age": _context.state.account.age + 1,
                            "name": _context.state.account.name + "-"
                        }
                    })
                    _context.dispatch({ account: { "setting.payment.credit_card.visa.name": "context" } })

                }}></Button>

                <Button title='redux' onPress={(e) => {
                    e.preventDefault()

                    _redux.dispatch({ account: { "age": _redux.state.account.age + 1 } })
                    _redux.dispatch({ account: { "name": _redux.state.account.name + "-" } })
                    _redux.dispatch({ account: { "setting.payment.credit_card.visa.name": "redux" } })

                }}></Button>

                {
                    variable_list(_redux.state)
                }

                {
                    variable_list(_context.state)
                }

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
