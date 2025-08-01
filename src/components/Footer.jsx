// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-300">
      <p>
        © {new Date().getFullYear()} • Created with <span className="text-red-500">❤️</span> by Adarsh • All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
