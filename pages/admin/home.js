import "tailwindcss/tailwind.css";
import Button from "../../components/button";

const Home = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      {/* header starts here */}
      <div className="flex flex-row justify-between p-4 mt-3 w-full">
        <img src="/home-logo.png" className="w-auto h-10"></img>
        <Button
          label="Sign Out"
          classValues="mt-1 pl-4 pr-4 pt-1 pb-1 bg-green-500 text-white rounded-lg font-semibold"
        />
      </div>
      {/* header ends here */}
      <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-6 mb-3 w-11/12 ">
        Overview
      </h1>
      <div className="flex flex-row justify-between w-11/12">
        <div
          className="h-40 bg-gray-100 shadow rounded-lg flex flex-col items-center"
          style={{ width: "48%" }}
        >
          <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-3 w-4/5 ">
            Members
          </h1>
          <h1 className="font-sans text-5xl font-bold text-left text-gray-700 mt-3 w-4/5 ">
            299
          </h1>
        </div>
        <div
          className="h-40 bg-gray-100 shadow-sm rounded-lg"
          style={{ width: "48%" }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
