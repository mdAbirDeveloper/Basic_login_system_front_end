import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Code Shine Technology</h2>
            <p className="mt-2 text-gray-400">Building innovative solutions for your business needs.</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-gray-200">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-200">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-200">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">UI/UX Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-200">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center md:text-left">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Code Shine Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
