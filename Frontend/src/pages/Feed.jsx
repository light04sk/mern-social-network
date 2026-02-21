import ProfileCard from "../components/Dashboard/ProfileCard";
import ProfileStatsCard from "../components/Dashboard/ProfileStatsCard";
import CreatePostCard from "../components/Dashboard/CreatePostCard";
import PostCard from "../components/Dashboard/PostCard";
import NewsCard from "../components/Dashboard/NewsCard";
import PromoCard from "../components/Dashboard/PromoCard";
import { useState } from "react";
import PostModal from "../components/modal/Modal";

const Feed = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 min-h-screen py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 px-4">
        {/* LEFT SIDEBAR */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <ProfileCard isSticky={true} />
          <ProfileStatsCard />
        </div>

        {/* CENTER FEED */}
        <div className="col-span-12 md:col-span-6 space-y-4">
          <CreatePostCard onOpen={() => setOpen(true)} />
          <PostCard />
          <PostCard />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <NewsCard />
          <PromoCard />
        </div>
      </div>

      <PostModal isOpen={open} setOpen={setOpen} />
    </div>
  );
};

export default Feed;
