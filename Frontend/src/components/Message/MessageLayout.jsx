import { useState } from "react";
import { conversations } from "../../data/messageData";
import ConversationPanel from "./ConversationPanel";
import ChatPanel from "./ChatPanel";

const MessageLayout = () => {
  const [chatList, setChatList] = useState(conversations);
  const [selectedChat, setSelectedChat] = useState(conversations[0]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl h-[85vh] flex bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <ConversationPanel
          chatList={chatList}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />

        <ChatPanel
          selectedChat={selectedChat}
          chatList={chatList}
          setChatList={setChatList}
        />
      </div>
    </div>
  );
};

export default MessageLayout;
