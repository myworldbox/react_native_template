import * as init from '../init/export'

var variable_list = () => {

    var context: any = init.context.context()
    var redux = init.redux.redux();

    return <init.react_native.View style={{ width: '100%', flexDirection: 'row' }}>
        {
            [context, redux].map((stack: any) => {

                return <init.react_native.View style={{ width: '50%' }}>
                    
                    <init.react_native.Text>{Object.keys({ stack })[0]}</init.react_native.Text>
                    {
                        stack && stack.state && Object.keys(stack.state).map((child: any) => {

                            return Object.keys(stack.state[child]).map((key: any) => {

                                return <init.react_native.Text>{`${key} <---> ${stack.state[child][key]}`}</init.react_native.Text>
                            })
                        })
                    }
                </init.react_native.View>
            })
        }

    </init.react_native.View>
}

export default variable_list