const ButtonCards = ({ heading, label, icon, onClick }) => {
  return (
    <div
      className="flex flex-row h-auto w-11/12  rounded-lg items-center border border-gray-200 p-3 mt-3"
      onClick={onClick}
    >
      <div className="flex justify-center items-center rounded-full p-5 bg-gray-100 h-auto w-auto self-start ">
        <img src={icon} alt="" className="w-12 h-auto" />
      </div>
      <div className="flex flex-col mt-1 ml-3 h-100 justify-center">
        <h1 className="font-sans text-2xl font-semibold text-left text-gray-700  w-4/5 ">
          {heading}
        </h1>
        <h1 className="font-sans text-sm font-semibold text-left text-gray-400 mt-1">
          {label}
        </h1>
      </div>
    </div>
  );
};

export default ButtonCards;
