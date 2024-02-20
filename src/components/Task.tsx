import TaskTitle from "./TaskTitle";
import TaskContent from "./TaskContent";

interface TaskProps {
  title: string;
  content: string;
}

export default function Task(props: TaskProps) {
  return (
    <div className="bg-white overflow-hidden p-component flex flex-col gap-2 rounded-lg border-2 border-transparent divide-y shadow-sm shadow-stone-300 hover:filter-none hover:border-2 hover:border-purple-500 cursor-pointer">
      <div className="pointer-events-none">
        <TaskTitle>{props.title}</TaskTitle>
        <TaskContent >{props.content}</TaskContent>
      </div>
    </div>
  )
}
