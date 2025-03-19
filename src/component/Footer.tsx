import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "orange",
        display: "flex",
        minHeight: "70px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <div className="footer-icon">
        <FaCheck />
      </div>
      <div className="footer-icon">
        <CiCalendar style={{ fontSize: "40px" }} />
      </div>
      <div className="footer-icon">
        <FaPlus />
      </div>
    </div>
  );
};

export default Footer;
