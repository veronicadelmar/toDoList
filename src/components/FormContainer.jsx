import React, {useState} from "react"
export default function FormContainer({addTask, filter}){
    // states
    const [task, setTask] = useState({
        condition: "incompleted",
        title: ""
    })
    const [alert, setAlert] = useState(false)
    //funtion
    function validate(){
        if(task.title === ""){
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        } else {
            addTask(task)
            setTask(
                {
                    condition: "incompleted",
                    title: ""
                }
            )
        }
    }
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
            validate()
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
        {alert && <p>El campo no puede estar vacio.</p>}
    </form>
}