import { useRef } from "react";
import Inputs from "./Inputs";
import Modal from "./sharedUI/Modal";

export default function NewProject({ onAdd, onClose }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modal = useRef();

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const projectData = {
      title,
      description,
      due_date: dueDate,
    };

    onAdd(projectData);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h1>Invalid inputs</h1>
        <p>Oooops.... it's like you did not fill all the input.</p>
        <p>Provide the valid information in all the fields</p>
      </Modal>
      <div className="">
        <menu className="flex gap-8 mb-14 mt-16">
          <button
            onClick={onClose}
            className="font-bold px-6 py-2 rounded-md border "
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-950 text-stone-50 font-bold px-6 py-2 rounded-md"
          >
            Save
          </button>
        </menu>
        <div>
          <Inputs type="text" ref={titleRef} label="Title" />
          <Inputs
            type="text"
            ref={descriptionRef}
            label="Description"
            textarea
          />
          <Inputs type="date" ref={dueDateRef} label="Due date" />
        </div>
      </div>
    </>
  );
}
