import { PropsWithChildren } from "react";

export default function Task(props: PropsWithChildren) {
  return (
    <div className="bg-white overflow-hidden p-component flex flex-col gap-2 rounded-lg border-2 border-transparent divide-y shadow-sm shadow-stone-300 hover:filter-none hover:border-2 hover:border-purple-500 cursor-pointer">
      {props.children}
    </div>
  )
}
