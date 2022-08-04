import { useState, useEffect } from "react"; 

import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
    const [navState , setNavState] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNavState(!navState)
        return; 
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 150){
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    })

    return ( 
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-white" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
                <Image 
                src="/../public/assets/logowebsite.png" 
                alt="Website Logo"
                width="60" 
                height="60"/>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className="md:hidden cursor-pointer" onClick={handleNav}>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            <div className={navState ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : undefined}>
                <div className={navState ? 
                                "md:hidden fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700" : 
                                "md:hidden fixed left-[-100%] top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700"}>
                    <div className="flex justify-between item-center mb-10">
                        <Image  src="/../public/assets/logowebsite.png" alt="Website Logo" width="60" height="60"/>
                        <div className="cursor-pointer" onClick={handleNav}>
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-10">
                        <Link href="/">
                            <li onClick={()=>{setNavState(false)}} className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li onClick={()=>{setNavState(false)}} className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li onClick={()=>{setNavState(false)}} className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li onClick={()=>{setNavState(false)}} className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li onClick={()=>{setNavState(false)}} className="ml-10 text-md uppercase hover:text-blue-600 hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className="py-10 ml-10">
                        <p className="uppercase text-blue-600 font-bold">Let´s Connect</p>
                    </div>
                    <div className="flex justify-evenly">
                        <a className="cursor-pointer" href="https://www.linkedin.com/in/mariano-nuñez14" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={25}/>
                        </a>
                        <a className="cursor-pointer" href="https://github.com/marianonu14" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub size={25}/>
                        </a>
                        <a className="cursor-pointer" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineMail size={25}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
