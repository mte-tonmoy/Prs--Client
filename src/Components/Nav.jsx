import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import useAdmin from "./../hooks/useAdmin";
import useStoreMan from "./../hooks/useStoreMan";
import useEmployee from "../hooks/useEmployee";
import useManager from "../hooks/useManager";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { AuthContext } from "./../AuthContext/AuthProvider";

import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isStoreMan] = useStoreMan();
  const [isEmployee] = useEmployee();
  const [isManager] = useManager();
  const [open, setOpen] = useState(true);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    Swal.fire("Thanks!", "Sign out successfully", "success");
  };
  const menus = [
    { name: "Home", link: "/home", icon: AiFillHome },

    isStoreMan
      ? { name: "Add Product", link: "/addProduct", icon: MdAssignmentAdd }
      : undefined,
    isStoreMan
      ? { name: "Add PR", link: "/addPr", icon: FaPenFancy }
      : undefined,
    isManager
      ? { name: "Requisition", link: "/requisition", icon: FaTableCells }
      : undefined,
    isEmployee
      ? { name: "Request", link: "/request", icon: MdOutlinePendingActions }
      : undefined,
    isEmployee
      ? { name: "My Request", link: "/myRequest", icon: AiFillDashboard }
      : undefined,
    isAdmin ? { name: "Admin", link: "/admin", icon: RiAdminFill } : undefined,
    user
      ? { name: "Account", link: "/profile", icon: AiOutlineUser }
      : undefined,

    user
      ? {
          name: "Sign Out",
          icon: FaSignOutAlt,
          onClick: () => handleLogOut(),
          link: "/",
        }
      : undefined,
  ].filter((menu) => menu !== undefined); // Filter out undefined values

  return (
    <section className=" ">
      <div
        className={`fixed z-10 bg-gray-800 min-h-screen ${
          open ? "w-56" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-between items-center">
          {open && (
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="sm:h-10 sm:w-full hidden sm:block"
                  src={logo}
                  alt="website logo"
                />
                {/* <p className="hidden sm:block mt-3 tracking-wide font-bold text-sm">
                  <br />
                  <span className="text-lime-500">Product</span>
                  <span className="text-sky-500"> Requisition</span>
                  <span className="text-pink-500"> System</span>
                </p> */}
              </div>

              <HiMenuAlt3
                size={30}
                className="cursor-pointer ms-5"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
          {!open && (
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              onClick={menu.name === "Sign Out" && menu.onClick}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className=" ml-[6vw] mr-[2vw]">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Nav;
