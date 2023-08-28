import * as init from '../init/export'

const DisplayNestedJSON = ({ data }: any) => {
    const renderValue = (value: any) => {
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return (
                    <init.react_native.View>
                        {value.map((item, index) => (
                            <init.react_native.View style={{ flexDirection: 'row' }} key={index}>
                                <DisplayNestedJSON data={item} />
                            </init.react_native.View>
                        ))}
                    </init.react_native.View>
                );
            } else {
                return (
                    <init.react_native.View>
                        {Object.keys(value).map((key) => (
                            <init.react_native.View style={{ flexDirection: 'row' }} key={key} >
                                <init.react_native.Text>{key} - </init.react_native.Text>
                                <DisplayNestedJSON data={value[key]} />
                            </init.react_native.View>
                        ))}
                    </init.react_native.View>
                );
            }
        } else {
            return <init.react_native.Text>{value}</init.react_native.Text>;
        }
    };

    return <init.react_native.View>{renderValue(data)}</init.react_native.View>;
};

var variable_list = () => {

    var state: any = {
        context: init.context.context(),
        redux: init.redux.redux()
    }

    return <init.react_native.View style={{ width: '100%', flexDirection: 'column' }}>
        {
            Object.keys(state).map((stack: any) => {

                return <init.react_native.View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}>

                    <init.react_native.Text>{stack}</init.react_native.Text>
                    {
                        state[stack].state &&
                        <DisplayNestedJSON data={state[stack].state} />
                    }
                </init.react_native.View>
            })
        }

    </init.react_native.View>
}

export default variable_list