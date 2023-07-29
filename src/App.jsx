import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import ContainCard from './components/ContainCard'

function App() {
  // variables
  const [tasks, setTasks] = useState ([])
  const [option, setOption] = useState ("")
  // funtions
  function addTask(task){
    setTasks([...tasks, task])
  }
  function filter(select){
    setOption([select])
  }

  return (
    <>
      <Header/>
      <FormContainer addTask={addTask} filter={filter}/>
      <ContainCard tasks={tasks} option={option}/>
    </>
  )
}

export default App
