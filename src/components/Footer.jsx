import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a team of passionate developers providing solutions to improve your web experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="text-gray-400">Email: support@example.com</li>
              <li className="text-gray-400">Phone: +1 123 456 7890</li>
              <li className="text-gray-400">Address: 123 Main St, City, Country</li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.348 8.348 0 0022 5.92a8.182 8.182 0 01-2.357.637 4.07 4.07 0 001.804-2.244 8.177 8.177 0 01-2.605.988 4.104 4.104 0 00-6.993 3.741 11.62 11.62 0 01-8.457-4.281 4.022 4.022 0 001.27 5.47 4.074 4.074 0 01-1.855-.505v.051c0 2.005 1.443 3.688 3.355 4.07a4.086 4.086 0 01-1.849.07 4.103 4.103 0 003.834 2.851A8.233 8.233 0 012 18.405a11.616 11.616 0 006.29 1.814" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.323C.592 0 0 .592 0 1.324v21.352C0 23.407.592 24 1.324 24h11.49v-9.294H9.94v-3.622h2.872V8.444c0-2.842 1.738-4.389 4.281-4.389 1.218 0 2.265.092 2.572.132v2.98h-1.765c-1.385 0-1.655.659-1.655 1.624v2.13h3.309l-.432 3.622h-2.877V24h5.637C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.408 0 22.676 0" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 2.67 4.33 2 3.5 2S2 2.67 2 3.5 2.67 5 3.5 5s1.48-.67 1.48-1.5zM4.75 8H2.25v14.5h2.5V8zm5.18 0H7.44v14.5h2.5v-7.5c0-2.54 3.14-2.75 3.14 0v7.5h2.5v-9.04c0-5.37-6.14-5.17-7.14-2.53V8h-.01z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
