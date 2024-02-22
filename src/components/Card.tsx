import { PropsWithChildren } from "react";

interface CardProps {
  onClick: () => void;
}

export default function Card(props: PropsWithChildren<CardProps>) {
  return (
    <div
      onClick={props.onClick}
      className="bg-white overflow-hidden p-component flex flex-col gap-2 rounded-lg border-2 border-transparent shadow-sm shadow-stone-300 hover:filter-none hover:border-2 hover:border-purple-500 cursor-pointer"
    >
      <div className="pointer-events-none">
        {props.children}
      </div>
    </div>
  )
}
