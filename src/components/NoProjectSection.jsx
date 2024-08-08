import React from "react";

const commonContainerClasses = "flex flex-col justify-center items-center";
const commonTextClasses = "text-lg mt-3 text-gray-500";
const commonButtonClasses = "mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 active:scale-95 transition-transform duration-150";

export default function NoProjectSection({ onAddProject }) {
  return (
    <section className={`${commonContainerClasses} flex-1 bg-slate-100`}>
      <div className={`${commonContainerClasses} mb-10`}>
        <img
          src="src/assets/project-svgrepo-com.svg"
          alt="project-icon"
          className="size-16 mb-3 ml-3"
        />
        <h1 className="text-2xl font-semibold m-3">No Project Selected</h1>
        <h3 className={commonTextClasses}>
          Select a project or get started with a new one
        </h3>
        <button
          className={commonButtonClasses}
          onClick={onAddProject}
        >
          Create new Project
        </button>
      </div>
    </section>
  );
}
