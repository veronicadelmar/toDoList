import Card from "./Card"
import Hook from '../assets/Paper-Clip-Hook.png'

export default function ContainCard({tasks, option, deleteTask, changeTask}){

    const filteredTask = option === "" ? tasks : tasks.filter(task => task.condition === option)
    
    return(
        <section className="mt-40 relative">
            <figure className="absolute left-1/2 transform -translate-x-1/2 bottom-5">
                <img src={Hook} alt="Hook Papel" />
            </figure>
            <div className="m-auto bg-[#fff] w-2/4 h-10">
                {filteredTask &&
                filteredTask.map((task, index) => {
                    return (
                        <Card key={index} title={task.title} id={task.id} deleteTask={deleteTask} changeTask={changeTask} condition={task.condition}/>
                    )
                })
            }
            </div>
        </section>
    )
}