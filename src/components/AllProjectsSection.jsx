import React from 'react';

export default function ProjectsSection({ projects, onAddProject, onProjectClick }) {
  return (
	<section className="flex flex-col items-center w-1/4 bg-purple-400 rounded-tr-lg rounded-br-lg">
	  <h1 className="mt-4 font-semibold text-white text-3xl">
		Your Projects
	  </h1>
	  <ul className="mt-4 w-full px-4">
		{projects.map((project, index) => (
		  <li
			key={index}
			className="bg-white text-purple-500 rounded-lg shadow-md p-2 mt-4 mb-4 text-center font-semibold cursor-pointer hover:bg-gray-100"
			onClick={() => {}}
		  >
			{project.title}
		  </li>
		))}
	  </ul>
	  <div className="mt-5">
		<button
		  className="flex items-center px-6 py-2 bg-white text-purple-500 rounded-lg shadow-md hover:bg-gray-200 active:scale-95 transition-transform duration-150 font-medium"
		  onClick={onAddProject}
		>
		  <span className="text-2xl mr-2 mb-1">+</span>
		  <span className="text-lg">Add Project</span>
		</button>
	  </div>
	</section>
  );
}