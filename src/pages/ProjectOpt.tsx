import { NavLink } from "react-router-dom"
export function Stories() {

    return (
        <>
            <h1 className="flex justify-center text-6xl font-bold text-white mt-20 underline">Stories</h1>
            <div className="stories-container flex justify-center gap-40 mt-20 mb-50">
                <NavLink className="yellowbg bg-yellow-300 w-125 rounded-3xl h-175" to={"/ArtPage"}>

                    <img className="grace mt-13.5" src="img/Grace.png" alt="" />
                    <h1 className="ysx-text text-center text-6xl mt-15 text-white">YELLOW SPACE XANTHOPHOBIA</h1>
                    <div>
                        <p className="text-center text-2xl mt-10 text-white  ">Four people wake up in a yellow void that they know nothing about,
                            forcing them to make decisions and move forward into infinity
                            to discover what is happening.</p>
                    </div>

                </NavLink>
                
                <NavLink className="internal-col flex flex-col items-center" to={"/ArtPage2"}>
                    <img className="internalcov rounded-3xl" src="img/InternalCover2.png" alt="" />
                    <h1 className="ysx-text text-center text-6xl mt-10 text-white">INTERNAL INTENTION</h1>
                    <p className="text-center text-2xl mt-10 text-white">A girl trying to cope with a weight on her mind.</p>
                </NavLink>
            </div>


        </>
    )
}