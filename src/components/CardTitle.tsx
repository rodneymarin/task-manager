import { MouseEvent, PropsWithChildren } from "react";
import { IoMdClose } from "react-icons/io";

interface CardTitleProps {
  onClick: () => void;
}

export default function CardTitle(props: PropsWithChildren<CardTitleProps>) {

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    props.onClick();
  }

  return (
    <div className="flex gap-4">
      <h4 className="font-bold mb-2 w-full">
        {
          props.children
            ? props.children
            : <span className="italic text-stone-300">empty title</span>
        }
      </h4>
      <button
        className="px-1 h-8 rounded-md text-stone-400 hover:bg-stone-200 translate-x-3 -translate-y-3 pointer-events-auto"
        onClick={handleClick}
      >
        <IoMdClose size={20} className="" />
      </button>
    </div>
  )
}
