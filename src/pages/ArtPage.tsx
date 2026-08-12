import { NavLink } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";


export function ArtPage() {
    return (
        <>
            <header>
                <h1 className='welcome'>WELCOME TO THE MAIN PROJECTS</h1>
            </header>

            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 mt-10 md:mt-20 px-4" style={{ fontFamily: 'Trebuchet MS' }}>

                <div className="flex flex-col gap-10 bg-[rgba(25,37,44,0.85)] p-10 border border-[rgb(16,21,23)]">

                    <div className="artPageText">
                        <h1 className="text-4xl text-white font-bold mb-4" style={{ fontFamily: 'Trebuchet MS' }}>
                            About <span className="text-amber-400">XANTHOPHOBIA WEBCOMIC</span>
                        </h1>
                        <p className="text-[rgb(211,211,211)] text-lg leading-relaxed max-w-md" style={{ fontFamily: 'Trebuchet MS' }}>
                            Four people wake up in a yellow void that they know nothing about,
                            forcing them to make decisions and move forward into infinity
                            to discover what is happening.
                        </p>
                         
                    </div>
                   <div>
                    <p className="text-amber-400 text-2xl"><span className="text-black text-2xl">Status:</span> In process</p>
                   </div>
                     <NavLink
                        to={"/Artworks"}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-amber-300 hover:text-white transition-all"
                        }
                    >
                        <p className="text-3xl hover:underline" style={{ fontFamily: 'Trebuchet MS' }}>
                            Art Gallery →
                        </p>
                    </NavLink> 

                    <NavLink
                        to={"/Xanthophobia"}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-amber-300 hover:text-white transition-all"
                        }
                    >
                        <p className="text-3xl hover:underline" style={{ fontFamily: 'Trebuchet MS' }}>
                            Blog →
                        </p>
                    </NavLink> 
                    <p className="text-3xl text-white">
                        FIND MORE MEDIA:
                        <div className="flex flex-row gap-5">
                            <a href="https://www.youtube.com/@TheYellowSpaceChannel">
                            <IoLogoYoutube className="text-6xl" />
                            </a>

                            <a href="https://k4jarrrr.newgrounds.com/">
                            <img className="w-20 h-15" src="img/news.png" alt="" />
                            </a>

                            <a href="https://www.tiktok.com/@yellow_space_channel">
                            <FaTiktok className="text-6xl" />
                            </a>
                        </div>
                    </p>


                </div>

                <img className="cover1" src="img/infoXantho.png" alt="" />

            </div>
        </>
    )
}



