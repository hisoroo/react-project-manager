import NoProjectSection from "./components/NoProjectSection";
import CreateProjectSection from "./components/CreateProjectSection";
import AllProjectsSection from "./components/AllProjectsSection";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeSection, setActiveSection] = useState("noProject");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = () => setActiveSection("createProject");

  const handleCreateProject = (projectData) => {
    setProjects([...projects, projectData]);
    setActiveSection("noProject");
  };

  const handleCancel = () => {
    setActiveSection("noProject");
  };

  const handleDeleteProject = (projectToDelete) => {
    setProjects(projects.filter((project) => project !== projectToDelete));
    setActiveSection("noProject");
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveSection("projectDetails");
  };

  return (
    <div className="flex h-screen w-screen">
      <AllProjectsSection
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onProjectClick={handleProjectClick}
      />
      {activeSection === "createProject" && (
        <CreateProjectSection
          onCreateProject={handleCreateProject}
          onCancel={handleCancel}
        />
      )}
      {activeSection === "noProject" && (
        <NoProjectSection onAddProject={handleAddProject} />
      )}
      {activeSection === "projectDetails" && selectedProject &&(
        <ProjectDetailsSection project={selectedProject} />
      )}
    </div>
  );
}

export default App;
