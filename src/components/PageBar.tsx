import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function PageBar() {

  return (
    <>
      <section className="flex justify-around items-center h-30">
        
        <Link className="-mx-40" to={"/"}>
          <img className="w-60 h-14" src={logo} alt="" />
        </Link>

        


        <div className="flex gap-5 text-2xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-white border-white"
                : "text-black hover:text-white transition-all"
            }
          >
            <div>
              <p>Home</p>
            </div>
          </NavLink>

          <NavLink to={"/Artpage"}
            className={({ isActive }) =>
              isActive
                ? "text-white border-white"
                : "text-black hover:text-white transition-all"
            }>
            <p>Projects</p>
          </NavLink>

          <NavLink to={"/About"}
            className={({ isActive }) =>
              isActive
                ? "text-white border-white"
                : "text-black hover:text-white transition-all"
            }>
            <p>About</p>
          </NavLink>
          <a href="https://ko-fi.com/k4jarrr">
          <p className="text-black hover:text-white transition-all">Donate</p>
          </a>
            
        </div>
      </section>
    </>
  )
}

