import variable from "./variable";

type Action = { type: any; payload: any };

const reducer = (state: any = variable, action: Action) => {

    const newState = JSON.parse(JSON.stringify(state))
  
    const updateStateRecursively = (currentState: any, keys: string[], value: any) => {
      const [currentKey, ...remainingKeys] = keys;
  
      if (remainingKeys.length === 0) {
        currentState[currentKey] = value;
      } else {
        if (!currentState[currentKey]) {
          currentState[currentKey] = {};
        }
        updateStateRecursively(currentState[currentKey], remainingKeys, value);
      }
    };
    
    for (const key in action.payload) {
      if (Object.prototype.hasOwnProperty.call(action.payload, key)) {
        const value = action.payload[key];
        const nestedKeys = key.split('.');
  
        updateStateRecursively(newState, nestedKeys, value);
      }
    }
  
    return newState;
  };

export default reducer
