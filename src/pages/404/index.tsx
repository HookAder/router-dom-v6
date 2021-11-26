import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotView: React.FC = () => {
  const [scope, setScope] = useState<number>(3);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      clearInterval(timer);
      if (scope <= 1) {
        clearInterval(timer);
        navigate("/", { replace: true });
      } else {
        setScope((state) => state - 1);
      }
    }, 1000);
  }, [navigate, scope]);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>没有该页面..{scope}</h2>
    </div>
  );
};

export default NotView;
