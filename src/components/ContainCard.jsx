import { useState } from "react"
import Card from "./Card"

export default function ContainCard({tasks, option, deleteTask, changeTask}){

    const filteredTask = option === "" ? tasks : tasks.filter(task => task.condition === option)
    
    return(
        <section className="my-10">
        {filteredTask &&
            filteredTask.map((task, index) => {
                return(
                    <Card key={index} title={task.title} id={task.id} deleteTask={deleteTask} changeTask={changeTask}/>
                )
            })
        }
    </section>
    )
}