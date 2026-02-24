import ProfileCard from "./ProfileCard";

const AboutSection = ({ data, onEdit }) => {
  return (
    <ProfileCard title="About" onEdit={onEdit}>
      <p className="text-gray-800 text-[15px] leading-7">{data}</p>
    </ProfileCard>
  );
};

export default AboutSection;
