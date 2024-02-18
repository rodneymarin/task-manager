import Board from "./components/Board"
import Header from "./components/Header"
import Task from "./components/Task"
import TaskContent from "./components/TaskContent"
import TaskList from "./components/TaskList"
import TaskListTitle from "./components/TaskListTitle"
import TaskTitle from "./components/TaskTitle"

function App() {

  return (
    <>
      <Header />
      <main className="p-4 w-screen">
        <Board>
          <TaskList>
            <TaskListTitle>Idea asjdoasi daosjdasd asd asd asd adsasdasda asd</TaskListTitle>
            <Task>
              <TaskTitle>Prueba de título</TaskTitle>
              <TaskContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora harum delectus et ullam sapiente possimus, voluptatum suscipit odit nesciunt ipsa quis ad error corporis asperiores, vero pariatur obcaecati aliquid sed.
              </TaskContent>
            </Task>
            <Task>
              <TaskTitle>Segundo título es un poco mas largo que los demas</TaskTitle>
              <TaskContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora harum delectus et ullam sapiente possimus, voluptatum suscipit odit nesciunt ipsa quis ad error corporis asperiores, vero pariatur obcaecati aliquid sed.
              </TaskContent>
            </Task>
            <Task>
              <TaskTitle>Otro título más</TaskTitle>
              <TaskContent>

              </TaskContent>
            </Task>
          </TaskList>
          <TaskList >

          </TaskList>
        </Board>
      </main>
    </>
  )
}

export default App
