import styles from "./index.module.css";
import "tailwindcss/tailwind.css";

const ChatRoom = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-indigo-400 p-4 flex items-center justify-center">
        <h1 className="text-white text-3xl">Learnbase Chat</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-scroll">
        <div className="flex items-start justify-start mb-4 p-4 bg-white rounded-lg shadow">
          <img
            src="./logo_only.png"
            alt="Tailwind Logo"
            className="w-10 h-10 mr-4"
          />
          <div className="flex flex-col">
            <h4 className="text-gray-900">Hadi Azeez</h4>
            <p className="text-gray-600">Student at NIT</p>
          </div>
          <div style={{ marginLeft: "70px" }}>
            What is the best languages to learn for web designing
          </div>
        </div>

        <div className="flex items-start justify-end mb-4 p-4 bg-indigo-100 rounded-lg shadow">
          <img
            src="https://avatars2.githubusercontent.com/u/39191?s=460&v=4"
            alt="Profile Picture"
            className="w-10 h-10 mr-4"
          />
          <div className="flex flex-col text-right">
            <h4 className="text-gray-900">Raju Rastogi</h4>
            <p className="text-gray-600">TCS Engineer</p>
          </div>
        </div>

        <div className="flex items-start justify-start mb-4 p-4 bg-white rounded-lg shadow">
          <img
            src="./logo_only.png"
            alt="Tailwind Logo"
            className="w-10 h-10 mr-4"
          />
          <div className="flex flex-col">
            <h4 className="text-gray-900">Hadi Azeez</h4>
            <p className="text-gray-600">Student at NIT</p>
          </div>
          <div style={{ marginLeft: "70px" }}>
            Which framework do you recommend to start wth
          </div>
        </div>

        <div className="flex items-start justify-end mb-4 p-4 bg-indigo-100 rounded-lg shadow">
          <img
            src="https://avatars2.githubusercontent.com/u/39191?s=460&v=4"
            alt="Profile Picture"
            className="w-10 h-10 mr-4"
          />
          <div className="flex flex-col text-right">
            <h4 className="text-gray-900">Raju Rastogi</h4>
            <p className="text-gray-600">TCS Engineer</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
        <input
          type="text"
          className="px-3 py-2 rounded-lg shadow"
          placeholder="Message..."
        />
        <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white shadow">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
