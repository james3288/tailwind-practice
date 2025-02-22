import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Reordering from "../../components/Animation/ReorderAnimation";
import image1 from "../../assets/img/dashboard.png";
import image2 from "../../assets/img/clients-n-workout.png";
import image3 from "../../assets/img/active-users.png";
import {
  CirclePlus,
  ScanSearchIcon,
} from "../../components/icons/SvgComponents";
const HorizontalData = [
  {
    id: 1,
    title: "Global",
    color: "bg-[#DDEB9D]",
    image: [image1, image2, image3, image1],
  },
  {
    id: 2,
    title: "Data",
    color: "bg-[#A0C878]",
    image: [image1, image2, image3, image2],
  },
  {
    id: 3,
    title: "Scale",
    color: "bg-[#27667B]",

    image: [image1, image2, image3, image1],
  },
  {
    id: 4,
    title: "Transform",
    color: "bg-[#143D60]",

    image: [image1, image2, image3, image2],
  },
  {
    id: 5,
    title: "Quaternion",
    color: "bg-[#497D74]",
    image: [image1, image2, image3, image1],
  },
  {
    id: 6,
    title: "Angle",
    color: "bg-[#71BBB2]",
    image: [image1, image2, image3, image2],
  },
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
        flex flex-col items-center justify-center text-8xl bg-gradient-to-b from-slate-950 to-slate-900"
        >
          <h1 className="text-8xl font-semibold text-slate-200">My Works</h1>
          <div className="p-4">
            <Reordering />
          </div>
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
              justify-center ${data.color} overflow-hidden`}
                key={data.id}
              >
                <div
                  className="flex flex-col gap-10 justify-center 
                items-center"
                >
                  <h1 className="text-5xl text-white">{data.title}</h1>
                  <div className="flex flex-row gap-2">
                    <div
                      className="w-[calc(100vw-2rem)]
                    md:w-[600px]
                    bg-neutral-800 relative overflow-hidden"
                    >
                      <div
                        className="w-full h-full bg-slate-950 absolute top-0 left-0 backdrop-blur-lg opacity-70
                      hover:opacity-0 transition-opacity"
                      ></div>
                      {/* <ScanSearchIcon className="absolute mx-auto my-auto top-1/2 left-1/2" /> */}
                      <CirclePlus className="absolute mx-auto my-auto top-1/2 left-1/2" />
                      <img
                        src={data.image[0]}
                        alt=""
                        className="h-[300px] object-cover"
                      />
                    </div>

                    <div
                      className="w-[calc(100vw-2rem)]
                    md:w-[600px]
                    bg-neutral-800"
                    >
                      <img
                        src={data.image[1]}
                        alt=""
                        className="h-[300px] w-full object-fill"
                      />
                    </div>

                    <div
                      className="w-[calc(100vw-2rem)]
                    md:w-[600px]
                    bg-neutral-800"
                    >
                      <img
                        src={data.image[2]}
                        alt=""
                        className="h-[300px] w-full object-fill"
                      />
                    </div>
                  </div>

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
