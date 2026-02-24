import { useState } from "react";
import {
  FiMoreHorizontal,
  FiThumbsUp,
  FiMessageCircle,
  FiRepeat,
  FiTrash2,
  FiSend,
} from "react-icons/fi";

const PostCard = ({ post, compact = false }) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  if (!post) return null;

  const maxLength = compact ? 90 : 180;
  const isLong = post.content.length > maxLength;

  const previewText = isLong
    ? post.content.slice(0, maxLength) + "..."
    : post.content;

  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-2xl
        transition-all duration-300
        hover:shadow-md
        ${
          compact
            ? "w-[320px] min-w-[320px] h-[380px] flex flex-col"
            : "w-full mb-5"
        }
      `}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between px-5 pt-5">
        <div className="flex items-center gap-3">
          <img
            src={post.profileImage || "https://i.pravatar.cc/100"}
            alt="user"
            className="w-11 h-11 rounded-full object-cover border border-gray-200"
          />

          <div className="leading-tight">
            <h3 className="font-semibold text-gray-900 text-sm">
              {post.author}
            </h3>
            <p className="text-xs text-gray-500">
              {post.role} • {post.time}
            </p>
          </div>
        </div>

        {!compact && (
          <button className="text-gray-500 hover:text-gray-800 transition">
            <FiMoreHorizontal size={20} />
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className={`px-5 ${compact ? "py-3 flex-1 flex flex-col" : "py-4"}`}>
        <p
          className={`text-gray-800 text-[15px] leading-relaxed ${
            compact ? "line-clamp-3" : ""
          }`}
        >
          {compact ? previewText : post.content}
        </p>

        {post.image && (
          <div
            className={`mt-4 overflow-hidden ${
              compact ? "h-[160px] rounded-xl" : "max-h-[520px] rounded-xl"
            }`}
          >
            <img
              src={post.image}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* FOOTER COUNTS */}
      <div
        className={`
          px-5 py-3 text-sm text-gray-500
          flex justify-between
          border-t border-gray-100
          ${compact ? "mt-auto" : ""}
        `}
      >
        <span>{post.likes} Likes</span>
        <span>{post.comments} Comments</span>
      </div>

      {/* ACTION BUTTONS (Hidden in compact mode) */}
      {!compact && (
        <>
          <div className="px-3 py-2 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <button
                onClick={() => setLiked(!liked)}
                className={`
                  flex-1 flex items-center justify-center gap-2
                  py-3 rounded-xl transition
                  ${
                    liked
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  }
                `}
              >
                <FiThumbsUp size={18} />
                Like
              </button>

              <button
                onClick={() => setShowComments(!showComments)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition"
              >
                <FiMessageCircle size={18} />
                Comment
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition">
                <FiRepeat size={18} />
                Share
              </button>
            </div>
          </div>

          {/* COMMENTS SECTION */}
          {showComments && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 space-y-4">
              {/* Add Comment */}
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="user"
                  className="w-9 h-9 rounded-full object-cover"
                />

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
                {["This looks amazing 🔥", "Very clean UI 👌"].map(
                  (text, i) => (
                    <div key={i} className="flex gap-3 group">
                      <img
                        src={`https://i.pravatar.cc/4${i + 1}`}
                        alt="user"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm relative">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm text-gray-800">
                              User {i + 1}
                            </p>
                            <p className="text-sm text-gray-700">{text}</p>
                          </div>

                          <button className="opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-red-500">
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostCard;
