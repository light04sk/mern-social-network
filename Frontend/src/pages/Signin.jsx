import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Pro
            <span className="bg-blue-600 text-white px-2 ml-1 rounded-md">
              net
            </span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2">Sign in</h2>
        <p className="text-center text-gray-500 mb-6">
          Stay updated on your professional world
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-semibold transition"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          New to Pronet?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Join now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
