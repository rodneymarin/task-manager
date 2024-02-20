import Board from "./components/Board"
import Header from "./components/Header"
import Task from "./components/Task"
import TaskContent from "./components/TaskContent"
import Column from "./components/Column"
import ColumnTitle from "./components/ColumnTitle"
import TaskTitle from "./components/TaskTitle"
import { FaPlus } from "react-icons/fa6"
import DropDivider from "./components/DropDivider"
import { DragEvent, useRef, useState } from "react"
import ButtonAddTask from "./components/ButtonAddTask"
import Droppable from "./components/Droppable"

interface TaskData {
  id: string;
  title: string;
  content: string;
  idColumn: string;
}

interface ColumnData {
  id: string;
  title: string;
}

const DEFAULT_COLUMNS: ColumnData[] = [
  { id: "asda090s9d", title: "Idea" },
  { id: "9s8df7s9d8f7", title: "Design" },
  { id: "f8d9s8798398", title: "Client review" }
]

const DEFAULT_TASKS: TaskData[] = [
  { id: "asd090a9sd980", idColumn: "asda090s9d", title: "Prueba título 1", content: "Dolore est veniam enim pariatur qui duis pariatur aliquip cupidatat ut ipsum culpa cupidatat cillum. Laborum cupidatat proident aute pariatur consequat fugiat nisi ad qui duis ullamco. Est sit amet proident nisi sunt occaecat. Ipsum exercitation incididunt consectetur minim non aute incididunt labore pariatur elit. Nulla qui dolore proident eu duis sint duis magna ullamco consequat tempor. Magna elit exercitation excepteur commodo anim id excepteur nisi anim sit et. Eiusmod veniam esse veniam est anim sunt sunt minim cillum excepteur." },
  { id: "da0s9da09sd", idColumn: "asda090s9d", title: "Segundo item", content: "" },
  { id: "dada87d54s65", idColumn: "asda090s9d", title: "Hola mundo", content: "Consequat quis eu dolor ea officia laboris eu aliquip elit quis enim quis esse quis. Aute incididunt tempor elit ipsum aute sint duis fugiat. Pariatur proident ipsum incididunt dolore dolor deserunt veniam ullamco deserunt.." },
  { id: "asd68a7s6d8768", idColumn: "9s8df7s9d8f7", title: "Prueba título 2", content: "Dolore est veniam enim pariatur qui duis pariatur aliquip cupidatat ut ipsum culpa cupidatat cillum. Laborum cupidatat proident aute pariatur consequat fugiat nisi ad qui duis ullamco. Est sit amet proident nisi sunt occaecat. Ipsum exercitation incididunt consectetur minim non aute incididunt labore pariatur elit. Nulla qui dolore proident eu duis sint duis magna ullamco consequat tempor. Magna elit exercitation excepteur commodo anim id excepteur nisi anim sit et. Eiusmod veniam esse veniam est anim sunt sunt minim cillum excepteur." },
  { id: "sa8d7g78sd7a6s6", idColumn: "9s8df7s9d8f7", title: "22 Segundo item", content: "Exercitation ullamco id minim excepteur eu dolor sunt incididunt pariatur Lorem ipsum sint. Sunt ea cupidatat pariatur id duis id Lorem adipisicing consequat. Consectetur exercitation eiusmod pariatur est esse sunt duis commodo ut dolor irure magna. Quis laborum sit pariatur sint cupidatat aliquip. Exercitation occaecat eiusmod cupidatat commodo mollit dolor in est eu sint ipsum ex anim. Qui Lorem et ex duis ut esse in ullamco occaecat consequat qui anim." },
  { id: "24j4555iiiu3i", idColumn: "9s8df7s9d8f7", title: "Hola 2 mundo 2", content: "Consequat quis eu dolor ea officia laboris eu aliquip elit quis enim quis esse quis. Aute incididunt tempor elit ipsum aute sint duis fugiat. Pariatur proident ipsum incididunt dolore dolor deserunt veniam ullamco deserunt.." },
  { id: "sd4333eew80", idColumn: "f8d9s8798398", title: "Prueba título 3", content: "Dolore est veniam enim pariatur qui duis pariatur aliquip cupidatat." },
  { id: "dfs4wer4wer", idColumn: "f8d9s8798398", title: "333 Segundo item", content: "Quis Lorem amet ea culpa excepteur. Laboris nulla commodo ex nostrud labore esse eu. Dolore cupidatat esse ut magna est. Sit ea non tempor anim irure dolor incididunt duis sit incididunt id. Laboris voluptate sit dolore sint est incididunt labore." },
  { id: "899d993939sai", idColumn: "f8d9s8798398", title: "Hola 33 mundo 33", content: "Pariatur proident ipsum incididunt dolore dolor deserunt veniam ullamco deserunt." }
]

function App() {
  const [columns, setColumns] = useState<ColumnData[]>(DEFAULT_COLUMNS);
  const [tasks, setTasks] = useState<TaskData[]>(DEFAULT_TASKS);
  const [draggingTask, setDraggingTask] = useState<TaskData | null>(null);

  function handleDragStart(task: TaskData) {
    setDraggingTask(task);
  }

  function handleDrop(destinationTask: TaskData) {
    if (draggingTask?.id === destinationTask.id) return;
    //task list without beeing dragged
    const tasksWithoutDraggin = tasks.filter(item => item.id !== draggingTask?.id);
    const insertIndex = tasksWithoutDraggin.indexOf(destinationTask);
    //join the full array in two slices inserting the dragged task inbetween
    const newTastks = [
      ...tasksWithoutDraggin.slice(0, insertIndex),
      { ...draggingTask, idColumn: destinationTask.idColumn },
      ...tasksWithoutDraggin.slice(insertIndex)];
    setTasks(newTastks as TaskData[]);
  }

  function handleDropButton(destinationColumn: ColumnData) {
    //task list without beeing dragged
    const tasksWithoutDraggin = tasks.filter(item => item.id !== draggingTask?.id);
    const tasksInColumn = tasksWithoutDraggin.filter(item => item.idColumn === destinationColumn.id);
    const lastItemInColumn = tasksInColumn[tasksInColumn.length - 1];
    const insertIndex = tasksWithoutDraggin.indexOf(lastItemInColumn) + 1;
    console.log(insertIndex);
    const newTastks = [
      ...tasksWithoutDraggin.slice(0, insertIndex),
      { ...draggingTask, idColumn: destinationColumn.id },
      ...tasksWithoutDraggin.slice(insertIndex)];
    setTasks(newTastks as TaskData[]);
  }

  return (
    <>
      <Header />
      <main className="p-4 w-screen">
        <Board>
          {
            columns.map(columnItem => {
              return (
                <Column key={columnItem.id} id={columnItem.id} title={columnItem.title}>

                  {
                    tasks.filter(taskIt => taskIt.idColumn == columnItem.id).map(taskItem => {
                      return (
                        <Droppable isDraggable={true} onDragStart={() => handleDragStart(taskItem)} onDrop={() => handleDrop(taskItem)}>
                          <Task key={taskItem.id} title={taskItem.title} content={taskItem.content} />
                        </Droppable>
                      )
                    })
                  }
                  <Droppable isDraggable={false} onDrop={() => handleDropButton(columnItem)}>
                    <button className="flex h-fit items-center gap-2 rounded-lg w-full p-2 bg-component hover-darken"><FaPlus />Add task</button>
                  </Droppable>
                </Column>
              )
            })


          }
        </Board>
      </main>
    </>
  )
}

export default App
