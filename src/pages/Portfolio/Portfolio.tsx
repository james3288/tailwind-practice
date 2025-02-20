import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const HorizontalData = [
  { id: 1, title: "Global", color: "bg-red-400" },
  { id: 2, title: "Data", color: "bg-blue-400" },
  { id: 3, title: "Scale", color: "bg-slate-400" },
  { id: 4, title: "Transform", color: "bg-slate-500" },
  { id: 5, title: "Quaternion", color: "bg-slate-700" },
  { id: 6, title: "Angle", color: "bg-green-400" },
];
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div
          className="w-screen h-[calc(100vh-5rem)] 
        flex items-center justify-center text-8xl bg-gradient-to-b from-slate-950 to-slate-900"
        >
          My Works
        </div>
        <div
          className="sticky top-0 flex 
        h-screen gap-4 items-center justify-center 
        overflow-hidden bg-gradient-to-t from-slate-950 to-slate-900"
        >
          <motion.div style={{ x }} className="flex">
            {HorizontalData.map((data) => (
              <div
                className={`flex h-screen w-screen items-center
              justify-center ${data.color}`}
                key={data.id}
              >
                <div className="flex flex-col gap-8">
                  <h1 className="text-5xl text-white">{data.title}</h1>
                  <div className="w-[600px] h-[400px] bg-neutral-800"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt magnam deserunt similique, error voluptatum fugit,
                    officia accusamus in nulla atque, voluptates quidem
                    molestiae obcaecati nemo ipsam aut cum enim explicabo.
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
