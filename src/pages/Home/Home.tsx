import HeaderLogo from "../../components/Header/HeaderLogo/HeaderLogo";
import Navigation from "../../components/Header/Navigation/Navigation";
import portrait from "./../../assets/img/portrait.png";
import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <section
        className="flex w-full justify-between h-[5rem] 
      border-b-2 border-slate-800 relative"
      >
        {/* logo */}
        <HeaderLogo />
        {/* end logo */}

        {/* menu */}
        <Navigation />
      </section>

      {/* HERO */}
      <section className="h-screen">
        {/* portrait */}
        <div
          className="flex flex-col justify-center
        items-center gap-4 mt-8 relative
        md:items-start md:flex-row md:justify-items-start"
        >
          {/* image */}
          <div className="w-[300px] rounded-full overflow-hidden ring-slate-700 ring-4">
            <img src={portrait} alt="" />
          </div>
          {/* caption */}
          <div
            className="flex flex-col md:justify-center items-center 
          md:items-center md:h-[310px]"
          >
            <h1 className="text-4xl text-blue-300">
              Hi, I'm a{" "}
              <span className="text-slate-300 font-bold text-5xl">
                <ReactTyped
                  strings={["Developer", "Designer", "Singer"]}
                  typeSpeed={80}
                  backSpeed={40}
                  loop
                />
              </span>
            </h1>
            <p className="text-lg text-center text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
