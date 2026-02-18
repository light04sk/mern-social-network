import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 h-[calc(100vh-72px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-light text-gray-600 leading-tight mb-8">
              Welcome To Your
              <br />
              Professional Community
            </h2>

            <div className="max-w-md space-y-4">
              <Link
                to="/signup"
                className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-semibold transition"
              >
                Get Started — it's free
              </Link>

              <p className="text-sm text-gray-500">
                By clicking Get Started, you agree to our{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  User Agreement
                </span>
                ,{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                , and{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Cookie Policy
                </span>
                .
              </p>

              <p className="text-gray-700">
                Already a member?{" "}
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="Professional community networking"
                className="w-full h-[520px] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6 text-white text-3xl font-semibold">
                find your{" "}
                <span className="bg-white text-blue-700 px-2 rounded-md">
                  in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
