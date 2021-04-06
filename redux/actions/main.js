import * as t from "../types";

export const setInfo = (mobileNumber) => ({
  type: t.SET_MOBILE_NUMBER,
  payload: mobileNumber,
});

export const setOtp = (otp) => ({
  type: t.SET_OTP,
  payload: otp,
});

/* export const setApplicantData = (
  name,
  nickName,
  email,
  type,
  stream,
  reason
) => ({
  type: t.SET_APPLICANT_DATA,
  payload: {
    name,
    nickName,
    email,
    type,
    stream,
    reason,
  },
}); */

/* export const setName = (name) => ({
  type: t.SET_NAME,
  payload: name
});

export const setNickName = (nickName) => ({
  type: t.SET_NICK_NAME,
  payload: nickName
});

export const setEmail = (email) => ({
  type: t.SET_EMAIL,
  payload: email
});

export const setType = (type) => ({
  type: t.SET_APPLICANT_TYPE,
  payload: type
});

export const setStream = (stream) => ({
  type: t.SET_APPLICANT_STREAM,
  payload: stream
}); */
