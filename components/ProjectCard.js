import Image from "next/image";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import { TbBrowserPlus } from "react-icons/tb";

const ProjectCard = (props) => {
    const mainContainer = "flex flex-col justify-between items-center w-full mb-10 bg-slate-800 rounded-xl overflow-hidden shadow-xl"
    return ( 
        <div className={`${mainContainer} ${props.reverse}`} >
            <div className="hidden lg:flex items-center">
                <Image 
                src={props.image} 
                alt="Project_1-Image" 
                height={550} 
                width={380} 
                objectFit='cover' 
                objectPosition='center'
                className="rounded-xl opacity-80"
                />
            </div>
            <div className="flex flex-col justify-between lg:w-3/5 p-8">
                <h3 className="text-xl sm:text-4xl tracking-wider mb-10 text-white uppercase">{props.title}</h3>
                <p className="mb-10 text-gray-200 text-xl"><span className="font-bold text-cyan-500">Description: </span>{props.info}</p>
                <p className="mb-10 text-gray-200 text-xl"><span className="font-bold text-cyan-500">Technologies: </span>{props.tech}</p>
                <div className="flex flex-col lg:flex-row gap-5 pb-5">
                    <Link href={props.link}>
                        <a target='_blank' rel="noreferrer" className="flex justify-between items-center px-5 lg:w-1/2 text-center text-base sm:text-xl cursor-pointer bg-blue-600 hover:bg-white text-white hover:text-blue-600 duration-700 p-3 rounded-xl"><TbBrowserPlus size={35} />Visit the App</a>
                    </Link>   
                    <Link href={props.repo}>
                        <a target='_blank' rel="noreferrer" className="flex justify-between items-center px-5 lg:w-1/2 text-center text-base sm:text-xl cursor-pointer bg-gray-600 hover:bg-white text-white hover:text-gray-600 duration-700 p-3 rounded-xl"><BsGithub size={35} />Go to Repository</a>
                    </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;