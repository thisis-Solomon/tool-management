import Tasks from "./Tasks";

export default function SelectedProject(
  {
    project,
    onDelete,
    onAddTask,
    onDeleteTask,
    tasks,
  }
) {

  const date = project?.due_date;
  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-16">
      <header>
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-xl uppercase">{project.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>
        <p className="whitespace-pre-wrap mb-4 text-stone-700">
          {project.description}
        </p>
        <p className="text-stone-700 mb-5">{dateFormatted}</p>
      </header>
      <Tasks
      tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}
      />
    </div>
  );
}
