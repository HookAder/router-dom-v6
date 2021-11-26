import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

interface ShowProps {
  is: boolean;
  to: string;
}

interface HeaderProps {
  title?: string;
  showLeft?: ShowProps;
}

const Header: React.FC<HeaderProps> = ({ title, showLeft }) => {
  const navigate = useNavigate();
  return (
    <header className="header-top">
      {showLeft?.is && (
        <div className="left-icons" onClick={() => navigate(showLeft.to)}>
          <FontAwesomeIcon icon={faAngleLeft} color="#fff" />
        </div>
      )}
      <p>{title}</p>
    </header>
  );
};

Header.defaultProps = {
  title: "默认标题",
  showLeft: { is: false, to: "/" },
};

export default Header;
