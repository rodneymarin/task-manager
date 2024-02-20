import { DragEvent, PropsWithChildren, useState } from 'react'
import DropDivider from "./DropDivider"

interface DroppableProps {
  id: string;
  isDraggable: boolean;
  onDrop?: () => void;
  onDragStart?: () => void;
}

export default function Droppable(props: PropsWithChildren<DroppableProps>) {
  const [isActive, setIsActive] = useState(false);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setIsActive(true);
  }

  function handleDragLeave() {
    setIsActive(false);
  }

  function handleDrop() {
    setIsActive(false);
    props.onDrop && props.onDrop();
  }

  function handleDragStart(e: DragEvent) {
    e.dataTransfer.setData("Text", props.id);
    props.onDragStart && props.onDragStart();
  }

  return (
    <div draggable={props.isDraggable} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <DropDivider isActive={isActive} />
      {props.children}
    </div>
  )
}
