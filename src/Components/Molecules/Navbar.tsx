import { useEffect, useState } from "react";
import Box from "../Atoms/Box";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-md" : "bg-transparent"
      } p-4`}
    >
      <Box className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          Rico Eriansyah
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#top" className={`${isScrolled ? 'text-gray-300 hover:text-blue-500' : 'text-blue-500 hover:text-gray-300'}`}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={`${isScrolled ? 'text-gray-300 hover:text-blue-500' : 'text-blue-500 hover:text-gray-300'}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={`${isScrolled ? 'text-gray-300 hover:text-blue-500' : 'text-blue-500 hover:text-gray-300'}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={`${isScrolled ? 'text-gray-300 hover:text-blue-500' : 'text-blue-500 hover:text-gray-300'}`}>
              Contact
            </a>
          </li>
        </ul>
      </Box>
    </nav>
  );
};

export default Navbar;