import NoProjectSection from "./components/NoProjectSection";
import CreateProjectSection from "./components/CreateProjectSection";
import ProjectsSection from "./components/AllProjectsSection";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import { useState } from "react";
import { set } from "date-fns";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeSection, setActiveSection] = useState("noProject");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCreateProject = (projectData) => {
    setProjects([...projects, projectData]);
    setActiveSection("noProject");
  };

  const handleCancel = () => {
    setActiveSection("noProject");
  };

  const handleDeleteProject = (projectToDelete) => {
    setProjects(projects.filter((project) => project !== projectToDelete));
    if (selectedProject === projectToDelete) {
      setSelectedProject(null);
      setActiveSection("noProject");
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveSection("projectDetails");
  };

  return (
    <div className="flex h-screen w-screen">
      <ProjectsSection
        projects={projects}
        onAddProject={() => setActiveSection("createProject")}
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
        <NoProjectSection onShow={() => setActiveSection("createProject")} />
      )}
      {activeSection === "projectDetails" && selectedProject &&(
        <ProjectDetailsSection project={selectedProject} />
      )}
    </div>
  );
}

export default App;
