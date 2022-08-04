import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-evenly items-center w-full h-full px-10 2xl:px-16">
                <a className="cursor-pointer" href="https://www.linkedin.com/in/mariano-nuñez14" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={30}/>
                </a>
                <a className="cursor-pointer" href="https://github.com/marianonu14" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub size={30}/>
                </a>
                <a className="cursor-pointer" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail size={30}/>
                </a>
            </div>
        </div>
     );
}
 
export default Footer;