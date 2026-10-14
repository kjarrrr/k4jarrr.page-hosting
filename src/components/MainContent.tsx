import { NavLink } from "react-router-dom";
export default function MainContent() {
  return (
    <div className="main">
      <div className="square">
        <div className="flex flex-col items-center my-7">
          <h1 className="text-2xl md:text-4xl text-center px-2">YELLOW SPACE XANTHOPHOBIA: <br />
            Chapter Two: Available Now!
            <br />
            <br />
          </h1>
          <a href="https://globalcomix.com/c/yellow-space-xanthophobia/r/1fb1803b-7ae6-4f8e-9d57-4c6241320c7d">
            <img src="img/Gang.png" className="my-4 w-[90vw] max-w-170 h-auto" alt="" />
          </a>
          <br />
          <br />
           <h1 className="text-2xl md:text-4xl text-center px-2">Check the animations at the project site: <br />
            <br />
            
          </h1>
          <NavLink to={"/Artpage"}>
            <img src="img/vinegar.png" className="max-w-[300px] sm:max-w-[280px] md:max-w-140" alt="" />
          </NavLink>
          <p style={{ padding: '20px', textAlign: 'center' }} className="text-sm md:text-base">
            <br />
            <span className="text-xl md:text-3xl">Website Updates: 14/10/26</span><br />
            -YSX Chapter Two published on GlobalComix
            <br />
            -YSX Chapter One published on Deviantart
            <br />
            -Mobile devices update
          </p>
          <img className="my-4 w-16 h-32 md:w-20 md:h-40" src="img/meFr2.png" alt="me" />
        </div>
      </div>
    </div>
  )
}
