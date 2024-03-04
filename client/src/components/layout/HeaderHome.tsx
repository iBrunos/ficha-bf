"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/yokai_icon.png"
import { useState } from "react";
import { VscTriangleDown } from 'react-icons/vsc'
import { LuSwords } from "react-icons/lu";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiMagicSwirl } from "react-icons/gi";
import { ImBookmark } from "react-icons/im";
import { useRouter } from "next/navigation";
import { IoMdPricetag } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoExit } from "react-icons/io5";

const HeaderHome: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const navigateToLogout = () => {
    localStorage.removeItem("permission");
    localStorage.removeItem("sessionInfo");
    localStorage.removeItem("nameEmployee");

    router.push("/auth");
  };
  return (
    <>
      <header className="fixed top-0 bg-white shadow dark:bg-gray-800 w-full z-10">
        <nav className="px-6 py-4">
          <div className="lg:flex lg:items-center lg:justify-between ">
            <div className="flex items-center justify-between">
              <Image
                width={1000}
                height={1000}
                className="w-auto h-10 sm:h-10"
                src={logo}
                alt=""
              />
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  onClick={toggleMenu}
                >
                  {menuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                  )}
                </button>
              </div>
            </div>
            <div
              className={`absolute inset-x-0 z-20 w-screen h-screen md:h-auto lg:h-auto px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center sm:w-full sm:transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">

                <Link
                  className={`px-3 py-2 mx-3 mt-2 flex gap-2 items-center  transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 dark:hover-bg-gray-700 ${pathname === "/auth/admin" ? "text-green-500" : ""
                    } `}
                  href="/spells"
                >
                  <LuSwords />Itens
                </Link>

                <Link
                  className={`px-3 py-2 mx-3 mt-2 flex gap-2 items-center transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 dark:hover-bg-gray-700 ${pathname === "/auth/admin/clients" ? "text-green-500" : ""
                    } `}
                  href="/spells"
                >
                  <FaWandMagicSparkles />Magias
                </Link>

                <Link
                  className={`px-3 py-2 mx-3 mt-2 flex gap-2 items-center transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 dark:hover-bg-gray-700 ${pathname === "/auth/admin/settings" ? "text-green-500" : ""
                    } `}
                  href="/spells"
                >
                  <GiMagicSwirl />Tokens de Técnica
                </Link>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderHome;