import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="navbar">
      <h2>🎮 Gamified Task Manager</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;