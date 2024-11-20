import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (username.trim() && message.trim()) {
      onSendMessage({ username, message, timestamp: new Date() });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 w-full max-w-lg">
      {/* Username Input */}
      <input
        type="text"
        placeholder="Name"
        className="p-2 border rounded w-full sm:w-1/4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Message Input */}
      <input
        type="text"
        placeholder="Message"
        className="p-2 border rounded w-full sm:w-2/4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      {/* Send Button */}
      <button
        onClick={handleSend}
        className="w-full sm:w-1/4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
