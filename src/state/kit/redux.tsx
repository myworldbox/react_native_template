import { useDispatch, useSelector } from "react-redux";
import dispatch from "../dispatch";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";

class redux {
  static init = () => {
    return configureStore({ reducer: reducer });
  };

  static getter = () => {
    var state = useSelector((state: any) => state);
    var dispatcher = useDispatch();

    return {
      state,
      dispatch: async (value: any) =>
        await dispatch(dispatcher, value),
    };
  };
}

export default redux;
