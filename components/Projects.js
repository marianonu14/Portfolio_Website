import ProjectCard from "./ProjectCard";
import formula1Img from '../public/formula1_app.png'
import bloggerImg from '../public/blogger_image.png'
import eGuitarImg from '../public/e-guitar.png'


const Projects = () => {
    const infoFormulaOne = 'This web app provides a historical record of Formula One motor racing data'
    const infoBlogger = 'The Blogger App, allows you publish posts to your blog wherever you are'
    const infoEGuitar = 'E-Guitar, e-commerce of musical instruments such as electric guitars, basses and accessories'

    return ( 
        <div id="projects" className="relative w-full p-10">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full gap-10">
                <p className="text-2xl font-bold uppercase mt-16">Projects</p>
                <h2 className="text-blue-600">What I ve Built</h2>
                <div className="flex flex-wrap justify-evenly gap-10">
                    <ProjectCard title="Formula 1 App" link={'https://formula1-api.vercel.app/'} image={formula1Img} info={infoFormulaOne}/>
                    <ProjectCard title="Blogger App" link={'https://blogger-app-seven.vercel.app/'} image={bloggerImg} info={infoBlogger}/>
                    <ProjectCard title="E-Guitar" link={'https://e-guitar.vercel.app/'} image={eGuitarImg} info={infoEGuitar}/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;