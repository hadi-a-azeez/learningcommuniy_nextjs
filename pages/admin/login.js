import InputField from "../../components/InputField";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { useRouter } from "next/router";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //redirect to dashboard if already logined
    if (localStorage.getItem("token") && localStorage.getItem("loginExpiry")) {
      if (localStorage.getItem("loginExpiry") > Date.now())
        //console.log(localStorage.getItem("token"));
        router.push("/admin/home");
    }
  }, []);

  const handleSignUpClick = async () => {
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signIn(userDetails);
    //if (user) console.log(user);

    //handling login errors
    if (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.message);
    }
    if (session) {
      //console.log(session);

      //if login details are correct remove existing user
      localStorage.removeItem("token");
      //adding new user
      localStorage.setItem("token", session.access_token);
      localStorage.setItem("loginExpiry", session.expires_at);
      router.push("/admin/home");
    }
    setIsLoading(false);
  };
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="/input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Login to your account
      </h1>
      {isError && (
        <h1 className="mt-4 text-xl font-normal text-red-500 font-sans">
          {errorMessage}
        </h1>
      )}
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
        label="Log in"
        classValues="mt-3 mb-5 pl-7 pr-7 pt-2 pb-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
        onClick={handleSignUpClick}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
