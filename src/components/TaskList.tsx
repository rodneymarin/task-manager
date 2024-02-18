import { PropsWithChildren } from "react";


export default function TaskList(props: PropsWithChildren) {
  return (
    <div className="w-[20rem] min-h-8 p-component flex flex-col gap-3 bg-component rounded-2xl">
      {props.children}
    </div>
  )
}
