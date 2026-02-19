import { useState } from "react";
import {
  FiMoreHorizontal,
  FiThumbsUp,
  FiMessageCircle,
  FiRepeat,
  FiTrash2,
  FiSend,
} from "react-icons/fi";

const PostCard = () => {
  const [liked, setLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const contentText =
    "This is an amazing MERN LinkedIn clone project 🚀 Built using React, Tailwind & modern UI principles. This platform includes authentication, feed, posts, comments, likes and responsive layout just like a real professional networking application.";

  const maxLength = 120;
  const isLong = contentText.length > maxLength;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Dummy User</h3>
            <p className="text-xs text-gray-500">SDE-2 Engineer @Amazon • 2h</p>
          </div>
        </div>

        <button className="text-gray-500 hover:text-gray-800 transition">
          <FiMoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pb-4">
        <p className="text-sm text-gray-800 leading-relaxed mb-3">
          {showFullText || !isLong
            ? contentText
            : contentText.slice(0, maxLength) + "..."}

          {isLong && (
            <span
              onClick={() => setShowFullText(!showFullText)}
              className="ml-2 text-blue-600 font-medium cursor-pointer hover:underline"
            >
              {showFullText ? "See less" : "See more"}
            </span>
          )}
        </p>

        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="post"
          className="w-full max-h-[500px] object-cover rounded-xl"
        />
      </div>

      {/* Likes & Comments Count */}
      <div className="px-6 py-2 text-sm text-gray-500 flex justify-between border-t border-gray-100">
        <span>1 Likes</span>
        <span>2 Comments</span>
      </div>

      {/* Action Buttons */}
      <div className="border-t border-gray-200 px-6 py-2">
        <div className="flex items-center justify-between text-sm">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-200 ${
              liked
                ? "text-blue-600 bg-blue-50 font-medium"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            <FiThumbsUp size={18} />
            Like
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            <FiMessageCircle size={18} />
            Comment
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200">
            <FiRepeat size={18} />
            Share
          </button>
        </div>
      </div>

      {/* Comment Section */}
      {showComments && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 space-y-4">
          {/* Add Comment Section */}
          <div className="flex items-center gap-3 mb-4">
            {/* Avatar */}
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-9 h-9 rounded-full object-cover"
            />

            {/* Input + Button */}
            <div className="flex items-center flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 outline-none bg-transparent text-sm"
              />

              <button className="ml-2 text-blue-600 hover:text-blue-700 transition">
                <FiSend size={18} />
              </button>
            </div>
          </div>

          {/* Static Comments */}
          <div className="space-y-3">
            {/* Comment 1 */}
            <div className="flex gap-3 group">
              <img
                src="https://i.pravatar.cc/41"
                alt="user"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex-1 bg-white p-3 rounded-xl shadow-sm relative">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-700">
                      This looks amazing 🔥 Great work!
                    </p>
                  </div>

                  <button className="opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-red-500">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-3 group">
              <img
                src="https://i.pravatar.cc/42"
                alt="user"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex-1 bg-white p-3 rounded-xl shadow-sm relative">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      Sarah Lee
                    </p>
                    <p className="text-sm text-gray-700">Very clean UI 👌</p>
                  </div>

                  <button className="opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-red-500">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
