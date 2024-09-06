const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto text-center">
      <p className="text-sm">&copy; 2024 Gourmet Masterpieces. All rights reserved.</p>
      <ul className="flex justify-center space-x-6 mt-4">
        <li>
          <a href="/" className="text-white hover:text-gray-400 transition">Home</a>
        </li>
        <li>
          <a href="/menu" className="text-white hover:text-gray-400 transition">Menu</a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-400 transition">Contact</a>
        </li>
        <li>
          <a href="/blog" className="text-white hover:text-gray-400 transition">Blog</a>
        </li>
      </ul>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="#" className="text-white hover:text-gray-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            {/* Icon mạng xã hội */}
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
