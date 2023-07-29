import { useState } from "react"
import Card from "./Card"

export default function ContainCard({tasks, option}){

    const filteredTask = tasks.filter(task => task.condition == option)
    
   
    return(
        <section>
        {filteredTask &&
            filteredTask.map((task) => {
                return(
                    <Card title={task.title}/>
                )
            })
        }
    </section>
    )
}