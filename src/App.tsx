import Board from "./components/Board"
import Header from "./components/Header"
import Card from "./components/Card"
import CardContent from "./components/CardContent"
import Column from "./components/Column"
import ColumnTitle from "./components/ColumnTitle"
import CardTitle from "./components/CardTitle"
import { FaPlus } from "react-icons/fa6"
import { useState } from "react"
import Droppable from "./components/Droppable"
import FormEditTask from "./components/FormEditTask"
import { ColumnData, TaskData } from "./globals"
import { getRandomId } from "./lib/getRandomId"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { CgCloseO } from "react-icons/cg"


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
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<ColumnData | null>(null);
  const [isVisibleDialogEditTask, setIsVisibleDialogEditTask] = useState<{ isVisible: boolean, isNew: boolean }>({ isVisible: false, isNew: false });

  function handleMouseDownCard(task: TaskData) {
    setSelectedTask(task);
  }

  function handleClickCard(column: ColumnData) {
    setSelectedColumn(column);
    setIsVisibleDialogEditTask({ isVisible: true, isNew: false });
  }

  function handleClickAddTask(column: ColumnData) {
    setSelectedColumn(column);
  }

  function handleDrop(destinationTask: TaskData) {
    if (selectedTask?.id === destinationTask.id) return;
    //task list without beeing dragged
    const tasksWithoutDraggin = tasks.filter(item => item.id !== selectedTask?.id);
    const insertIndex = tasksWithoutDraggin.indexOf(destinationTask);
    //join the full array in two slices inserting the dragged task inbetween
    const newTastks = [
      ...tasksWithoutDraggin.slice(0, insertIndex),
      { ...selectedTask, idColumn: destinationTask.idColumn },
      ...tasksWithoutDraggin.slice(insertIndex)];
    setTasks(newTastks as TaskData[]);
  }

  function getLastInsertIndexInColumn(tasks: TaskData[], column: ColumnData) {
    const tasksInColumn = tasks.filter(item => item.idColumn === column.id);
    const lastItemInColumn = tasksInColumn[tasksInColumn.length - 1];
    return tasks.indexOf(lastItemInColumn) + 1;
  }

  function handleDropButton(destinationColumn: ColumnData) {
    //task list without beeing dragged
    const tasksWithoutDraggin = tasks.filter(item => item.id !== selectedTask?.id);
    // const tasksInColumn = tasksWithoutDraggin.filter(item => item.idColumn === destinationColumn.id);
    // const lastItemInColumn = tasksInColumn[tasksInColumn.length - 1];
    // const insertIndex = tasksWithoutDraggin.indexOf(lastItemInColumn) + 1;
    const insertIndex = getLastInsertIndexInColumn(tasksWithoutDraggin, destinationColumn);
    const newTastks = [
      ...tasksWithoutDraggin.slice(0, insertIndex),
      { ...selectedTask, idColumn: destinationColumn.id },
      ...tasksWithoutDraggin.slice(insertIndex)];
    setTasks(newTastks as TaskData[]);
  }

  function handleSaveTask(title: string, content: string) {
    setIsVisibleDialogEditTask({ ...isVisibleDialogEditTask, isVisible: false });
    if (isVisibleDialogEditTask.isNew) {
      saveNewTask(title, content);
    }
    else {
      saveEditedTask(title, content);
    }
  }

  function saveEditedTask(title: string, content: string) {
    const newTasks = tasks.map(item => {
      if (item.id === selectedTask?.id) {
        return { ...selectedTask, title: title, content: content };
      } else {
        return item;
      }
    });
    setTasks(newTasks);
  }

  function saveNewTask(title: string, content: string) {

    const newTask: TaskData = {
      id: getRandomId(),
      title: title,
      content: content,
      idColumn: selectedColumn?.id as string
    }
    const insertIndex = getLastInsertIndexInColumn(tasks, selectedColumn as ColumnData);
    const newTastks = [
      ...tasks.slice(0, insertIndex),
      newTask,
      ...tasks.slice(insertIndex)];
    setTasks(newTastks as TaskData[]);
  }

  function handleColumnTitleChange(value: string) {
    const newCol: ColumnData = { ...selectedColumn as ColumnData, title: value };
    const newColumns = columns.map(col => {
      if (col.id === selectedColumn?.id) {
        return newCol
      } else return col;
    });
    console.log(newColumns);
    setColumns(newColumns);
  }

  return (
    <>
      <Header />
      <main className="p-4 w-screen">
        <Board>
          {
            columns.map(columnItem => {
              return (
                <Column key={columnItem.id}>
                  <ColumnTitle
                    text={columnItem.title}
                    onChange={handleColumnTitleChange}
                    onClick={() => setSelectedColumn(columnItem)}
                  />
                  {
                    tasks.filter(taskIt => taskIt.idColumn == columnItem.id).map(taskItem => {
                      return (
                        <Droppable
                          id={taskItem.id}
                          isDraggable={true}
                          onClick={() => handleClickCard(columnItem)}
                          onMouseDown={() => handleMouseDownCard(taskItem)} onDrop={() => handleDrop(taskItem)}>
                          <Card key={taskItem.id}>
                            <CardTitle>{taskItem.title}</CardTitle>
                            <CardContent >{taskItem.content}</CardContent>
                          </Card>
                        </Droppable>
                      )
                    })
                  }
                  <Droppable
                    id={columnItem.id}
                    isDraggable={false}
                    onDrop={() => handleDropButton(columnItem)}
                    onClick={() => handleClickAddTask(columnItem)}>
                    <button onClick={() => setIsVisibleDialogEditTask({ isVisible: true, isNew: true })} className="flex h-fit items-center gap-2 rounded-lg w-full p-2 bg-component cursor-pointer hover:bg-stone-300"><FaPlus />Add task</button>
                  </Droppable>
                </Column>
              )
            })
          }
          <button className="flex h-fit items-center gap-2 rounded-lg w-[20rem] p-2 bg-component cursor-pointer hover:bg-stone-300"><FaPlus />Add column</button>
        </Board>
        <FormEditTask
          isNew={isVisibleDialogEditTask.isNew}
          selectedColumn={selectedColumn as ColumnData}
          selectedTask={selectedTask as TaskData}
          isVisible={isVisibleDialogEditTask.isVisible}
          onCancel={() => setIsVisibleDialogEditTask({ ...isVisibleDialogEditTask, isVisible: false })}
          onSave={handleSaveTask}
        />
      </main >

    </>
  )
}

export default App
