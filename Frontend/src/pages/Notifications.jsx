import { useState } from "react";
import ProfileCard from "../components/Dashboard/ProfileCard";
import ManageNotificationsCard from "../components/Notifications/ManageNotificationsCard";
import NotificationItem from "../components/Notifications/NotificationItem";
import { notifications } from "../data/notifications";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter logic
  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.type === activeTab);

  return (
    <div className="bg-gray-200 min-h-screen py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 px-4">
        {/* LEFT SIDEBAR */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <ProfileCard />
          <ManageNotificationsCard />
        </div>

        {/* CENTER CONTENT */}
        <div className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* HEADER */}
            <div className="p-5 border-b border-gray-200 space-y-4">
              <h1 className="text-xl font-semibold text-gray-800">
                Notifications
              </h1>

              {/* FILTER TABS */}
              <div className="flex gap-3 flex-wrap">
                {["all", "post", "connection"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition
                      ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {tab === "all"
                      ? "All"
                      : tab === "post"
                        ? "My posts"
                        : "Connections"}
                  </button>
                ))}
              </div>
            </div>

            {/* NOTIFICATIONS LIST */}
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((n) => (
                <NotificationItem key={n.id} notification={n} />
              ))
            ) : (
              <div className="p-10 text-center text-gray-500 text-sm">
                You're all caught up 🎉
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
