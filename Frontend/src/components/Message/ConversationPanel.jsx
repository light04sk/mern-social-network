const ConversationPanel = ({ chatList, selectedChat, setSelectedChat }) => {
  return (
    <div className="w-[32%] min-w-[320px] bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="px-7 py-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
          Messages
        </h2>
        <p className="text-sm text-gray-500 mt-1">Professional conversations</p>
      </div>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto">
        {chatList.map((chat) => {
          const isActive = selectedChat?.id === chat.id;

          return (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`group relative px-7 py-4 cursor-pointer transition-all duration-200
              ${isActive ? "bg-blue-50" : "hover:bg-gray-50"}`}
            >
              {/* Active Left Indicator */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r-md" />
              )}

              <div className="flex gap-4 items-center">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-11 h-11 rounded-full object-cover ring-1 ring-gray-200"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h4
                      className={`text-sm font-medium truncate ${
                        isActive ? "text-gray-900" : "text-gray-800"
                      }`}
                    >
                      {chat.name}
                    </h4>

                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>

                  <p className="text-sm text-gray-500 truncate mt-1">
                    {chat.lastMessage}
                  </p>
                </div>

                {chat.unread > 0 && (
                  <div className="bg-blue-600 text-white text-xs font-semibold min-w-[22px] h-[22px] flex items-center justify-center rounded-full">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationPanel;
