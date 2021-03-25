import * as t from "../types";

export const setInfo = (mobileNumber) => ({
  type: t.SET_MOBILE_NUMBER,
  payload: mobileNumber,
});

export const setOtp = (otp) => ({
  type: t.SET_OTP,
  payload: otp,
});
