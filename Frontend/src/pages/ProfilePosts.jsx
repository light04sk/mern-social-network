import ProfileCard from "../components/Dashboard/ProfileCard";
import PostCard from "../components/Dashboard/PostCard";
import NewsCard from "../components/Dashboard/NewsCard";
import PromoCard from "../components/Dashboard/PromoCard";
import { userPosts } from "../data/userPosts";

const ProfilePosts = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-4">
        {/* LEFT SIDE — PROFILE ONLY */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <ProfileCard isSticky />
        </div>

        {/* CENTER — ONLY USER POSTS */}
        <div className="col-span-12 md:col-span-6 space-y-4">
          <div className="bg-white rounded-xl px-5 py-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Posts</h2>
            <p className="text-sm text-gray-500">
              Your activity on the platform
            </p>
          </div>

          {userPosts.length > 0 ? (
            userPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="bg-white rounded-xl p-6 text-center text-gray-500">
              No posts yet
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <NewsCard />
          <PromoCard />
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
