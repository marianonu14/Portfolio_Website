import Image from "next/image";

const About = () => {
    return ( 
        <div id="about" className="w-full md:h-screen p-10 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2 flex flex-col justify-evenly gap-10 md:gap-5">
                    <p className="text-2xl font-bold uppercase mt-10">About</p>
                    <h2 className="text-blue-600">Who I Am</h2>
                    <p className="text-xl">I have spent the last 10 year working as a carpenter. In 2021, I started working with HTML and CSS to make small projects. Fascinated with that, I move to Javascript. Then started making more interactive website and other Web applications</p>
                    <p className="text-xl"> Currently, I am spending my time building projects and learning about ReactJS, NodeJS, Express and MongoDB. </p>
                </div>
                <div className="w-full h-auto flex items-center justify-center md:justify-end mt-10 md:mt-0">
                    <Image 
                    src="/../public/assets/imgAbout.jpg" 
                    alt="About Me"
                    width={300}
                    height={400}
                    className="rounded-xl"/>
                </div>
            </div>
        </div>
     );
}
 
export default About;
