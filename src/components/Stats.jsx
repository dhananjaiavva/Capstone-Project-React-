import React from "react";

const Stats = ({ xp, level }) => {
  return (
    <div className="stats">
      <p>XP: {xp}</p>
      <p>Level: {level}</p>
      <h3>Progress</h3>
    </div>
  );
};

export default Stats;