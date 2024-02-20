import { DragEvent, PropsWithChildren, useState } from 'react'
import DropDivider from "./DropDivider"

interface DroppableProps {
  id: string;
  isDraggable: boolean;
  onDrop?: () => void;
  onClick?: () => void;
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

  function handleMouseDown() {
    props.onClick && props.onClick();
  }

  // function handleDragStart(e: DragEvent) {

  //   props.onDragStart && props.onDragStart();
  // }

  return (
    <div
      draggable={props.isDraggable}

      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onMouseDown={handleMouseDown}>
      <DropDivider isActive={isActive} />
      {props.children}
    </div>
  )
}
