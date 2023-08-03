import check from '../assets/check.png'
import eliminate from '../assets/eliminate.png'
import xdBlack from '../assets/xd-black.png'
import checkComplete from '../assets/checkComplete.png'

export default function Card({title, id, deleteTask, changeTask, condition}){

    //funtions
    const handleDelete = () => {
        deleteTask(id)
    }
    const handleChange = () => {
        changeTask(id)
    }
   
    const styleText = (condition) => condition === "completed" ? "p-2 bg-[#fff] text-[#c3c3c3] rounded line-through" : condition === "incompleted" ? "p-2 bg-[#fff] rounded" : ""

    const styleIcon = (condition) => condition === "completed" ? checkComplete : condition === "incompleted" ? check : null

    return(
        <section className="flex justify-center p-4 bg-[#fff] border-b-4">
            <figure>
                <img src={xdBlack} alt="xD" className='w-9'/>
            </figure>
            <p className={styleText(condition)}>{title}</p>
            <div className='flex gap-2'>
                <button onClick={handleChange}>
                    <img src={styleIcon(condition)} alt="Check" className='w-7'/>
                </button>
                <button onClick={handleDelete}>
                    <img src={eliminate} alt="Delete" className='w-7'/>
                </button>
            </div>
        </section>
    )
}