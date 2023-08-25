const dispatch = (callback: any, value: Object) => {
    callback({ type: Object.keys(value)[0], payload: Object.values(value)[0] });
};

export default dispatch