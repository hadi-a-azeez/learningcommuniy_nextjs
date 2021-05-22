import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import Button from "../../components/button";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import { connect } from "react-redux";
//import firebase from "../../firebase";
import { useRouter } from "next/router";
import supabase from "../../supabase";

const Details = (props) => {
  const { userInfo } = props;
  const [userDetails, setUserDetails] = useState({
    phone_number: userInfo.mobileNumber,
    name: "",
    nick_name: "",
    email: "",
    type: "1",
    stream: "1",
    reason: "",
  });
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  //const db = firebase.firestore();
  const router = useRouter();
  const stream = [
    { value: 1, label: "Bsc Computer Science" },
    { value: 2, label: "Bsc Mathematics" },
    { value: 3, label: "Bsc Physics" },
    { value: 4, label: "Bsc Microbiology" },
    { value: 5, label: "BA English" },
    { value: 6, label: "BA History" },
    { value: 7, label: "BA Economics" },
    { value: 8, label: "Bcom" },
    { value: 9, label: "BBA" },
    { value: 10, label: "Polymer Chemistry" },
  ];

  const handleSubmit = async () => {
    setIsBtnLoading(true);
    /*   const user = await db.collection("members").add({
      userDetails,
    });
    console.log(user); */
    const { data, error } = await supabase
      .from("members")
      .insert([userDetails]);
    console.log(data);
    if (error) console.log(error);
    setIsBtnLoading(false);
    router.push("/join/success/member");
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="/input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Be a community member
      </h1>
      <InputField
        label="Phone Number"
        value={userInfo.mobileNumber}
        disabled={true}
      />
      <InputField
        label="My name is"
        helperText="eg: Aron Paul"
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            name: value,
          });
        }}
      />
      <InputField
        label="Call me"
        helperText="Use your first name or a nickname"
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            nick_name: value,
          });
        }}
      />
      <InputField
        label="My email address is"
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            email: value,
          });
        }}
      />
      <SelectField
        label="The best way to describe me is"
        selectOptions={[
          { value: 1, label: "A college student" },
          { value: 2, label: "A recent graduate" },
          { value: 3, label: "A teacher/professional" },
        ]}
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            type: value,
          });
        }}
      />
      {userDetails.type === "1" && (
        <SelectField
          label="My stream of study is"
          selectOptions={stream}
          onChange={(value) => {
            setUserDetails({
              ...userDetails,
              stream: value,
            });
          }}
        />
      )}
      <InputField
        type="textarea"
        label="I want to join community because"
        helperText="This answer will help us to understand you better and handle your application accordingly"
        onChange={(value) => {
          setUserDetails({
            ...userDetails,
            reason: value,
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

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

export default connect(mapStateToProps)(Details);
