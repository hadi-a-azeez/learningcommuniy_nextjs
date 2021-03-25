import * as t from "../types";

const main = (
  state = {
    mobileNumber: "",
    otp: "",
  },
  action
) => {
  switch (action.type) {
    case t.SET_MOBILE_NUMBER:
      return {
        ...state,
        mobileNumber: action.payload,
      };
    case t.SET_OTP:
      return {
        ...state,
        otp: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
