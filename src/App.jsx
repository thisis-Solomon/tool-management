import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const deleteTaskHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
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
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
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
      };
    });
  };

  let content = (
    <SelectedProject
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
      project={selectedProject}
      onDelete={onDeleteSelectedProject}
      tasks={projectState.tasks}
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
