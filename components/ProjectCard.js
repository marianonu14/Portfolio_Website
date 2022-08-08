import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
    return ( 
        <div className="relative h-auto w-fix flex justify-center items-center group mb-10" >
            <Image src={props.image} alt="Project_1-Image" height={700} width={400} className="relative rounded-xl group-hover:opacity-20 opacity-20 md:opacity-100" />
            <div className="md:hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-center text-xl sm:text-4xl tracking-wider mb-20 text-grey-400 uppercase">{props.title}</h3>
                <p className="mb-20 text-center text-lg">{props.info}</p>
                <Link href={props.link}>
                    <a target='_blank' rel="noreferrer" className="block text-center text-sm sm:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">More Info</a>
                </Link>   
            </div>
        </div>
     );
}
 
export default ProjectCard;