import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <div>
      <h1>Tasks</h1>
      <NewTask onAdd={onAdd} />
      {tasks.length <= 0 && <p>This project does not have any tasks yet</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex my-4 justify-between">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="hover:text-red-600 px-4 py-1"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
