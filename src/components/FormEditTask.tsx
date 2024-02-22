import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { ColumnData, TaskData } from "../globals";

interface PropsFormEditTask {
  selectedColumn: ColumnData;
  selectedTask: TaskData;
  //isVisible: boolean;
  isNew: boolean;
  onCancel: () => void;
  onSave: (title: string, content: string) => void;
}

export default function FormEditTask(props: PropsFormEditTask) {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskContent, setTaskContent] = useState<string>("");
  const inputTitleRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<boolean>(false);

  //focus title input
  useEffect(() => {
    if (props.isNew) {
      setTaskTitle("");
      setTaskContent("");
    } else {
      setTaskTitle(props.selectedTask ? props.selectedTask.title : "");
      setTaskContent(props.selectedTask ? props.selectedTask.content : "");
    }
  }, [props.isNew, props.selectedTask])

  useEffect(() => {
    const err: boolean = (taskTitle === "" && taskContent === "");
    setError(err);
  }, [taskTitle, taskContent]);

  function handleTitleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskTitle(event.target.value);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskContent(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    props.onSave(taskTitle, taskContent);
  }

  return (
    <Modal /*isVisible={props.isVisible}*/>
      <form className="w-[30rem] min-h-72 p-8 rounded-xl shadow-xl bg-stone-100 flex flex-col gap-8 text-stone-500"
        onSubmit={handleSubmit}
      >
        <div>
          <h4 className="font-bold text-xl text-black">{`${props.isNew ? "Add New " : "Edit "}Task`}</h4>
          <p className="text-stone-400">Inside column <i>{props.selectedColumn?.title}</i></p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-bold">Title</label>
          <textarea
            ref={inputTitleRef}
            autoFocus={true}
            className="rounded-md min-h-10 w-full p-2 resize-none"
            value={taskTitle}
            onChange={handleTitleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-bold">Content</label>
          <textarea
            className="rounded-md min-h-40 w-full p-2 resize-none"
            value={taskContent}
            onChange={handleContentChange} />
        </div>
        <div className="w-full flex gap-4">
          <button
            type="submit"
            disabled={error}
            className="button button-confirm">
            Save</button>
          <button
            onClick={props.onCancel}
            className="button">
            Cancel</button>
        </div>
      </form>
    </Modal>
  )
}
