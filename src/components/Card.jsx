export default function Card({title, id, deleteTask, changeTask}){
    //funtions
    const handleDelete = () => {
        deleteTask(id)
    }
    const handleChange = () => {
        changeTask(id)
    }
    return(
        <div>
            <p>{title}</p>
            <button onClick={handleChange}>Check</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}