import React, { useState } from "react"

export default function FormContainer({addTask, filter}){
    // states
    const [task, setTask] = useState({
        condition: "incompleted",
        title: ""
    })
    const [alert, setAlert] = useState(false)
    const [demand, setDemand] = useState(false)
    //funtion
    function validate() {
        task.title === "" ? (
                setAlert(true),
                setTimeout(() => {
                    setAlert(false);
                }, 3000)
            ) : task.title.length < 5 ? (
                setDemand(true),
                setTimeout(() => {
                    setDemand(false);
                }, 3000)
            ) : (
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
            <section className="flex flex-col gap-6 mb-8 ml-20 md:flex-row md:justify-center">
                <div>
                    <label className="mr-3 text-lg lg:text-xl">Task</label>
                    {/* validar el input, mayor a cantidad de letras, que no sean repetidas */}
                    <input name="title" value={task.title} onChange={handleChange} type="text" placeholder="Enter a task" className="p-2 rounded"/>
                    {demand && <span className="p-4 font-medium bg-red-600 rounded-3xl">Task must contain more than 5 letters</span>}
                </div>
                <div>
                    <label className="mr-3 text-lg lg:text-xl">Select</label>
                    <select onChange={selectChange} className="p-2 rounded">
                        <option value="">All task</option>
                        <option value="completed">Completed</option>
                        <option value="incompleted">Incompleted</option>
                    </select>
                </div>
            </section>
            {/* Button */}
            <section className="flex flex-col items-center justify-center gap-4 text-[#fff]">
                <button type="submit" className="rounded-full font-semibold bg-emerald-950 py-1 px-8 text-lg lg:text-2xl lg:hover:bg-pink-800 lg:active:bg-pink-950">SEND</button>
                {alert && <span className="p-4 font-medium bg-red-600 rounded-3xl">Error, task cannot be empty.</span>}
            </section>
        </form>
    )
}