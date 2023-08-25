import * as init from '../init/export'

var variable_list = () => {

    var context: any = init.context.context()
    var redux = init.redux.redux();

    return <init.react_native.View style={{ width: '100%', flexDirection: 'row' }}>

        <init.react_native.View style={{ width: '50%' }}>
            <init.react_native.Text>Context</init.react_native.Text>
            {
                context && context.state && Object.keys(context.state.default).map((key: any) => {
                    console.log(key)
                    return <init.react_native.Text>{`${key} <---> ${context.state[key]}`}</init.react_native.Text>
                })
            }
        </init.react_native.View>

        <init.react_native.View style={{ width: '50%' }}>
            <init.react_native.Text>Redux</init.react_native.Text>
            {
                redux && redux.state && Object.keys(redux.state.default).map((key: any) => {
                    console.log(key)
                    return <init.react_native.Text>{`${key} <---> ${redux.state[key]}`}</init.react_native.Text>
                })
            }
        </init.react_native.View>

    </init.react_native.View>
}

export default variable_list