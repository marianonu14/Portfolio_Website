import Image from "next/image";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import { TbBrowserPlus } from "react-icons/tb";

const ProjectCard = (props) => {
    return ( 
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-10 bg-gray-300 rounded-xl overflow-hidden shadow-xl" >
            <Image 
            src={props.image} 
            alt="Project_1-Image" 
            height={500} 
            width={380} 
            objectFit='cover' 
            objectPosition='center'
            className="rounded-xl opacity-80"
            />
            <div className="flex flex-col justify-between lg:w-3/5 p-8">
                <h3 className="text-xl sm:text-4xl tracking-wider mb-10 text-grey-400 uppercase">{props.title}</h3>
                <p className="mb-10 text-lg"><span className="font-bold">Description: </span>{props.info}</p>
                <p className="mb-10 text-lg"><span className="font-bold">Technologies: </span>{props.tech}</p>
                <div className="flex flex-col lg:flex-row gap-5 pb-5">
                    <Link href={props.link}>
                        <a target='_blank' rel="noreferrer" className="flex justify-evenly md:justify-between items-center px-5 lg:w-1/2 text-center text-base sm:text-xl cursor-pointer bg-blue-600 text-white p-3 rounded-xl"><TbBrowserPlus size={35} />Visit the App</a>
                    </Link>   
                    <Link href={props.repo}>
                        <a target='_blank' rel="noreferrer" className="flex justify-evenly md:justify-between items-center px-5 lg:w-1/2 text-center text-base sm:text-xl cursor-pointer bg-gray-600 text-white p-3 rounded-xl"><BsGithub size={35} />Go to the Repository</a>
                    </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;