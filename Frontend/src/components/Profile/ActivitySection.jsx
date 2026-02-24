import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import PostCard from "../Dashboard/PostCard";
import { userPosts } from "../../data/userPosts";

const ActivitySection = () => {
  const navigate = useNavigate();

  return (
    <ProfileCard title="Activity">
      {/* Horizontal Posts */}
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} compact />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-4" />

      {/* Show All Button */}
      <button
        onClick={() => navigate("/profile/ghu/posts")}
        className="
          w-full py-3
          flex items-center justify-center gap-2
          text-sm font-medium text-gray-600 cursor-pointer
          hover:bg-gray-50
          transition
        "
      >
        Show all posts
        <FiArrowRight size={16} />
      </button>
    </ProfileCard>
  );
};

export default ActivitySection;
