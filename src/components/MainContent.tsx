import { NavLink } from "react-router-dom";
export default function MainContent() {
  return (
    <div className="main">
      <div className="square">
        <div className="flex flex-col items-center my-7">
          <h1 className="text-2xl md:text-4xl text-center px-2">YELLOW SPACE XANTHOPHOBIA: <br />
            Chapter Three: Available Now!
            <br />
            <br />
          </h1>
          <a href="https://globalcomix.com/c/yellow-space-xanthophobia"
            target="_blank"
            rel="noopener noreferrer">
            <img src="img/Gang2.png" className="max-w-[300px] sm:max-w-[380px] md:max-w-190 w-auto h-auto" alt="" />
          </a>
          <br />
          <br />
          <h1 className="text-2xl md:text-4xl text-center px-2">Find more about YSX: <br />
            <br />

          </h1>
          <NavLink to={"/Artpage"}>
            <img src="img/vinegar.png" className="max-w-[300px] sm:max-w-[280px] md:max-w-140" alt="" />
          </NavLink>
          <p style={{ padding: '20px', textAlign: 'center' }} className="text-sm md:text-base">
            <br />
            <span className="text-xl md:text-3xl">Recent Update: 24/11/26</span><br />
          </p>
          <img className="my-4 w-20 h-32 md:w-23 md:h-40" src="img/meFr2.png" alt="me" />
        </div>
      </div>
    </div>
  )
}
