import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { FaRegHandPointUp } from "react-icons/fa6";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className="scroll-to-top"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <FaRegHandPointUp />
    </div>
  );
};

export default ScrollButton;
