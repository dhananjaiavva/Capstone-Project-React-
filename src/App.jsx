import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/Taskinput";
import TaskList from "./components/Tasklist";
import Stats from "./components/Stats";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [xp, setXp] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  // Load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

  // Apply theme
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { text, done: false }]);
  };

  const completeTask = (index) => {
    const updated = [...tasks];
    if (!updated[index].done) {
      updated[index].done = true;
      setXp((prev) => prev + 10);
    }
    setTasks(updated);
  };

  const level = Math.floor(xp / 50);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container">
        <Stats xp={xp} level={level} />
        <ProgressBar xp={xp} />
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} />
      </div>
    </div>
  );
};

export default App;
