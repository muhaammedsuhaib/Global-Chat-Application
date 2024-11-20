import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import ChatBox from "./components/ChatBox";
import MessageInput from "./components/MessageInput";

const socket = io("http://localhost:5000");

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/messages", data);

      socket.emit("send_message", data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Live Chat</h1>
      <ChatBox messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
