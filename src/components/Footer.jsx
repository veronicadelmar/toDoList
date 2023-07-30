import logoVg from '../assets/vg-webDeveloper-engineer-logo.png'

export default function Footer(){
    return(
        <footer className='mt-40'>
            <figure className='hidden lg:flex lg:justify-end lg:mr-20'>
                <img src={logoVg} alt="xD" className='w-1/6' />
            </figure>
            <p className='text-center italic py-6'>Copyright Verónica Guiñan xD!</p>
        </footer>
    )
}