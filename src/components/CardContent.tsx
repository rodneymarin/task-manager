import { PropsWithChildren } from "react";

export default function CardContent(props: PropsWithChildren) {
  return (
    <div className="pt-2 overflow-hidden">
      <div className="overflow-hidden line-clamp-4">
        {
          props.children
            ? props.children
            : <span className="italic text-stone-300">empty content</span>
        }
      </div>
    </div>
  )
}
