import "tailwindcss/tailwind.css";
import Button from "../../components/button";
//import styles from "./admin.module.css";
import { useEffect, useState } from "react";
import {
  getMembersCount,
  getVolunteersCount,
  getSchedulesCount,
} from "../../utilities/api";
import MetricsCard from "../../components/metricsCard";
import ButtonCards from "../../components/buttonCards";
import { useRouter } from "next/router";

const Home = () => {
  const [membersCount, setMembersCount] = useState("-");
  const [volunteerCount, setVolunteerCount] = useState("-");
  const [schedulesCount, setSchedulesCount] = useState("-");
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const membersCountResponse = await getMembersCount();
      const volunteersCountResponse = await getVolunteersCount();
      const schedulesCountResponse = await getSchedulesCount();

      setMembersCount(membersCountResponse);
      setVolunteerCount(volunteersCountResponse);
      setSchedulesCount(schedulesCountResponse);
    };
    getData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginExpiry");
    router.push("/admin/login");
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
      {/* header starts here */}
      <div className="flex flex-row justify-between p-4 mt-3 w-full">
        <img src="/logo_b.png" className="w-auto h-10"></img>
        <Button
          label="Sign Out"
          classValues="mt-1 pl-4 pr-4 pt-1 pb-1 bg-green-500 text-white rounded-lg font-semibold"
          onClick={logout}
        />
      </div>
      {/* header ends here */}
      <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-6 mb-3 w-11/12 ">
        Overview
      </h1>
      <div className="flex flex-row justify-between w-11/12">
        <MetricsCard
          heading="Members"
          stat={membersCount}
          icon="/smile.png"
          label="Total regestration"
        />
        <MetricsCard
          heading="Volunteers"
          stat={volunteerCount}
          icon="/love.png"
          label="Total applicants"
        />
      </div>
      <div className="flex flex-row justify-between w-11/12 mt-4">
        <MetricsCard
          heading="Schedules"
          stat={schedulesCount}
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
