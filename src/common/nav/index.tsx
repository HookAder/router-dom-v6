import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faHome, faClone, faChild } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <p>
            <FontAwesomeIcon icon={faHome} color="#fff" />
          </p>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}>
            首页
          </NavLink>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faClone} color="#fff" />
          </p>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faChild} color="#fff" />
          </p>
          <Link to="/my">我的</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
