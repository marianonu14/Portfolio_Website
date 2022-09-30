import ProjectCard from "./ProjectCard";
import formula1Img from '../public/formula1_app.png'
import bloggerImg from '../public/blogger_image.png'
import eGuitarImg from '../public/e-guitar.png'
import financialDashboardImg from '../public/financial-dashboard-app.png'


const Projects = () => {
    const infoFormulaOne = 'This web app provides a historical record of Formula One motor racing data'
    const infoBlogger = 'The Blogger App, allows you publish posts to your blog wherever you are'
    const infoEGuitar = 'E-Guitar, e-commerce of musical instruments such as electric guitars, basses and accessories'
    const infoFinancialDash = 'Financial-Dashboard, dashboard that provides you with information about financial statement companies'

    return ( 
        <div id="projects" className="relative w-full p-10">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full gap-10">
                <p className="text-2xl font-bold uppercase mt-16">Projects</p>
                <h2 className="text-blue-600">What I ve Built</h2>
                <div className="flex flex-wrap justify-evenly gap-10">
                    <ProjectCard 
                    title="Formula 1 App" 
                    link={'https://formula1-api.vercel.app/'}
                     repo={'https://github.com/marianonu14/Formula1-Api'} 
                     image={formula1Img} 
                     info={infoFormulaOne}
                     tech={'ReactJS, TailwindCSS'}
                     />
                    <ProjectCard 
                    title="Blogger App" 
                    link={'https://blogger-app-seven.vercel.app/'}  
                    repo={'https://github.com/marianonu14/Blogger-App'} 
                    image={bloggerImg} 
                    info={infoBlogger}
                    tech={'ReactJS, TailwindCSS, React-Router, NodeJS, MongoDB'}
                    />
                    <ProjectCard 
                    title="E-Guitar" 
                    link={'https://e-guitar.vercel.app/'} 
                    repo={'https://github.com/marianonu14/e-guitar'} 
                    image={eGuitarImg} 
                    info={infoEGuitar}
                    tech={'ReactJS, NextJS, TailwindCSS'}
                    />
                    <ProjectCard 
                    title="Financial-Dashboard" 
                    link={'https://financial-dashboard-seven.vercel.app/'} 
                    repo={'https://github.com/marianonu14/Financial-Dashboard'} 
                    image={financialDashboardImg} 
                    info={infoFinancialDash}
                    tech={'ReactJS, React-Router, React-Charts, TailwindCSS'}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Projects;