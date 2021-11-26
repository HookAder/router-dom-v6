import React from "react";
import "./style.scss";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header-top">
      <p>{title}</p>
    </header>
  );
};

Header.defaultProps = {
  title: "默认标题",
};

export default Header;
