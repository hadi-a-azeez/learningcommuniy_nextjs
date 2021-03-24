import InputField from "../../components/InputField";
import "tailwindcss/tailwind.css";
import { useState } from "react";

const JoinOtp = () => {
  const [otp, setOtp] = useState("");

  const onChangeHandler = (value) => {
    setOtp(value);
    console.log(value);
  };

  const handleClick = () => {
    console.log(otp);
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="/input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Be a community member
      </h1>
      <InputField
        label="Enter your OTP"
        helperText="Please enter your 6 digit OTP"
        value={otp}
        onChange={onChangeHandler}
      />
      <button
        className="mt-3 pl-7 pr-7 p-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
        onClick={handleClick}
      >
        Verify
      </button>
    </div>
  );
};

export default JoinOtp;
