const dispatch = (callback: any, value: Object) => {

    var type = Object.keys(value)[0]
    var content = Object.values(value)[0]
    var content_path = Object.keys(content)[0]

    content[`${type}.${content_path}`] = content[content_path]
    delete content[content_path]
    
    callback({ type: type, payload: content });
};

export default dispatch