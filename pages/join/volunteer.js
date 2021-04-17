import "tailwindcss/tailwind.css";
import InputField from "../../components/InputField";
import Button from "../../components/button";
import { useState } from "react";
import firebase from "../../firebase";

const Volunteer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobileNumber: "",
  });
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const db = firebase.firestore();

  const handleSubmit = async () => {
    setIsBtnLoading(true);
    const user = await db.collection("volunteers").add({
      userInfo,
    });
    console.log(user);
    setIsBtnLoading(false);
  };
  return (
    <>
      <div className="md:container md:mx-auto flex flex-col items-center">
        <img src="/input.jpg" className="w-full" alt="s" />
        <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
          Be a community Volunteer
        </h1>
        <InputField
          label="My name is"
          helperText="eg: Aron Paul"
          onChange={(value) => {
            setUserInfo({
              ...userInfo,
              name: value,
            });
          }}
        />
        <InputField
          label="Mobile Number"
          helperText="Please enter your 10 digit mobile number"
          onChange={(value) => {
            setUserInfo({
              ...userInfo,
              mobileNumber: value,
            });
          }}
        />
        <Button
          label="Submit"
          classValues="mt-3 mb-5 pl-7 pr-7 pt-2 pb-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
          isLoading={isBtnLoading}
          loadingText="Submiting"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default Volunteer;
