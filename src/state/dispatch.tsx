const dispatch = (callback: any, value: Object) => {

    var type = Object.keys(value)[0]

    var content = Object.values(value)[0]

    Object.keys(content).map((path: any) => {
        console.log(path, "8787")
        
    content[`${type}.${path}`] = content[path]
    delete content[path]
    console.log(content)
    callback({ type: type, payload: content });
    })
};

export default dispatch