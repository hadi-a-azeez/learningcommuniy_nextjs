const InputField = ({ label, helperText, value, type, onChange, disabled }) => {
  const handleChange = (event) => {
    const { value } = event.target;
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
          type="text"
          className="px-3 py-2 mt-2 text-gray-700 relative bg-white  rounded-lg text-sm border border-gray-300  w-full"
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      )}
      <label className="self-start block text-sm font-medium text-gray-400 mt-1">
        {helperText}
      </label>
    </div>
  );
};

InputField.defaultProps = {
  disabled: false,
};

export default InputField;
