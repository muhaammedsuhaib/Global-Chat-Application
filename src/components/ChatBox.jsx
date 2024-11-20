import React from "react";

const ChatBox = ({ messages }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md h-80 overflow-y-auto">
      {messages.map((msg, idx) => (
        <div key={idx} className="mb-2">
          <strong className="text-blue-500">{msg.username}</strong>:{" "}
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
