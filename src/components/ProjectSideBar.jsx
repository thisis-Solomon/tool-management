import { Button } from "./sharedUI/Button";

export default function ProjectSideBar({
  onAddProjectHandler,
  projects,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 bg-stone-900 rounded-r-xl text-stone-50 px-8 py-16 md:w-72">
      <h1 className="uppercase mb-8 font-black text-stone-200">Projects</h1>
      <div>
        <Button onClick={onAddProjectHandler}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className="text-stone-200 w-full text-left px-1 py-1 hover:text-stone-100 hover:bg-stone-800"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
