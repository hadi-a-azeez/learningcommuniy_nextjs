import Button from "../../components/button";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import supabase from "../../supabase";
import { useEffect, useState } from "react";

const ChatRoom = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("useremail");
    router.push("/admin/login");
  };

  useEffect(async () => {
    if (localStorage.getItem("userid")) {
      setUserId(localStorage.getItem("userid"));
    }
    await subscribeMessage();

    await getMessages();
  }, []);

  const subscribeMessage = async () => {
    let response = supabase
      .from("chats")
      .on("INSERT", (payload) => {
        getMessages();
      })
      .subscribe();
  };

  const sendChatMessage = async () => {
    if (chatMessage.length > 0) {
      await supabase
        .from("chats")
        .insert([{ message: chatMessage, user: userId }]);
      setChatMessage("");
    }
  };

  const getMessages = async () => {
    const { data } = await supabase
      .from("chats")
      .select("*,user (*)")
      .order("id", { ascending: true });
    setMessages(data);
  };

  return (
    <div>
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
      <div className="flex flex-col h-screen">
        <div className="bg-indigo-400 p-4 flex items-center justify-center">
          <h1 className="text-white text-3xl">Learnbase Chat</h1>
        </div>

        <div className="flex-1 p-4 overflow-y-scroll">
          {messages.map((item) => {
            return (
              <div
                className={`flex items-start justify-start mb-4 p-4 rounded-lg shadow  ${
                  userId == item.user.id ? "bg-indigo-200" : ""
                }`}
              >
                <img
                  src="./logo_only.png"
                  alt="Tailwind Logo"
                  className="w-10 h-10 mr-4"
                />
                <div className="flex flex-col">
                  <h4 className="text-gray-900 capitalize">{item.user.name}</h4>
                  <p className="text-gray-600">{item.user.reason}</p>
                </div>
                <div style={{ marginLeft: "70px" }}>{item.message}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-100 px-4 py-3 flex items-center gap-6">
          <input
            type="text"
            className="px-3 py-2 rounded-lg shadow w-1/2 h-12"
            placeholder="Message..."
            onChange={(val) => setChatMessage(val.target.value)}
            value={chatMessage}
          />
          <button
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white shadow"
            onClick={sendChatMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
