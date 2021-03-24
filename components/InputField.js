const InputField = ({ label, helperText }) => {
  return (
    <div className="mt-3 w-4/5">
      <label className="self-start block text-sm font-medium text-gray-600 ">
        {label}
      </label>
      <input
        type="text"
        className="px-3 py-2 mt-2 text-gray-700 relative bg-white  rounded-lg text-sm border border-gray-300  w-full"
      />
      <label className="self-start block text-sm font-medium text-gray-500 mt-1">
        {helperText}
      </label>
    </div>
  );
};

export default InputField;
