const dispatch = (callback: any, value: Object) => {

    var type = `${Object.keys(value)}`

    var content = Object.values(value)[0]

    Object.keys(content).map((path: any) => {
        
    content[`${type}.${path}`] = content[path]
    delete content[path]
    callback({ type: type, payload: content });
    })
};

export default dispatch