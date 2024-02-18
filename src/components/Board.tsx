import { PropsWithChildren } from "react";


export default function Board(props: PropsWithChildren) {
  return (
    <div className="flex gap-3">
      {props.children}
    </div>
  )
}
