import Card from './Card'
import Clip from '../assets/paperClip.png'

export default function ContainCard({tasks, option, deleteTask, changeTask}){

    const filteredTask = option === "" ? tasks : tasks.filter(task => task.condition === option)
    
    return(
        <section className="flex flex-col relative">
            <figure className="flex flex-col absolute self-center top-[-70px] z-[2]">
                <img src={Clip} alt="Hook Papel" />
            </figure>
            <div className="w-[90%] flex flex-col self-center relative bg-[#fff] h-[40px] mb-20 lg:w-1/2"></div>
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