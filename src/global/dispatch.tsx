const dispatch = (callback: any, name: any, value: any) => {
    callback({ type: 'any', payload: { name, value } });
};

export default dispatch