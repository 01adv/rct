// import './App.css'

import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <>
    <h1 className=" text-center pt-20 font-extrabold text-3xl">redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
