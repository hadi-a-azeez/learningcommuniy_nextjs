import { useState } from "react";
import { validateInput } from "../utilities/validators";

const InputField = ({
  label,
  helperText,
  value,
  type,
  onChange,
  disabled,
  validators,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div className="mt-3 w-4/5">
      <label className="self-start block text-sm font-medium text-gray-600 ">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="px-3 py-2 mt-2 text-gray-700 relative bg-white  rounded-lg text-sm border border-gray-300  w-full"
          rows="4"
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type === "password" ? "password" : "text"}
          className="px-3 py-2 mt-2 text-gray-700 relative bg-white  rounded-lg text-sm border border-gray-300  w-full"
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      )}
      <label className="self-start block text-sm font-medium text-gray-400 mt-1">
        {helperText}
      </label>
      {error && (
        <label className="self-start block text-sm font-medium text-red-400 mt-1">
          {error.message}
        </label>
      )}
    </div>
  );
};

InputField.defaultProps = {
  disabled: false,
  validators: [],
};

export default InputField;
