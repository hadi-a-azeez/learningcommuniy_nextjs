const SelectField = ({ label, selectOptions, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div className="mt-3 w-4/5">
      <label className="self-start block text-sm font-medium text-gray-600 ">
        {label}
      </label>
      <select
        className="px-3 py-2 mt-2 text-gray-700 relative bg-white  rounded-lg text-sm border border-gray-300  w-full"
        onChange={handleChange}
      >
        {selectOptions.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
