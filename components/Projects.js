import ProjectCard from "./ProjectCard";
import formula1Img from '../public/formula1_app.png'
import bloggerImg from '../public/blogger_image.png'


const Projects = () => {
    const infoFormulaOne = 'This web app provides a historical record of Formula One motor racing data'
    const infoBlogger = 'The Blogger App, allows you publish posts to your blog wherever you are'

    return ( 
        <div id="projects" className="relative w-full p-10">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full gap-10">
                <p className="text-2xl font-bold uppercase mt-16">Projects</p>
                <h2 className="text-blue-600">What I ve Built</h2>
                <div className="grid xl:grid-cols-2">
                    <ProjectCard title="Formula 1 App" link={'https://formula1-api.vercel.app/'} image={formula1Img} info={infoFormulaOne}/>
                    <ProjectCard title="Blogger App" link={'https://blogger-app-seven.vercel.app/'} image={bloggerImg} info={infoBlogger}/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;