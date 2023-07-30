import React, {useState} from "react"
export default function FormContainer({addTask, filter}){
    // task  setTask
    const [input, setInput] = useState({
        condition: "incompleted",
        title: ""
    })
    // event input
    function handleChange(e){
        const value = e.target.value;
        const name = e.target.name;

        setInput({
            ...input,
            [name]: value,
        })
    }
    // event select
    function selectChange(e){
        filter(e.target.value)
    }

    return <form
        onSubmit={(e)=>{
            e.preventDefault();
            addTask(input)
        }}
    >
        <div>
            <label>Task</label>
            <input name="title" value={input.title} onChange={handleChange} type="text" placeholder="Enter a task"/>
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