import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return ( 
        <div className="w-full lg:h-screen p-10">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full gap-10">
                <p className="text-2xl font-bold uppercase">Projects</p>
                <h2 className="text-blue-600">What I've Built</h2>
                {/* Projects Columns*/}
                <div className="grid xl:grid-cols-2 gap-8">
                    {/* Project*/}
                    <div className="relative h-auto w-full p-4 flex justify-center items-center group">
                        <Image src="/../public/assets/Project_1.jpg" alt="Project_1-Image" width={550} height={680} className="relative rounded-xl group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-center text-xl md:text-4xl tracking-wider mb-20 text-grey-400 uppercase">Project 1</h3>
                            <Link href="/" >
                                <p className="text-center text-sm md:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">More Info</p>
                            </Link>   
                        </div>
                    </div>
                    {/* Project*/}
                    <div className="relative h-auto w-full p-4 flex justify-center items-center group">
                        <Image src="/../public/assets/Project_1.jpg" alt="Project_1-Image" width={550} height={680} className="relative rounded-xl group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-center text-xl md:text-4xl tracking-wider mb-20 text-grey-400 uppercase">Project 2</h3>
                            <Link href="/" >
                                <p className="text-center text-sm md:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">More Info</p>
                            </Link>   
                        </div>
                    </div>
                    {/* Project*/}
                    <div className="relative h-auto w-full p-4 flex justify-center items-center group">
                        <Image src="/../public/assets/Project_1.jpg" alt="Project_1-Image" width={550} height={680} className="relative rounded-xl group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-center text-xl md:text-4xl tracking-wider mb-20 text-grey-400 uppercase">Project 3</h3>
                            <Link href="/" >
                                <p className="text-center text-sm md:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">More Info</p>
                            </Link>   
                        </div>
                    </div>
                    {/* Project*/}
                    <div className="relative h-auto w-full p-4 flex justify-center items-center group">
                        <Image src="/../public/assets/Project_1.jpg" alt="Project_1-Image" width={550} height={680} className="relative rounded-xl group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-center text-xl md:text-4xl tracking-wider mb-20 text-grey-400 uppercase">Project 5</h3>
                            <Link href="/" >
                                <p className="text-center text-sm md:text-xl cursor-pointer bg-blue-600 text-white p-4 rounded-xl">More Info</p>
                            </Link>   
                        </div>
                    </div>


                </div>
                
            </div>
        </div>
     );
}
 
export default Projects;