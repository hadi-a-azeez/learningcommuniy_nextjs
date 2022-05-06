import styles from "./index.module.css";
import "tailwindcss/tailwind.css";
import supabase from "../../supabase";
import { useEffect, useState } from "react";

const ChatRoom = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    if (localStorage.getItem("userid")) {
      setUserId(localStorage.getItem("userid"));
    }
    subscribeMessage();

    await getMessages();
  }, []);

  const subscribeMessage = () => {
    let response = supabase
      .from("chats")
      .on("*", (payload) => {
        console.log("Change received!", payload);
      })
      .subscribe();
    console.log(
      "🚀 ~ file: index.js ~ line 24 ~ ChatRoom ~ response",
      response
    );
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

      <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
        <input
          type="text"
          className="px-3 py-2 rounded-lg shadow"
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
  );
};

export default ChatRoom;
