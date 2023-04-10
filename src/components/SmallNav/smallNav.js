import "./smallNav.scss";
import { IoHomeOutline } from "react-icons/io5";
import { BiUser, BiBookContent, BiBookBookmark } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";

const SmallNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="small-nav">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        aria-label="Home"
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About"
      >
        <BiUser />
      </a>
      {/* <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Portfolio"
      >
        <BiBookContent />
      </a> */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Experience"
      >
        <BiBookBookmark />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <FiPhoneCall />
      </a>
    </nav>
  );
};

export default SmallNav;
