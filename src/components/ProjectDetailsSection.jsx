import React, { useState, useRef } from "react";

export default function ProjectDetailsSection({ project }) {
  const [tasks, setTasks] = useState([]);
  const ref = useRef(null);

  const handleAddTask = () => {
    const task = ref.current.value;
    if (task.trim()) {
      setTasks([...tasks, task]);
      ref.current.value = "";
      ref.current.focus();
    }
  };

  const handleClearTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <section className="flex flex-col justify-start items-start flex-1 bg-slate-100 p-8 w-full h-full">
      <h1 className="text-5xl font-bold mb-2 text-purple-900">
        {project.title}
      </h1>
      <p className="text-sm text-gray-500 mb-4">{project.date}</p>
      <p className="text-xl text-gray-800 mb-6">{project.description}</p>
      <hr className="border-t border-gray-300 w-full mb-6" />
      <h2 className="text-2xl font-bold mb-4 text-purple-900">Tasks</h2>
      <div className="flex items-center mb-12 w-full">
        <input
          type="text"
          ref={ref}
          className="mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 w-1/3"
        />
        <button
          onClick={handleAddTask}
          className="p-2 bg-purple-700 text-white rounded-md hover:bg-purple-800"
        >
          Add Task
        </button>
      </div>
      <ul className="list-none p-0 w-full">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center p-3 mb-4 rounded-md bg-purple-500 text-white shadow-sm text-xl"
          >
            <span className="flex-grow">{task}</span>
            <button
              onClick={() => handleClearTask(index)}
              className="ml-2 p-1 bg-purple-500 text-white rounded-md hover:bg-purple-300 text-xl"
            >
              CLEAR
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
