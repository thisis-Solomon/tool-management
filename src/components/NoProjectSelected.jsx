import noProejcetSelected from "../assets/no-projects.png";
import { Button } from "./sharedUI/Button";

export default function NoProjectSelected({ onAddProjectHandler }) {
  return (
    <div className="flex flex-col place-items-center text-center mt-8 w-2/3">
      <img
        src={noProejcetSelected}
        className="h-16 w-16 object-contain"
        alt="An empty task-list"
      />
      <h1 className="mt-4 font-bold stroke-stone-500 text-xl">
        No Project Selected
      </h1>
      <p className="mb-4 mt-1">
        Select a project or get started with a new one
      </p>

      <Button onClick={onAddProjectHandler}>Create A Project</Button>
    </div>
  );
}
