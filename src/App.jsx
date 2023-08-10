import { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import ContainCard from './components/ContainCard'
import Footer from './components/Footer'

function App() {
  // variables useState's
  const [tasks, setTasks] = useState (JSON.parse(localStorage.getItem("tasks")) || [])
  const [option, setOption] = useState ("")
  
  // funtion's
  function addTask(task){
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]))
    setTasks([...tasks, task])
  }
  function filter(select){
    setOption(select)
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
  }

  return (
    <section className='bg-[#ba4753] dark:bg-[#f8ced7] font-mono'>
      <DarkModeToggle/>
      <Header/>
      <FormContainer tasks={tasks} addTask={addTask} filter={filter}/>
      <ContainCard tasks={tasks} option={option} deleteTask={deleteTask} changeTask={changeTask}/>
      <Footer/>
    </section>
  )
}

export default App