import InputField from "../../components/InputField";
import "tailwindcss/tailwind.css";
import { connect } from "react-redux";
import { setInfo, setOtp } from "../../redux/actions/main";
import firebase from "../../firebase";
import { useState } from "react";

const Join = (props) => {
  const { userInfo, setInfo, setOtp, userOtp } = props;
  const [isOtpSended, setIsOtpSended] = useState(false);

  const onChangeHandler = (value) => {
    setInfo(value);
  };

  const onChangeHandlerOtp = (value) => {
    setOtp(value);
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          handleClick();
        },
      }
    );
  };

  const handleClickSend = (event) => {
    event.preventDefault();
    setUpRecaptcha();
    const phoneNumber = "+91" + userInfo.mobileNumber;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sended");
        setIsOtpSended(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("otp did not send");
      });
  };

  const handleClickVerify = () => {
    const code = userOtp.otp;
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("user signed in");
        alert("User signed in");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log("user did not signed in");
      });
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Be a community member
      </h1>
      {!isOtpSended && (
        <>
          <InputField
            label="Mobile Number"
            helperText="Please enter your 10 digit mobile number"
            value={userInfo.mobileNumber}
            onChange={onChangeHandler}
          />
          <div id="recaptcha-container" />
          <button
            className="mt-3 pl-7 pr-7 p-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
            onClick={handleClickSend}
          >
            Get OTP
          </button>
        </>
      )}
      {isOtpSended && (
        <>
          <InputField
            label="OTP"
            helperText={`We sent a 6 digit OTP to ${userInfo.mobileNumber}`}
            valu={userOtp.otp}
            onChange={onChangeHandlerOtp}
          />
          <div id="recaptcha-container" />
          <button
            className="mt-3 pl-7 pr-7 p-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
            onClick={handleClickVerify}
          >
            Verify
          </button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.main,
  userOtp: state.main,
});

const mapDispatchToProps = {
  setInfo: setInfo,
  setOtp: setOtp,
};
export default connect(mapStateToProps, mapDispatchToProps)(Join);
