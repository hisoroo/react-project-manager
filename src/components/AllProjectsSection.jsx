import React, { useState } from "react";

export default function ProjectsSection({
  projects,
  onAddProject,
  onProjectClick,
  onDeleteProject,
}) {
  const [showModal, setShowModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleDeleteClick = (project) => {
    setProjectToDelete(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProjectToDelete(null);
  };

  const handleConfirmDelete = () => {
    onDeleteProject(projectToDelete);
    handleCloseModal();
  };

  return (
    <section className="flex flex-col items-center w-1/4 bg-purple-400 rounded-tr-lg rounded-br-lg">
      <h1 className="mt-4 font-semibold text-white text-3xl">Your Projects</h1>
      <ul className="mt-4 w-full px-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="bg-white text-purple-500 rounded-lg shadow-md p-2 mt-4 mb-4 font-semibold cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            onClick={() => onProjectClick(project)}
          >
            <span>{project.title}</span>
            <button
              className="text-sm text-red-500 hover:text-red-700 ml-auto"
              onClick={() => handleDeleteClick(project)}
            >
              Delete
            </button>
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p>
              Are you sure you want to delete the project "
              {projectToDelete.title}"?
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
