import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface FormNewColumnProps {
  onResponse: (res: boolean, value: string) => void;
}

export default function FormNewColumn(props: FormNewColumnProps) {
  const inputRef = useRef(null);
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function handleClickOk() {
    props.onResponse(true, title);
  }

  function handleClickCancel() {
    props.onResponse(false, "");
  }

  useEffect(() => {
    setError(title === "");
  }, [title]);

  return (
    <Modal>
      <form className="w-[30rem] min-h-72 p-8 rounded-xl shadow-xl bg-stone-100 flex flex-col gap-8 text-stone-500">
        <h4 className="font-bold text-xl text-black">Add New Column</h4>
        <div className="flex flex-col gap-1">
          <label className="block font-bold">Title</label>
          <textarea
            ref={inputRef}
            autoFocus={true}
            className="rounded-md min-h-10 w-full p-2 resize-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="w-full flex gap-4">
          <button
            type="submit"
            disabled={error}
            className="button button-confirm"
            onClick={handleClickOk}
          >
            Save</button>
          <button
            onClick={handleClickCancel}
            className="button">
            Cancel</button>
        </div>
      </form>
    </Modal>
  )
}
