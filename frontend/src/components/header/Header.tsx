import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import logoMin from "./../../assets/imgs/logoMin.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path
      ? "dark:text-red-600 text-red-600"
      : "dark:text-white text-black";
  };

  const isActive2 = (path: string) => {
    return location.pathname === path
      ? "dark:bg-red-600 sm:dark:bg-none bg-red-600 text-white dark:text-black"
      : "dark:text-white text-black";
  };
  
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkMode = document.cookie.includes("darkMode=true");
    return isDarkMode || false;
  });

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.cookie = "darkMode=true; path=/";
    } else {
      document.cookie = "darkMode=false; path=/";
    }
  };

  useEffect(() => {
    if (!document.cookie.includes("darkMode")) {
      document.cookie = "darkMode=true; path=/";
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="relative bg-white shadow dark:bg-[#101010]">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/pt-br" className="flex items-center justify-between">
              <img className="w-10 h-10" src={logoMin} alt="" />
              <h1 className="hidden lg:block text-black dark:text-white mt-3 ml-1 text-2xl ">
                Archei Software
              </h1>
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <div
                className={`${
                  darkMode
                    ? "h-[2rem] pr-[1rem] bg-gray-700 lg:mr-10 sm:mr-0 lg:pr-4  border-2 border-red-500 dark:border-red-500 rounded-full"
                    : " h-[2rem] pr-[1rem] bg-gray-300 lg:mr-10 sm:mr-0 lg:pr-4  border-2 border-red-500 dark:border-red-500 rounded-full"
                }`}
              >
                <button
                  className={` h-[1.75rem] bg-gray-100 dark:bg-gray-800 duration-700 px-2  rounded-3xl ${
                    darkMode ? "h-[1.75rem] translate-x-4 bg-gray-600 " : ""
                  }`}
                  onClick={handleDarkModeToggle}
                >
                  {darkMode ? (
                    <FiMoon className="text-red-500 w-4" />
                  ) : (
                    <FiSun className="text-red-500 w-4 " />
                  )}
                </button>
              </div>
              <button
                onClick={toggleMenu}
                type="button"
                className=" ml-2 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  className={isOpen ? "hidden" : "w-6 h-6"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  className={isOpen ? "w-6 h-6" : "hidden"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-[#101010] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to="/pt-br/sobre"
                className={`px-3 py-2 duration-200 hover:text-red-600 dark:hover:text-red-600 rounded-md font-semibold mr-2 ${isActive(
                  "/pt-br/sobre"
                )}`}
              >
                Sobre a Archei
              </Link>
              <Link
                to="/pt-br/blog"
                className={`px-3 py-2 duration-200 hover:text-red-600 dark:hover:text-red-600 rounded-md font-semibold mr-2 ${isActive(
                  "/pt-br/blog"
                )}`}
              >
                Nosso Blog
              </Link>
              <Link
                to="/pt-br/oque-fazemos"
                className={`px-3 py-2 duration-200 hover:text-red-600 dark:hover:text-red-600 rounded-md font-semibold ${isActive(
                  "/pt-br/oque-fazemos"
                )}`}
              >
                O que fazemos
              </Link>
              <Link
                to="/pt-br/nosso-trabalho"
                className={`px-3 py-2 duration-200 hover:text-red-600 dark:hover:text-red-600 rounded-md font-semibold mr-2 ${isActive(
                  "/pt-br/nosso-trabalho"
                )}`}
              >
                Nosso trabalho
              </Link>
              <Link
                to="/pt-br/contato"
                className={`px-3 py-2 duration-200 lg:hover:bg-red-600  sm:hover:bg-none hover:text-red-500 lg:hover:text-white lg:hover:dark:text-black dark:hover:text-red-500 font-semibold lg:border-2 sm:border-0 border-red-600 mr-4 ${isActive2(
                  "/pt-br/contato"
                )}`}
              >
                Entre em contato
              </Link>
              <span
                className="px-3 py-2 duration-200 hover:text-red-600 dark:hover:text-red-600 rounded-md font-semibold dark:text-white text-black cursor-not-allowed"
              >
                PT-BR
              </span>
              <div
                className={`${
                  darkMode
                    ? "hidden lg:block ml-10 w-[4.8rem] bg-gray-700 lg:mr-10 sm:mr-0 lg:pr-4  border-2 border-red-500 dark:border-red-500 rounded-full"
                    : "hidden lg:blockhidden lg:block ml-10 w-20 bg-gray-300 lg:mr-10 sm:mr-0 lg:pr-4  border-2 border-red-500 dark:border-red-500 rounded-full"
                }`}
              >
                <button
                  className={`bg-gray-100 dark:bg-gray-800 duration-700 px-2 py-[0.8rem] rounded-3xl ${
                    darkMode ? "translate-x-4 bg-gray-600" : ""
                  }`}
                  onClick={handleDarkModeToggle}
                >
                  {darkMode ? (
                    <FiMoon className="text-red-500 w-10" />
                  ) : (
                    <FiSun className="text-red-500 w-10" />
                  )}
                </button>
              </div>
              <Link
                to="/pt-br/login"
                className={`px-3 py-2 duration-200  lg:hover:bg-red-600  sm:hover:bg-none hover:text-red-500 lg:hover:text-white lg:hover:dark:text-black dark:hover:text-red-500 border-red-600  font-semibold lg:border-2 sm:border-0 rounded-lg mr-2 ${isActive2(
                  "/pt-br/login"
                )}`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
