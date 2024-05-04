import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [tastInput, setTaskInput] = useState("");

  const handleInputTask = (event) => {
    setTaskInput(event.target.value);
  };

  const handleClick = () => {
    onAdd(tastInput);
    setTaskInput("");
  };

  return (
    <div className="my-4">
      <input
        value={tastInput}
        onChange={handleInputTask}
        type="text"
        className="bg-stone-400 px-1 py-1 rounded text-lg"
      />
      <button
        onClick={handleClick}
        className="bg-stone-700 px-4 py-1.5 rounded ml-2 text-stone-200 hover:bg-stone-900"
      >
        Add Task
      </button>
    </div>
  );
}
