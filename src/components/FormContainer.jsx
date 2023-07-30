import React, {useState} from "react"
export default function FormContainer({addTask, filter}){

    const [task, setTask] = useState({
        condition: "incompleted",
        title: ""
    })
    // event input
    function handleChange(e){
        const value = e.target.value;
        const name = e.target.name;

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

    return <form
        onSubmit={(e)=>{
            e.preventDefault();
            addTask(task)
        }}
    >
        <div>
            <label>Task</label>
            <input name="title" value={task.title} onChange={handleChange} type="text" placeholder="Enter a task"/>
        </div>
        <div>
            <label>Select</label>
            <select onChange={selectChange} name="" id="">
                <option value="">All task</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
        </div>
        <div>
            <button type="submit">SEND</button>
        </div>
    </form>
}