import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Button from "../../components/button";
import MetricsCard from "../../components/metricsCard";
import {
  getMembersCount,
  getSchedulesCount,
  getVolunteersCount,
} from "../../utilities/api";

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
    localStorage.removeItem("useremail");
    router.push("/admin/login");
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
      {/* header starts here */}
      <div className="flex flex-row justify-between p-4  w-full items-center">
        <img src="/logo_b.png" className="w-auto h-20" />
        <div className="flex flex-row align-center gap-6 font-semibold cursor-pointer">
          <h2 onClick={() => router.push("/chatroom")}>Chatroom</h2>
          <h2 onClick={() => router.push("/admin/members")}>Members</h2>
          <h2 onClick={() => router.push("/admin/schedules")}>Schedules</h2>
          <h2 onClick={() => router.push("/admin/volenteers")}>Volenteers</h2>
        </div>
        <Button
          label="Sign Out"
          classValues="mt-1 pl-4 pr-4 pt-1 pb-1 h-8 bg-green-500 text-white rounded-lg font-semibold"
          onClick={logout}
        />
      </div>

      {/* header ends here */}
      <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-6 mb-3 w-11/12 ">
        Actions
      </h1>
      <div className="flex flex-row justify-between w-11/12 mb-6 gap-6 text-center">
        <div className="h-32 w-4/5 bg-indigo-400 rounded-lg grid p-6 font-bold text-lg text-white place-items-center">
          Book A Schedule
        </div>
        <div className="h-32 w-4/5 bg-green-400 rounded-lg grid p-6 font-bold text-lg text-white place-items-center">
          Message Community Leader
        </div>
        <div
          onClick={() => router.push("/user/jobs")}
          className="h-32 w-4/5 bg-red-400 rounded-lg grid p-6 font-bold text-lg text-white place-items-center"
        >
          Internship Board
        </div>
        <div
          onClick={() => router.push("/user/notifications")}
          className="h-32 w-4/5 bg-blue-400 rounded-lg grid p-6 font-bold text-lg text-white place-items-center"
        >
          Notifications
        </div>
      </div>
      <h1 className="font-sans text-lg font-semibold text-left text-gray-500 mt-6 mb-3 w-11/12 ">
        Overview
      </h1>
      <div className="flex flex-row justify-between w-11/12">
        <MetricsCard
          heading="My Schedules"
          stat={schedulesCount}
          icon="/smile.png"
          label="Schedules Created"
        />
        <MetricsCard
          heading="Schedules Completed"
          stat={schedulesCount - 1 || 0}
          icon="/love.png"
          label="Completed Schedules"
        />
      </div>
      <div className="flex flex-row justify-between w-11/12 mt-4">
        <MetricsCard
          heading="Schedules Pending"
          stat={1}
          icon="/schedule.png"
        />
      </div>

      {/* Card ends here */}
      <div className="mb-4"></div>
    </div>
  );
};

export default Home;
