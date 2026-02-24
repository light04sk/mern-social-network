const NotificationItem = ({ notification }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
      {/* Avatar */}
      <img
        src={notification.avatar}
        alt="user"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Text Section */}
      <div className="flex-1">
        <p className="text-sm text-gray-800 leading-relaxed">
          <span className="font-semibold">{notification.user}</span>{" "}
          {notification.text}
        </p>

        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
      </div>

      {/* Blue unread dot */}
      {!notification.read && (
        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2"></div>
      )}
    </div>
  );
};

export default NotificationItem;
