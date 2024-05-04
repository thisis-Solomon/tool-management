import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    projectTasks: {}, // Object to store tasks for each project
  });

  const startAddProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const addTaskHandler = (text) => {
    setProjectState((prevState) => {
      const newTask = {
        text,
        id: Math.random(),
      };

      const updatedTasks = {
        ...prevState.projectTasks,
        [prevState.selectedProjectId]: [
          ...(prevState.projectTasks[prevState.selectedProjectId] || []),
          newTask,
        ],
      };

      return {
        ...prevState,
        projectTasks: updatedTasks,
      };
    });
  };

  const deleteTaskHandler = (id) => {
    setProjectState((prevState) => {
      const updatedTasks = {
        ...prevState.projectTasks,
        [prevState.selectedProjectId]: prevState.projectTasks[prevState.selectedProjectId].filter(
          (task) => task.id !== id
        ),
      };

      return {
        ...prevState,
        projectTasks: updatedTasks,
      };
    });
  };

  const onSelectedProjectHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const onDeleteSelectedProject = () => {
    setProjectState((prevState) => {
      // Remove project from projects array
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );

      // Remove tasks associated with the deleted project
      const { [prevState.selectedProjectId]: deletedProjectTasks, ...updatedTasks } = prevState.projectTasks;

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
        projectTasks: updatedTasks,
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const closeAddProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const addProjectHandler = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
        projectTasks: {
          ...prevState.projectTasks,
          [newProject.id]: [], // Initialize tasks array for the new project
        },
      };
    });
  };

  let content = (
    <SelectedProject
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
      project={selectedProject}
      onDelete={onDeleteSelectedProject}
      tasks={projectState.projectTasks[selectedProject?.id] || []}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={addProjectHandler} onClose={closeAddProjectHandler} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onAddProjectHandler={startAddProjectHandler} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelectProject={onSelectedProjectHandler}
        onAddProjectHandler={startAddProjectHandler}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
