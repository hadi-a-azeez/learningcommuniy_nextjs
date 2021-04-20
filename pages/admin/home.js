import "tailwindcss/tailwind.css";
import Button from "../../components/button";
import styles from "./admin.module.css";

const Home = () => {
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

  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
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
        <MetricsCard
          heading="Members"
          stat="298"
          icon="/smile.png"
          label="Total regestration"
        />
        <MetricsCard
          heading="Volunteers"
          stat="39"
          icon="/love.png"
          label="Total applicants"
        />
      </div>
      <div className="flex flex-row justify-between w-11/12 mt-4">
        <MetricsCard
          heading="Schedules"
          stat="32"
          icon="/schedule.png"
          label="Total applicants"
        />
      </div>
      <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-4 mb-3 w-11/12 ">
        Manage
      </h1>
    </div>
  );
};

export default Home;
