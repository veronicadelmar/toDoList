import check from '../assets/check.png'
import eliminate from '../assets/eliminate.png'


export default function Card({title, id, deleteTask, changeTask}){
    //funtions
    const handleDelete = () => {
        deleteTask(id)
    }
    const handleChange = () => {
        changeTask(id)
    }
    return(
        <section className="flex justify-center gap-4 mb-4">
            <p className='p-2 bg-[#fff] rounded'>{title}</p>
            <div className='flex gap-2'>
                <button onClick={handleChange}>
                    <img src={check} alt="Check" className='w-7' />
                </button>
                <button onClick={handleDelete}>
                    <img src={eliminate} alt="Delete" className='w-7' />
                </button>
            </div>
        </section>
    )
}