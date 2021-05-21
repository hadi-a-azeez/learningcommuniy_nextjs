import "tailwindcss/tailwind.css";
import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/button";
//import firebase from "../../firebase";
import { useRouter } from "next/router";
import supabase from "../../supabase";

const Schedule = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile_number: "",
  });
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  //const db = firebase.firestore();
  const router = useRouter();

  const handleSubmit = async () => {
    setIsBtnLoading(true);
    const { data, error } = await supabase.from("schedules").insert([userInfo]);
    console.log(data);
    if (error) console.log(error);
    setIsBtnLoading(false);
    router.push("/join/success/");
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="/input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Schedule meeting with counseler
      </h1>
      <InputField
        label="Name"
        helperText="eg: Aron Paul"
        value={userInfo.name}
        onChange={(value) => {
          setUserInfo({
            ...userInfo,
            name: value,
          });
        }}
      />
      <InputField
        label="Phone Number"
        helperText="Please enter your 10 digit mobile number"
        value={userInfo.mobileNumber}
        onChange={(value) => {
          setUserInfo({
            ...userInfo,
            mobile_number: value,
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
  );
};

export default Schedule;
