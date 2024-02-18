import { PropsWithChildren } from "react";

export default function TaskTitle(props: PropsWithChildren) {
  return (
    <h4 className="font-bold text-ellipsis overflow-hidden text-nowrap">
      {
        props.children
          ? props.children
          : <span className="italic text-stone-300">empty title</span>
      }
    </h4>
  )
}