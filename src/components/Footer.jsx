// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-300">
      © {new Date().getFullYear()} Adarsh. All rights reserved.
    </footer>
  );
};

export default Footer;
