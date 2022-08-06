import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
    return ( 
        <div className="relative h-auto w-fix flex justify-center items-center group mb-10" >
            <Image src="/Project_1.jpg" alt="Project_1-Image" width={550} height={680} className="relative rounded-xl group-hover:opacity-30" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-center text-xl sm:text-4xl tracking-wider mb-20 text-grey-400 uppercase">{props.title}</h3>
                <Link href="/" >
                    <p className="text-center text-sm sm:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">More Info</p>
                </Link>   
            </div>
        </div>
     );
}
 
export default ProjectCard;