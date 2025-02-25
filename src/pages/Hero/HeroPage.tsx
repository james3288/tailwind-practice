import { ReactTyped } from "react-typed";
import portrait from "./../../assets/img/portrait.png";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <section className="h-screen ">
      {/* portrait */}
      <div
        className="flex flex-col justify-center
    items-center gap-4 mt-8 relative
    md:items-start md:flex-row md:justify-items-start
    md:pt-20 
    "
      >
        {/* image */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            delay: 0.2,
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-[300px] rounded-full overflow-hidden
       ring-slate-700 ring-4 shadow-xl"
        >
          <img src={portrait} alt="" />
        </motion.div>
        {/* caption */}
        <div
          className="flex flex-col md:justify-center items-center 
      md:items-center md:h-[310px] md:pt-8"
        >
          <h1 className="text-4xl text-blue-300">
            Hi, I'm a{" "}
            <span className="text-slate-300 font-bold text-4xl sm:5xl">
              <ReactTyped
                strings={["Web Developer", "Artist", "Singer"]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </span>
          </h1>
          <p className="text-lg text-center text-slate-400">
            "Code Meets Creativity – Let’s Build Something Amazing Together!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
