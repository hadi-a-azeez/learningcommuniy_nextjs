import "tailwindcss/tailwind.css";
import Button from "../../components/button";
import { useRouter } from "next/router";

const Notifications = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("useremail");
    router.push("/admin/login");
  };
  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
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
      <div className="flex flex-col gap-3">
        <div class="flex items-center justify-center bg-white p-8 shadow rounded">
          <div class="flex flex-col md:flex-row">
            <div class="flex-shrink-0">
              <img
                class="h-16 w-16 md:h-24 md:w-24 rounded-full"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt=""
              />
            </div>
            <div class="md:ml-4 mt-4 md:mt-0">
              <div class="text-sm leading-5 font-medium text-gray-900">
                Last Day
              </div>
              <div class="text-sm leading-5 text-gray-500">
                Today is the last day to sign up for the campus-wide food drive!
                Sign up to volunteer here.
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center bg-white p-8 shadow rounded">
          <div class="flex flex-col md:flex-row">
            <div class="flex-shrink-0">
              <img
                class="h-16 w-16 md:h-24 md:w-24 rounded-full"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt=""
              />
            </div>
            <div class="md:ml-4 mt-4 md:mt-0">
              <div class="text-sm leading-5 font-medium text-gray-900">
                Study Group Meeting
              </div>
              <div class="text-sm leading-5 text-gray-500">
                Hey everyone! Just a reminder that there is a study group
                meeting today at 4pm in the library.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
