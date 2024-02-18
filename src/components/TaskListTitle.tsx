import { PropsWithChildren } from "react";

export default function TaskListTitle(props: PropsWithChildren) {
  return (
    <div className="p-component rounded-lg bg-component hover-darken">
      <h2 className="font-bold">
        {
          props.children
            ? props.children
            : <span className="italic text-stone-300">empty title</span>
        }
      </h2>
    </div>
  )
}
