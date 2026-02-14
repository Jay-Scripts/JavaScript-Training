import React, { useState } from "react";

const ArrayUpdate = () => {
  const [task, setTask] = useState(["Do Cleaning"]);

  const handleAddTask = (value) => {
    // add task Function

    let newTask = document.getElementById("task").value; // Grab the data inputed in the fields
    setTask((t) => [...t, newTask]); // Pass the data to the array
    newTask = document.getElementById("task").value = ""; // return the value to no value to accept a new input
  };

  const handleRemoveTask = (index) => {
    // removes the task when clicked
    setTask(task.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>List of Task</h1>

      <ul>
        {task.map((task, index) => (
          <li
            key={index}
            className="cursor-pointer group"
            onClick={() => handleRemoveTask(index)}
          >
            {" "}
            - {task}
            <span
              className="border absolute border-red-400 text-xs px-2 py-1 rounded-md ml-40 bg-red-300 opacity-0 group-hover:opacity-100 transition duration-200"
              role="tooltip"
            >
              Click to delete
            </span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />

      <input
        type="text"
        id="task"
        className="border p-2 border-white rounded-md m-1"
      />
      <button
        className="border border-white px-4 py-2 rounded-md"
        onClick={handleAddTask}
      >
        Submit
      </button>
    </>
  );
};

export default ArrayUpdate;
