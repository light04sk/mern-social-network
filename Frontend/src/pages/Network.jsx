import { useState } from "react";
import InvitationCard from "../components/Network/InvitationCard";
import ProfileCard from "../components/Dashboard/ProfileCard";

const Network = () => {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800">My Network</h1>

        {/* Tabs */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-1">
          <div className="relative flex">
            {/* Sliding Background */}
            <div
              className={`absolute top-0 left-0 h-full w-1/3 bg-blue-600 rounded-xl transition-all duration-300 ${
                activeTab === "discover"
                  ? "translate-x-0"
                  : activeTab === "received"
                    ? "translate-x-full"
                    : "translate-x-[200%]"
              }`}
            />

            {/* Tab Buttons */}
            <button
              onClick={() => setActiveTab("discover")}
              className={`relative flex-1 py-2 text-sm cursor-pointer font-medium rounded-xl transition ${
                activeTab === "discover"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Discover People
            </button>

            <button
              onClick={() => setActiveTab("received")}
              className={`relative flex-1 py-2 text-sm cursor-pointer font-medium rounded-xl transition ${
                activeTab === "received"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Incoming Requests
            </button>

            <button
              onClick={() => setActiveTab("sent")}
              className={`relative flex-1 py-2 text-sm cursor-pointer font-medium rounded-xl transition ${
                activeTab === "sent"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Sent Requests
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-4">
          {activeTab === "discover" && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              <ProfileCard
                name="Sarah Johnson"
                role="UI/UX Designer"
                company="@Google"
                location="Bangalore, India"
                image="https://i.pravatar.cc/150?img=12"
                showConnect={true}
              />
              <ProfileCard
                name="Sarah Johnson"
                role="UI/UX Designer"
                company="@Google"
                location="Bangalore, India"
                image="https://i.pravatar.cc/150?img=12"
                showConnect={true}
              />
              <ProfileCard
                name="Sarah Johnson"
                role="UI/UX Designer"
                company="@Google"
                location="Bangalore, India"
                image="https://i.pravatar.cc/150?img=12"
                showConnect={true}
              />
              <ProfileCard
                name="Sarah Johnson"
                role="UI/UX Designer"
                company="@Google"
                location="Bangalore, India"
                image="https://i.pravatar.cc/150?img=12"
                showConnect={true}
              />
            </div>
          )}

          {activeTab === "received" && (
            <div className="space-y-4">
              <InvitationCard type="received" />
              <InvitationCard type="received" />
            </div>
          )}

          {activeTab === "sent" && (
            <div className="space-y-4">
              <InvitationCard type="sent" />
              <InvitationCard type="sent" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Network;
