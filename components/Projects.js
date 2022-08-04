import ProjectCard from "./ProjectCard";


const Projects = () => {
    return ( 
        <div id="projects" className="relative w-full p-10">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full gap-10">
                <p className="text-2xl font-bold uppercase mt-16">Projects</p>
                <h2 className="text-blue-600">What I've Built</h2>
                <div className="grid xl:grid-cols-2">
                    <ProjectCard title="Project 1"/>
                    <ProjectCard title="Project 2"/>
                    <ProjectCard title="Project 3"/>
                    <ProjectCard title="Project 4"/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;