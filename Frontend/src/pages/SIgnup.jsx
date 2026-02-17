import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Pro
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md">
              net
            </span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2">Join Pronet</h2>
        <p className="text-center text-gray-500 mb-6">
          Make the most of your professional life
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password (6+ characters)"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-xs text-gray-500">
            By clicking Join, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              User Agreement
            </span>
            ,{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Privacy Policy
            </span>
            , and{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Cookie Policy
            </span>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-semibold transition"
          >
            Join
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Already on Pronet?{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
