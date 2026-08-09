import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function PageBar() {

  return (
    <>
      <section className="flex flex-wrap items-center justify-center md:justify-around h-auto md:h-30 py-4 md:py-0 px-4 gap-4">

        <Link className="md:-mx-40" to={"/"}>
          <img className="w-40 h-10 md:w-60 md:h-14" src={logo} alt="" />
        </Link>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5 text-base md:text-2xl">
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
