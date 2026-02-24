import { useState } from "react";
import { userData as initialUserData, profileData as initialProfileData } from "../data/profileData";

import ProfileHeader from "../components/Profile/ProfileHeader";
import AboutSection from "../components/Profile/AboutSection";
import SkillsSection from "../components/Profile/SkillsSection";
import EducationSection from "../components/Profile/EducationSection";
import ExperienceSection from "../components/Profile/ExperienceSection";
import ActivitySection from "../components/Profile/ActivitySection";
import EditProfileModal from "../components/Profile/EditProfileModal";

const Profile = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [editType, setEditType] = useState(null);

  const handleSave = (type, updatedData) => {
    if (type === "header") {
      setUserData(updatedData);
    } else {
      setProfileData((prev) => ({
        ...prev,
        [type]: updatedData,
      }));
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4 space-y-6">

        <ProfileHeader
          data={userData}
          onEdit={() => setEditType("header")}
        />

        <AboutSection
          data={profileData.bio}
          onEdit={() => setEditType("bio")}
        />

        <SkillsSection
          data={profileData.skills}
          onEdit={() => setEditType("skills")}
        />

        <EducationSection
          data={profileData.education}
          onEdit={() => setEditType("education")}
        />

        <ExperienceSection
          data={profileData.experience}
          onEdit={() => setEditType("experience")}
        />

        <ActivitySection />
      </div>

      {editType && (
        <EditProfileModal
          type={editType}
          userData={userData}
          profileData={profileData}
          onSave={handleSave}
          onClose={() => setEditType(null)}
        />
      )}
    </div>
  );
};

export default Profile;