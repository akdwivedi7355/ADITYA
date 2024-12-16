import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-6">
    <div className="container mx-auto px-4 text-center md:text-left">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-6 md:space-y-0">
        {/* Connect Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Let's Connect!</h2>
          <p className="text-sm text-gray-300">
            I’d love to hear from you. Feel free to reach out on any platform below.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 justify-center">
          <a
            href="https://github.com/aditya-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aditya@example.com"
            className="text-white hover:text-yellow-300 transition text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t border-gray-700 my-4"></div> */}

      {/* Bottom Section */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Aditya Kumar Dwivedi. All Rights Reserved.
        </p>
        <p>
          Made with ❤️ using <span className="text-yellow-300">React</span>.
        </p>
      </div> */}
    </div>
  </footer>
);

export default Footer;
  