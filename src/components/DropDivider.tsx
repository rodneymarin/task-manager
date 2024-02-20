
interface DropDividerProps {
  isActive: boolean;
}

export default function DropDivider(props: DropDividerProps) {
  return (
    <div className={`w-full h-1 my-1 ${props.isActive ? " bg-purple-500" : "bg-transparent"} pointer-events-none`}></div>
  )
}
