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
    if (localStorage.getItem("useremail")) {
      router.push("/admin/home");
    }
  }, []);

  const handleLoginClick = async () => {
    if (!userDetails.email || !userDetails.password) return;
    setIsError(false);
    setIsLoading(true);
    const { data } = await supabase
      .from("members")
      .select()
      .eq("email", userDetails.email)
      .eq("password", userDetails.password);
    //handling login errors
    if (data.length < 1) {
      setIsError(true);
      setErrorMessage("Password or email is incorrect");
    } else {
      localStorage.setItem("useremail", data[0].email);
      localStorage.setItem("userid", data[0].id);
      if (data[0].role == "admin") {
        router.push("/admin/home");
      } else {
        router.push("/user/home");
      }
    }
    setIsLoading(false);
  };
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img
        src="/input.jpg"
        className="w-full md:w-2/4 md:rounded-md md:mt-6"
        alt="s"
      />
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
        onClick={handleLoginClick}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
