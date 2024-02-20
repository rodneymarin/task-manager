import { FormEvent, useState } from "react";
import Modal from "./Modal";
import { ColumnData, TaskData } from "../globals";
import { getRandomId } from "../lib/getRandomId";

interface PropsFormNewTask {
  column: ColumnData;
  isVisible: boolean;
  onCancel: () => void;
  onSave: (newTask: TaskData) => void;
}

export default function FormNewTask(props: PropsFormNewTask) {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskContent, setTaskContent] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const task: TaskData = {
      id: getRandomId(),
      title: taskTitle,
      content: taskContent,
      idColumn: props.column.id
    }
    props.onSave(task);
  }

  return (
    <Modal isVisible={props.isVisible}>
      <form className="w-96 min-h-72 p-8 rounded-xl shadow-xl bg-stone-100 flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <h4 className="font-bold text-lg mb-2">Add new task inside {props.column && props.column.title} column</h4>
        <div className="flex flex-col gap-1">
          <label className="block font-bold">Title</label>
          <textarea className="border border-stone-300 rounded-md min-h-10 w-full px-2 resize-none" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-bold">Content</label>
          <textarea className="border border-stone-300 rounded-md min-h-40 w-full px-2 resize-none" value={taskContent} onChange={(e) => setTaskContent(e.target.value)} />
        </div>
        <div className="w-full flex gap-4">
          <button
            type="submit"
            className="rounded-md bg-purple-600 text-white h-fit w-fit min-w-32 p-2 cursor-pointer hover:bg-purple-700">
            Save</button>
          <button
            onClick={props.onCancel}
            className="rounded-md bg-stone-400 text-white h-fit w-fit min-w-32 p-2 cursor-pointer hover:bg-stone-500">
            Cancel</button>
        </div>
      </form>
    </Modal>
  )
}
