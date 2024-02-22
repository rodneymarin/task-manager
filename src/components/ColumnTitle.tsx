import { KeyboardEvent, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ColumnTitleProps {
  text: string;
  onChange: (value: string) => void;
  onClick?: () => void;
  onDelete: () => void;
}

export default function ColumnTitle(props: ColumnTitleProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [lastTitle, setLastTitle] = useState<string>(props.text);
  const [title, setTitle] = useState<string>(props.text);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    props.onClick && props.onClick();
  }

  function handleLostFocus() {
    setTitle(lastTitle);
    setIsEditing(false);
  }

  function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "Enter":
        setLastTitle(title);
        setIsEditing(false);
        props.onChange(title);
        break;
      case "Escape":
        handleLostFocus();
        break;
    }

  }

  return (
    <div className="flex gap-4">
      <div
        onClick={handleClick}
        className={`rounded-lg w-full ${isEditing ? "p-0 cursor-default" : "hover:bg-stone-200 p-component cursor-pointer"}`}>
        <label hidden={isEditing} className="font-bold cursor-pointer">{title}</label>
        <input
          ref={inputRef}
          type="text"
          hidden={!isEditing}
          value={title}
          className="p-2.5 mx-0 rounded-md font-bold w-full"
          onKeyUp={handleKeyUp}
          onBlur={handleLostFocus}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        className="px-1 h-8 rounded-md text-stone-400 hover:bg-stone-200"
        onClick={props.onDelete}
      >
        <IoMdClose size={20} className="" />
      </button>
    </div>
  )
}
