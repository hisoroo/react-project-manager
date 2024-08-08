import NoProjectSection from "./components/NoProjectSection";
import CreateProjectSection from "./components/CreateProjectSection";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [showCreateProject, setShowCreateProject] = useState(false);

  const handleCreateProject = (projectData) => {
    setProjects([...projects, projectData]);
    
    setShowCreateProject(false);
  };

  const handleCancel = () => {
    setShowCreateProject(false);
  };

  return (
    <div className="flex h-screen w-screen">
      <section className="flex flex-col items-center w-1/4 bg-purple-400 rounded-tr-lg rounded-br-lg">
        <h1 className="mt-4 font-semibold text-white text-3xl">
          Your Projects
        </h1>
        <div className="mt-16">
          <button className="flex items-center px-6 py-2 bg-white text-purple-500 rounded-lg shadow-md hover:bg-gray-200 active:scale-95 transition-transform duration-150 font-medium">
            <span className="text-2xl mr-2 mb-1">+</span>
            <span className="text-lg">Add Project</span>
          </button>
        </div>
      </section>
      {showCreateProject ? (
        <CreateProjectSection
          onCreateProject={handleCreateProject}
          onCancel={handleCancel}
        />
      ) : (
        <NoProjectSection onShow={() => setShowCreateProject(true)} />
      )}
    </div>
  );
}

export default App;
