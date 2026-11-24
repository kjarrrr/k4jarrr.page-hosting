import { NavLink } from "react-router-dom";
import { useState } from "react";


export function ArtPage2() {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <header>
                <h1 className='welcome'>Internal Intention</h1>
            </header>

            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 mt-10 md:mt-20 px-4" style={{ fontFamily: 'Trebuchet MS' }}>

                <div className="flex flex-col gap-10 bg-[rgba(25,37,44,0.85)] p-10 border border-[rgb(16,21,23)]">

                    <div className="artPageText">
                        <h1 className="text-4xl text-white font-bold mb-4" style={{ fontFamily: 'Trebuchet MS' }}>
                            About <span className="text-white">THE WEBCOMIC</span>
                        </h1>
                        <p className="text-[rgb(211,211,211)] text-xl leading-relaxed max-w-md" style={{ fontFamily: 'Trebuchet MS' }}>
                            A dark past haunts Elissa’s mind. During a flight, strange occurrences take place that unsettle her and bring her past back to memory.
                        </p>

                    </div>
                    <div>
                        <p className="text-white text-2xl"><span className="text-black text-2xl">Status:</span> Finished</p>
                    </div>

                    <a
                        href="https://internal-intention.the-comic.org/comics/1/#content-start"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontFamily: "Trebuchet MS",
                            WebkitTextStroke: "2px white",
                            paintOrder: "stroke fill",
                        }}
                        className={`relative z-50 inline-block w-fit text-3xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-black hover:text-white"
                            }`}
                    >
                        Read Here
                    </a>


                 


                </div>

                <img className="cover2" src="img/infoInternal.png" alt="" />

            </div>
        </>
    )
}