import logoVg from '../assets/vg-webDeveloper-engineer-logo.png'
import {AiFillInstagram} from 'react-icons/ai' 
import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi' 
import {BsLinkedin} from 'react-icons/bs'


export default function Footer(){
    return(
        <footer className='p-5 lg:mt-40'>
            <figure className='hidden lg:flex lg:justify-end lg:mr-20'>
                <img src={logoVg} alt="xD" className='w-1/6' />
            </figure>
            <section className='text-2xl flex flex-row gap-4 justify-center text-[#f8ced7] dark:text-[#ba4753]'>
                <a href="https://github.com/veronicadelmar" target="_blank">
                    <figure>
                        <BsGithub/>
                    </figure>
                </a>
                <a href="https://www.linkedin.com/in/veronicagui%C3%B1an/" target="_blank">
                    <figure>
                        <BsLinkedin/>
                    </figure>
                </a>
                <a href="mailto:unachamaqueprograma@gmail.com" target="_blank">
                    <figure>
                        <HiOutlineMail/>
                    </figure>
                </a>
                <a  href="https://www.instagram.com/unachamaqueprograma/" target="_blank">
                    <AiFillInstagram/>
                </a>
            </section>
            <p className='text-center italic py-4'>Copyright © 2023 ~ Verónica Guiñan</p>
        </footer>
    )
}