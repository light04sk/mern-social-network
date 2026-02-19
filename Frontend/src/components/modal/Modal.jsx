import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiImage } from "react-icons/fi";

export default function PostModal({ isOpen, setOpen }) {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">Light skmr</h2>
          </div>

          <button
            onClick={() => {
              setOpen(false);
              setSelectedImage(null);
            }}
            className="text-gray-500 cursor-pointer hover:text-gray-800 text-2xl transition"
          >
            <IoClose />
          </button>
        </div>

        {/* Input */}
        <div className="mt-8">
          <textarea
            placeholder="What do you want to talk about?"
            className="w-full h-40 resize-none outline-none text-xl text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Image Preview */}
        {selectedImage && (
          <div className="mt-4 relative w-fit">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="preview"
              className="max-h-30 rounded-lg object-contain bg-gray-100"
            />

            {/* Remove Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 hover:bg-black transition"
            >
              <IoClose />
            </button>
          </div>
        )}
        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-8">
          {/* Gallery Icon */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="text-gray-500 cursor-pointer hover:text-blue-600 text-2xl transition"
          >
            <FiImage />
          </button>

          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={(e) => {
              setSelectedImage(e.target.files[0]);
              e.target.value = null;
            }}
          />

          {/* Post Button */}
          <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-lg font-medium cursor-pointer hover:bg-blue-700 transition">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
