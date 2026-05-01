import React from "react";

const TaskList = ({ tasks, completeTask }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div key={index} className={`task ${task.done ? "done" : ""}`}>
          <span>{task.text}</span>
          {!task.done && (
            <button onClick={() => completeTask(index)}>Done</button>
          )}
        </div>
      ))}
    </>
  );
};

export default TaskList;