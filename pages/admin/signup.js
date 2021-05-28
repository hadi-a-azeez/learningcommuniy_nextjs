import InputField from "../../components/InputField";
import Button from "../../components/button";
import { useState } from "react";
import supabase from "../../supabase";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSignUpClick = async () => {
    const { user, session, error } = await supabase.auth.signUp(userDetails);
    if (user) console.log(user);
    if (error) console.log(error);
  };
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="/input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Login to your account
      </h1>
      <InputField
        label="email"
        helperText="eg: Aron Paul"
        value={userDetails.username}
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            email: value,
          });
        }}
      />
      <InputField
        label="Password"
        type="password"
        value={userDetails.password}
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            password: value,
          });
        }}
      />
      <Button
        label="Sign up"
        classValues="mt-3 mb-5 pl-7 pr-7 pt-2 pb-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
        onClick={handleSignUpClick}
      />
    </div>
  );
};

export default Signup;
