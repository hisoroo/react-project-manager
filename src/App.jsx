import NoProjectSection from "./components/NoProjectSection";
import CreateProjectSection from "./components/CreateProjectSection";
import ProjectsSection from "./components/AllProjectsSection";
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
      <ProjectsSection projects={projects} onAddProject={()=>setShowCreateProject(true)}/>
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
