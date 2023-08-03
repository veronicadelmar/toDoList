import Card from "./Card"
import Hook from '../assets/Paper-Clip-Hook.png'

export default function ContainCard({tasks, option, deleteTask, changeTask}){

    const filteredTask = option === "" ? tasks : tasks.filter(task => task.condition === option)
    
    return(
    <section className="my-10">
        <figure className="flex justify-center">
            <img src={Hook} alt="Hook Papel" />
        </figure>
        {filteredTask &&
            filteredTask.map((task, index) => {
                return (
                    <Card key={index} title={task.title} id={task.id} deleteTask={deleteTask} changeTask={changeTask} condition={task.condition}/>
                )
            })
        }
    </section>
    )
}