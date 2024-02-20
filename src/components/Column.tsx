import { DragEvent, PropsWithChildren } from "react";
import ColumnTitle from "./ColumnTitle";

interface ColumnProps {
  id: string;
  title: string;
  onDragOver?: (e: DragEvent) => void;
  onDragEnter?: (e: DragEvent) => void;
}

export default function Column(props: PropsWithChildren<ColumnProps>) {


  return (
    <div
      data-id-column={props.id}
      className="w-[20rem] min-h-8 p-component flex flex-col bg-component rounded-2xl"
    >
      {props.id}
      <ColumnTitle >{props.title}</ColumnTitle>
      {props.children}
    </div>
  )
}
