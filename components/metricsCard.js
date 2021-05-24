const MetricsCard = ({ icon, heading, stat, label }) => {
  return (
    <div
      className={`h-40  rounded-lg flex flex-col items-center border border-gray-200`}
      style={{ width: "48%" }}
    >
      <div className="flex flex-row w-4/5 mt-3">
        <div className="flex justify-center items-center rounded-full p-1 bg-yellow-100">
          <img src={icon} alt="s" className="w-5 h-auto" />
        </div>
        <h1 className="font-sans text-lg font-semibold text-left text-gray-500 ml-1">
          {heading}
        </h1>
      </div>
      <h1 className="font-sans text-5xl font-bold text-left text-gray-700 mt-3 w-4/5 ">
        {stat}
      </h1>
      <h1 className="font-sans text-sm font-semibold text-left text-gray-400 w-4/5 mt-3">
        {label}
      </h1>
    </div>
  );
};

export default MetricsCard;
