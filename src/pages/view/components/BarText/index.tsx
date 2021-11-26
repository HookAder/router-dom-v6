import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBarArticle } from "../../../../api/index";
import "./style.scss";

const BarText: React.FC = () => {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBarArticle();
      setArticle(data.data.list);
    };
    fetchData();
  }, []);

  return (
    <div>
      {article.map((item: any, index: number) => (
        <div className="bar-text" key={index}>
          {/* <Link to={`/home/${index}`}>{item.title}</Link> */}
          <span onClick={() => navigate(`/home/${index}`, { state: item })}>
            {item.title}
          </span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BarText;
