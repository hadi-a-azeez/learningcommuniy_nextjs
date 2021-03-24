import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import "tailwindcss/tailwind.css";

const Join = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Be a community member
      </h1>
      <InputField label="My name is" helperText="eg: Aron Paul" />
      <InputField
        label="Call me"
        helperText="Use your first name or a nickname"
      />
      <InputField label="My email address is" />
      {/*  <SelectField
        name="occ"
        selectOptions={[
          "A college student",
          "A recent graduate",
          "A teacher/professional",
        ]}
      /> */}
    </div>
  );
};

export default Join;
