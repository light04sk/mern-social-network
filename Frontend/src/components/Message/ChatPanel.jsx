import { useState, useRef } from "react";
import { FiSend, FiImage, FiX } from "react-icons/fi";

const ChatPanel = ({ selectedChat, chatList, setChatList }) => {
  const [newMessage, setNewMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const activeChat = chatList.find((chat) => chat.id === selectedChat?.id);

  const handleSend = () => {
    if (!newMessage.trim() && !selectedImage) return;

    const updated = chatList.map((chat) =>
      chat.id === activeChat.id
        ? {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id: chat.messages.length + 1,
                sender: "me",
                text: newMessage || null,
                image: selectedImage || null,
                time: "Now",
              },
            ],
            lastMessage: newMessage ? newMessage : "📷 Image",
            time: "Now",
          }
        : chat,
    );

    setChatList(updated);
    setNewMessage("");
    setSelectedImage(null);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);

    // ✅ Reset input so same file can be selected again
    e.target.value = null;
  };

  if (!activeChat) return null;

  return (
    <div className="w-[68%] flex flex-col bg-gray-100">
      {/* Header */}
      <div className="px-8 py-6 bg-white border-b border-gray-200 flex items-center gap-4">
        <img
          src={activeChat.avatar}
          alt={activeChat.name}
          className="w-11 h-11 rounded-full ring-1 ring-gray-200"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {activeChat.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{activeChat.title}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
        {activeChat.messages.map((msg) => {
          const isMe = msg.sender === "me";

          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-md px-5 py-3 text-sm leading-relaxed
                ${
                  isMe
                    ? "bg-blue-600 text-white rounded-2xl rounded-br-md shadow-sm"
                    : "bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-200 shadow-sm"
                }`}
              >
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="sent"
                    className="rounded-lg mb-2 max-h-60 object-cover"
                  />
                )}

                {msg.text && <p>{msg.text}</p>}

                <span className="block text-xs mt-2 opacity-60">
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Section */}
      <div className="px-8 py-5 bg-white border-t border-gray-200">
        {/* Image Preview */}
        {selectedImage && (
          <div className="mb-3 relative inline-block">
            <img
              src={selectedImage}
              alt="preview"
              className="h-20 rounded-lg object-cover"
            />
            <button
              onClick={() => {
                setSelectedImage(null);
                if (fileInputRef.current) {
                  fileInputRef.current.value = null;
                }
              }}
              className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 text-xs hover:bg-red-600 transition"
            >
              <FiX size={14} />
            </button>
          </div>
        )}

        <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
          {/* Image Button */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="text-gray-500 hover:text-blue-600 transition mr-3"
          >
            <FiImage size={20} />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageSelect}
          />

          {/* Text Input */}
          <input
            type="text"
            placeholder="Write a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className=" bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 active:scale-95 transition flex items-center justify-center"
          >
            <FiSend size={18} className="rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
