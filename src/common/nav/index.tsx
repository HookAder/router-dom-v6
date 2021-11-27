import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import {
  faHome,
  faClone,
  faChild,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

interface Icons {
  icon: IconDefinition;
  text: string;
  to: string;
}

interface IconsProps {
  icons: Icons;
}

//icons 数据管理
const iconList: Icons[] = [
  { icon: faHome, text: "首页", to: "/home" },
  { icon: faClone, text: "关于", to: "/about" },
  { icon: faChild, text: "我的", to: "/my" },
];

// icons子组件
const IconsItem: React.FC<IconsProps> = ({ icons }) => (
  <li>
    <p>
      <FontAwesomeIcon icon={icons.icon} color="#fff" />
    </p>
    <NavLink
      to={icons.to}
      style={({ isActive }) => (isActive ? { color: "yellow" } : {})}>
      {icons.text}
    </NavLink>
  </li>
);

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        {iconList.map((item, index) => (
          <IconsItem key={index} icons={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
