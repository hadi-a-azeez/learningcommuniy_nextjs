import "tailwindcss/tailwind.css";
import Button from "../../components/button";
import { useRouter } from "next/router";

const Jobs = () => {
  const router = useRouter();
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
          <h2 onClick={() => router.push("/admin/volunteers")}>volunteers</h2>
        </div>
        <Button
          label="Sign Out"
          classValues="mt-1 pl-4 pr-4 pt-1 pb-1 h-8 bg-green-500 text-white rounded-lg font-semibold"
          onClick={logout}
        />
      </div>
      <div className="p-6 flex flex-row gap-6">
        <div class="bg-green-200 p-4">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-2">
                {" "}
                Front End Developer Intern
              </h3>
              <div class="mb-2">
                <span class="text-gray-600">Oct 15</span>
              </div>
              <p class="text-gray-700">
                As a Front End Developer at Google, you will be responsible for
                building and maintaining our web applications. You will be
                working with a team of engineers to create user-friendly and
                responsive interfaces.
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt="company-logo"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <span class="text-gray-700">Google</span>
                <div class="text-gray-600">India</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-red-200 p-4">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-2">Backend Developer</h3>
              <div class="mb-2">
                <span class="text-gray-600">Oct 15</span>
              </div>
              <p class="text-gray-700">
                As a Back End Developer at Amazon, you will be responsible for
                building and maintaining our web applications. You will be
                working with a team of engineers to create user-friendly and
                responsive interfaces.
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-salary-png-logo-vector-5.png"
                alt="company-logo"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <span class="text-gray-700">Amazon</span>
                <div class="text-gray-600">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-indigo-200 p-4">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-2">FullStack Developer</h3>
              <div class="mb-2">
                <span class="text-gray-600">Oct 15</span>
              </div>
              <p class="text-gray-700">
                As a Full Stack Developer at Facebook, you will be responsible
                for building and maintaining our web applications. You will be
                working with a team of engineers to create user-friendly and
                responsive interfaces.
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://www.freepnglogos.com/uploads/facebook-logo-vector-2.jpeg"
                alt="company-logo"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <span class="text-gray-700">Facebook</span>
                <div class="text-gray-600">Bangalore, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
