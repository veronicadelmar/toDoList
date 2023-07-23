import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FormContainer from './components/FormContainer'

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
      {console.log(tasks)}
      <Header/>
      <FormContainer addTask={addTask} filter={filter}/>
    </>
  )
}

export default App
