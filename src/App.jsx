import { useState } from 'react'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import ContainCard from './components/ContainCard'

function App() {
  // variables
  const [tasks, setTasks] = useState (JSON.parse(localStorage.getItem("tasks")) || [])
  const [option, setOption] = useState ("")
  // funtions
  function addTask(task){
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]))
    setTasks([...tasks, task])
  }
  function filter(select){
    setOption([select])
  }
  function deleteTask(id){
    const updatedTasks = tasks.filter(task => task.id !== id)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    setTasks(updatedTasks)
  }
  function changeTask(taskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          condition: task.condition === "completed" ? "incompleted" : "completed",
        }
      }
      return task
    })

    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    setTasks(updatedTasks)

    console.log(taskId)
  }

  return (
    <>
      <DarkModeToggle/>
      <Header/>
      <FormContainer addTask={addTask} filter={filter}/>
      <ContainCard tasks={tasks} option={option} deleteTask={deleteTask} changeTask={changeTask}/>
    </>
  )
}

export default App
