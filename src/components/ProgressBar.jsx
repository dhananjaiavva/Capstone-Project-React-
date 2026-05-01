import React from "react";

const ProgressBar = ({ xp }) => {
  const progress = (xp % 50) * 2;

  return (
    <div className="bar">
      <div className="fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;