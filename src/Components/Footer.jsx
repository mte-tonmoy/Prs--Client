import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-2 bg-white text-gray-500 absolute bottom-0 font-bold">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by ACI Godrej Agrovet Pvt.
            Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
