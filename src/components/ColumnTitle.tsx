import { KeyboardEvent, useRef, useState } from "react";

interface ColumnTitleProps {
  text: string;
  onChange: (value: string) => void;
  onClick?: () => void;
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
    if (event.key === "Enter") {
      setLastTitle(title);
      setIsEditing(false);
      props.onChange(title);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg bg-component w-full ${isEditing ? "p-0" : "hover-darken-button p-component"}`}>
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
  )
}
