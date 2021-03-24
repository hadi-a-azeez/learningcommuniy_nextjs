import * as t from "../types";

const main = (
  state = {
    mobileNumber: "",
  },
  action
) => {
  switch (action.type) {
    case t.SET_MOBILE_NUMBER:
      return {
        ...state,
        mobileNumber: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
