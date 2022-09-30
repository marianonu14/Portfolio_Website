import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
    return ( 
        <div className="flex justify-between items-center w-full mb-10 bg-gray-300 rounded-xl overflow-hidden shadow-xl" >
            <Image 
            src={props.image} 
            alt="Project_1-Image" 
            height={500} 
            width={350} 
            objectFit='cover' 
            objectPosition='center'
            />
            <div className="flex flex-col justify-between w-2/3 px-5">
                <h3 className="text-xl sm:text-4xl tracking-wider mb-10 text-grey-400 uppercase">{props.title}</h3>
                <p className="mb-10 text-lg"><span className="font-bold">Description: </span>{props.info}</p>
                <p className="mb-10 text-lg"><span className="font-bold">Technologies: </span>{props.tech}</p>
                <div className="flex gap-5 px-5">
                    <Link href={props.link}>
                        <a target='_blank' rel="noreferrer" className="w-1/2 text-center text-sm sm:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">Visit the App</a>
                    </Link>   
                    <Link href={props.repo}>
                        <a target='_blank' rel="noreferrer" className="w-1/2 text-center text-sm sm:text-xl cursor-pointer bg-gray-600 text-white p-4 rounded-xl">Go to the Repository</a>
                    </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;