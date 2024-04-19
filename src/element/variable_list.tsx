import { View, Text } from 'react-native';
import style from '../style/style';

const DisplayNestedJSON = ({ data }: any) => {
    const renderValue = (value: any) => {
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return (
                    <View>
                        {value.map((item, index) => (
                            <View style={{ flexDirection: 'row' }} key={index}>
                                <DisplayNestedJSON data={item} />
                            </View>
                        ))}
                    </View>
                );
            } else {
                return (
                    <View>
                        {Object.keys(value).map((key) => (
                            <View style={{ flexDirection: 'row' }} key={key} >
                                <Text>{key} - </Text>
                                <DisplayNestedJSON data={value[key]} />
                            </View>
                        ))}
                    </View>
                );
            }
        } else {
            return <Text>{value}</Text>;
        }
    };

    return <View>{renderValue(data)}</View>;
};

var variable_list = (state: any) => {

    return <View style={{ width: '100%', flexDirection: 'column' }}>
        {
            Object.keys(state).map((stack: any) => {

                return <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}>

                    <Text style={[style.center]}>{stack}</Text>
                    {
                        <DisplayNestedJSON data={state[stack]} />
                    }
                </View>
            })
        }

    </View>
}

export default variable_list