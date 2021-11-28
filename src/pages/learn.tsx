import React, { useState, useEffect } from "react";

const Learn: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {}, []);

  const onAddCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onAddCount}>增加</button>
    </div>
  );
};

export default Learn;
