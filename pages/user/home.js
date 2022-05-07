import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Button from "../../components/button";
import MetricsCard from "../../components/metricsCard";
import {
  getMembersCount,
  getSchedulesCountSingle,
  getVolunteersCount,
} from "../../utilities/api";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import supabase from "../../supabase";

const Home = () => {
  const [membersCount, setMembersCount] = useState("-");
  const [volunteerCount, setVolunteerCount] = useState("-");
  const [schedulesCount, setSchedulesCount] = useState("-");
  const [userId, setUserId] = useState("");
  const [scheduleTitle, setScheduleTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      if (localStorage.getItem("userid")) {
        setUserId(localStorage.getItem("userid"));
      }
      const membersCountResponse = await getMembersCount();
      const volunteersCountResponse = await getVolunteersCount();
      const schedulesCountResponse = await getSchedulesCountSingle();

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

  const addSchedule = async () => {
    let response = await supabase.from("schedules").insert({
      name: scheduleTitle,
      booked_by: userId,
      mobile_number: 9496742190,
    });
    console.log(
      "🚀 ~ file: home.js ~ line 48 ~ addSchedule ~ response",
      response
    );
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
      {/* header starts here */}
      <div className="flex flex-row justify-between p-4  w-full items-center">
        <img src="/logo_b.png" className="w-auto h-20" />
        <div className="flex flex-row align-center gap-6 font-semibold cursor-pointer">
          <h2 onClick={() => router.push("/chatroom")}>Chatroom</h2>
          <h2 onClick={() => router.push("/admin/members")}>Members</h2>
          <h2 onClick={() => router.push("/user/schedules")}>Schedules</h2>
          <h2 onClick={() => router.push("/admin/volunteers")}>volunteers</h2>
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
        <Popup
          contentStyle={{ borderRadius: "10px" }}
          trigger={
            <div className="h-32 w-4/5 bg-indigo-400 rounded-lg grid p-6 font-bold text-lg text-white place-items-center">
              Book A Schedule
            </div>
          }
          modal
        >
          {(close) => (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-12">Book a Schedule</h1>

              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <label className="text-gray-500">
                    <span className="text-xl mb-3">Schedule Volenteer</span>
                    <select
                      onChange={(e) => setScheduleTitle(e.target.value)}
                      className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option value="john">John</option>
                      <option value="fathima">Fathima</option>
                      <option value="hadi">Hadi</option>
                    </select>
                  </label>
                </div>

                <div className="col-span-12">
                  <label className="text-gray-500">
                    <span className="text-xl">Schedule Date</span>
                    <input
                      type="date"
                      className="border border-gray-500 p-2 rounded-lg ml-3"
                      placeholder="Schedule Time"
                    />
                  </label>
                </div>
                <button
                  onClick={async () => {
                    await addSchedule();
                    close();
                  }}
                  className="bg-green-500 text-white rounded-lg font-semibold w-64 h-12"
                >
                  Book Schedule
                </button>
              </div>
            </div>
          )}
        </Popup>

        <div
          onClick={() => router.push("/user/schedules")}
          className="h-32 w-4/5 bg-green-400 rounded-lg grid p-6 font-bold text-lg text-white place-items-center"
        >
          My Schedules
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
