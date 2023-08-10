import React, { useState } from "react"
import add from '../assets/add.png'
import warning from '../assets/warning.png'
import sayNo from '../assets/say-no.png'

export default function FormContainer({tasks, addTask, filter}){
    // state's
    const [task, setTask] = useState({
        condition: "incompleted",
        title: ""
    })
    const [alert, setAlert] = useState(false)
    const [demand, setDemand] = useState(false)
    const [noRepeat, setNoRepeat] = useState (false)
    // funtion
    function validate() {
        task.title === "" ? (
            setAlert(true),
            setNoRepeat(false),
            setDemand(false),
            setTimeout(() => {
                setAlert(false);
            }, 3000)
        ) : task.title.length < 5 ? (
            setDemand(true),
            setNoRepeat(false),
            setAlert(false)
        ) : (tasks.some((tk) => tk.title.toLowerCase() === task.title.toLowerCase())) ? (
            setNoRepeat(true),
            setAlert(false),
            setDemand(false)
        ) 
        : (
            setDemand(false),
            setNoRepeat(false),
            addTask(task),
            setTask({
                condition: "incompleted",
                title: ""
            })
        )
    }
    
    // event input
    function handleChange(e){
        const value = e.target.value
        const name = e.target.name

        setTask({
            ...task,
            [name]: value,
            id: crypto.randomUUID(),
        })
    }
    // event select
    function selectChange(e){
        filter(e.target.value)
    }

    return(
        <form className="mt-8"
            onSubmit={(e)=>{
                e.preventDefault()
                validate()
            }}
        >
            <section className="flex flex-col gap-4 ml-8 sm:ml-40 md:m-0 md:flex md:gap-x-10 md:flex-row md:justify-center">
                <div className="flex flex-row items-center gap-3">
                    <label className="text-lg font-semibold lg:text-xl">Task</label>
                    <input name="title" value={task.title} onChange={handleChange} type="text" maxLength={30} placeholder="Enter a task" className="p-2 rounded"/>
                    <button type="submit">
                        <img src={add} alt="add" className="w-8"/>
                    </button>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <label className="font-semibold text-lg lg:text-xl">Select</label>
                    <select onChange={selectChange} className="p-2 rounded">
                        <option value="">All task</option>
                        <option value="completed">Completed</option>
                        <option value="incompleted">Incompleted</option>
                    </select>
                </div>
            </section>
            {/* alert, error empty input */}
            <div className="flex justify-center mt-6">
                {alert && <span className="py-2 px-4 font-bold text-[#ff0000] bg-[#ffff00] rounded-3xl dark:text-[#ffff00] dark:bg-[#ff0000]">Error, task cannot be empty.</span>}
            </div>
            {/* alert, greater than 5 letters */}
            {demand && 
                <span className="ml-12 font-bold text-[#ffff00] flex flex-row justify-center gap-2 items-center dark:text-[#ff0000]">
                    <img src={warning} alt="warning" className="w-6" />
                    Task must contain more than 5 letters
                </span>
            }
            {/* alert, no repeat  */}
            {noRepeat && 
                <span className="ml-12 font-bold text-[#4adedd] flex flex-row justify-center gap-2 items-center dark:text-[#ff0000]">
                    <img src={sayNo} alt="warning" className="w-6" />
                    The task cannot be repeated
                </span>
            }
        </form>
    )
}