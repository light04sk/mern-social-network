import ProfileCard from "./ProfileCard";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = ({ data, onEdit }) => {
  return (
    <ProfileCard title="Experience" onEdit={onEdit}>
      <div className="space-y-8">
        {data.map((exp, index) => (
          <div key={index} className="flex gap-5">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
              <FaBriefcase className="text-blue-600" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium text-gray-700">{exp.company}</span>{" "}
                • {exp.duration}
              </p>

              <p className="text-xs text-gray-400 mt-1">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
};

export default ExperienceSection;
