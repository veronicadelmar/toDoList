import logo from '../assets/logo-xd.png'

export default function Header(){
    return <header className='py-8 px-12 flex flex-col items-center sm:flex-row'>
        <figure className='mb-4 sm:w-1/4 lg:ml-20 lg:mr-32'>
            <img className='w-20 sm:w-40' src={logo} alt="logo xD!" />
        </figure>
        <h1 className='font-bold text-black text-4xl sm:m-auto md:p-4 md:border-black md:border-b-4 lg:m-0'>To Do List</h1>
    </header>
}