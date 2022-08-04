import Image from "next/image";
import Link from "next/link";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {

    return ( 
        <div id="contact" className="w-full p-10 bg-slate-800">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full gap-10">
                <p className="text-white text-2xl font-bold uppercase mt-20">Contact</p>
                <h2 className="text-blue-600">Send me a message!</h2>
                <form className="flex flex-col gap-5 w-[100%] md:w-[50%] m-auto">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                    <label htmlFor="name">Last Name</label>
                    <input type="text" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="message">Type your message here</label>
                    <textarea type="text" id="message" />
                    <button className="p-3 my-5 tracking-widest text-xl bg-white text-blue-600 hover:bg-blue-600 hover:text-white ease-in-out duration-700">Send</button>
                </form>
            </div>
            <div className="flex justify-center md:justify-end p-8">
                <Link href="/">
                    <div className="bg-white rounded-full cursor-pointer shadow-lg shadow-gray-600 p-6 hover:scale-105 ease-in duration-300">
                        <HiOutlineChevronDoubleUp size={25}/>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Contact;