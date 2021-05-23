import "tailwindcss/tailwind.css";
import Button from "../../components/button";
//import styles from "./admin.module.css";
import supabase from "../../supabase";
import { useEffect, useState } from "react";

const Home = () => {
  const [members, setMembers] = useState("-");

  useEffect(() => {
    const getData = async () => {
      const { data, error, count } = await supabase
        .from("members")
        .select("id", { count: "exact" });
      if (error) console.log(error);
      else setMembers(count);
    };
    getData();
  }, []);

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

  const ButtonCards = ({ heading, label, icon }) => {
    return (
      <div className="flex flex-row h-auto w-11/12  rounded-lg items-center border border-gray-200 p-3 mt-3">
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

  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
      {/* header starts here */}
      <div className="flex flex-row justify-between p-4 mt-3 w-full">
        <img src="/logo_b.png" className="w-auto h-10"></img>
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
          stat={members}
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
      <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-4 w-11/12 ">
        Manage
      </h1>
      {/* Card starts here */}
      <ButtonCards
        heading="Members"
        label="Manage membership forms"
        icon="/student.png"
      />
      <ButtonCards
        heading="Volunteers"
        label="Manage volunteer forms"
        icon="/love.png"
      />
      <ButtonCards
        heading="Schedules"
        label="Manage schedule forms"
        icon="/schedule.png"
      />
      {/* Card ends here */}
      <div className="mb-4"></div>
    </div>
  );
};

export default Home;
