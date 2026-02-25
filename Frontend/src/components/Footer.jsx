// components/Footer.jsx

import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer >
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">
              Pro<span className="text-blue-600">Net</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">Connect. Share. Grow.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-500 text-lg">
            <a href="#" className="hover:text-gray-900 transition-colors">
              <FiGithub />
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          © {year} ProNet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
