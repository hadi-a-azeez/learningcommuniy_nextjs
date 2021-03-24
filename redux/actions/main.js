import * as t from "../types";

export const setInfo = (mobileNumber) => ({
  type: t.SET_MOBILE_NUMBER,
  payload: mobileNumber,
});
