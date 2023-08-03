import { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import ContainCard from './components/ContainCard'
import Footer from './components/Footer'

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
    <section className='bg-gradient-to-b from-[#ba4753] to-[#f8ced7] dark:from-[#f8ced7] dark:to-[#ba4753]'>
      <DarkModeToggle/>
      <Header/>
      <FormContainer addTask={addTask} filter={filter}/>
      <ContainCard tasks={tasks} option={option} deleteTask={deleteTask} changeTask={changeTask}/>
      <Footer/>
    </section>
  )
}

export default App