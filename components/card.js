const Card = ({ heading, subHeading, image }) => {
  return (
    <div
      class="flex flex-col items-center bg-yellow-100 rounded-3xl p-2 ml-3"
      style={{
        flex: "0 0 100%",
        height: "400px",
        scrollSnapAlign: "center",
      }}
    >
      <h1 className="font-sans text-lg font-semibold text-center text-gray-800 leading-tight w-11/12 mt-4">
        {heading}
      </h1>
      <h1 className="font-sans text-sm font-normal text-center text-gray-500 leading-tight mt-3 w-11/12">
        {subHeading}
      </h1>
      <img src={image} className="w-full h-auto mt-3" alt="im" />
    </div>
  );
};

export default Card;
