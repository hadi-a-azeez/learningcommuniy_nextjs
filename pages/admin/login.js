import InputField from "../../components/InputField";
import Button from "../../components/button";
import { useState } from "react";

const Login = () => {
  const [user, userDetails] = useState({
    username: "",
    password: "",
  });
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="/input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Login to your account
      </h1>
      <InputField
        label="username"
        helperText="eg: Aron Paul"
        value={user.username}
        onChange={(value) => {
          setUserInfo({
            ...userInfo,
            username: value,
          });
        }}
      />
      <InputField
        label="Password"
        type="password"
        value={userDetails.password}
        onChange={(value) => {
          setUserInfo({
            ...userInfo,
            password: value,
          });
        }}
      />
      <Button
        label="Log in"
        classValues="mt-3 mb-5 pl-7 pr-7 pt-2 pb-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
      />
    </div>
  );
};

export default Login;
