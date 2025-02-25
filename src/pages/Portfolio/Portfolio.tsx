import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Reordering from "../../components/Animation/ReorderAnimation";
import image1 from "../../assets/img/dashboard.png";
import image2 from "../../assets/img/clients-n-workout.png";
import image3 from "../../assets/img/active-users.png";
import {
  CirclePlus,
  ScanSearchIcon,
  UserPlusIcon,
  ZoomInIcon,
} from "../../components/icons/SvgComponents";
const HorizontalData = [
  {
    id: 1,
    title: "Global",
    color: "bg-[#DDEB9D]",
    image: [image1, image2, image3, image1],
    className: "",
  },
  {
    id: 2,
    title: "Data",
    color: "bg-[#A0C878]",
    image: [image1, image2, image3, image2],
    className: "",
  },
  {
    id: 3,
    title: "Scale",
    color: "bg-[#27667B]",
    image: [image1, image2, image3, image1],
    className: "",
  },
  {
    id: 4,
    title: "Transform",
    color: "bg-[#143D60]",
    image: [image1, image2, image3, image2],
    className: "bg-gradient-to-l from-slate-700 to-slate-950",
  },
  {
    id: 5,
    title: "Quaternion",
    color: "bg-slate-900",
    image: [image1, image2, image3, image1],
    className: "bg-gradient-to-l from-slate-900 to-slate-700",
  },
  {
    id: 6,
    title: "Flex Pro",
    color: "bg-slate-950",
    image: [image1, image2, image3, image2],
    className: "bg-gradient-to-l from-slate-950 to-slate-900",
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
        flex flex-col items-center justify-center text-8xl"
        >
          <h1 className="text-8xl font-semibold text-slate-200">My Works</h1>
          <div className="p-4">
            <Reordering />
          </div>
        </div>
        <div
          className="sticky top-0 flex 
        h-screen gap-4 items-center justify-center
        overflow-hidden "
        >
          <motion.div style={{ x }} className="flex">
            {HorizontalData.map((data) => (
              <div
                className={`flex h-screen w-screen items-center
              justify-center ${data.color} ${data.className} overflow-hidden`}
                key={data.id}
              >
                <div
                  className="flex flex-col gap-10 justify-center 
                items-center"
                >
                  <h1 className="text-8xl font-semibold text-white">
                    {data.title}
                  </h1>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div
                      className="w-[calc(100vw-2rem)]
                    md:w-[600px]
                    bg-neutral-800 relative overflow-hidden group/item
                    "
                    >
                      <div
                        className="w-[101%] h-full absolute top-0 
                      left-0 backdrop-blur-lg opacity-100
                      translate-x-0 
                      transition-all
                      ease-out
                      duration-500
                      group-hover/item:translate-x-full
                      group-hover/item:transition-all
                      group-hover/item:ease-out
                      group-hover/item:delay-100
                      "
                      ></div>
                      {/* <ScanSearchIcon className="absolute mx-auto my-auto top-1/2 left-1/2" /> */}
                      <CirclePlus
                        className="absolute mx-auto my-auto left-[calc(45%)] 
                      top-[calc(30%)]
                      opacity-100
                      -rotate-90
                      cursor-pointer
                      transition-all
                      group-hover/item:rotate-0
                      group-hover/item:opacity-70
                      group-hover/item:transition-transform
                      group-hover/item:ease-out
                      group-hover/item:delay-100"
                      />
                      <img
                        src={data.image[0]}
                        alt=""
                        className="h-[300px] object-cover"
                      />
                    </div>

                    <div
                      className="w-[calc(100vw-2rem)]
                    md:w-[600px]
                    bg-neutral-800 relative overflow-hidden group/item"
                    >
                      <div
                        className="w-[101%] h-full absolute top-0 
                      left-0 backdrop-blur-lg opacity-100
                      translate-x-0 
                      transition-all
                      ease-out
                      duration-500
                      group-hover/item:translate-x-full
                      group-hover/item:transition-all
                      group-hover/item:ease-out
                      group-hover/item:delay-100
                      "
                      ></div>
                      {/* <ScanSearchIcon className="absolute mx-auto my-auto top-1/2 left-1/2" /> */}
                      <ZoomInIcon
                        className="absolute mx-auto my-auto left-[calc(40%)]   
                      top-[calc(30%)]
                      opacity-100
                      cursor-pointer
                      transition-all
                      group-hover/item:rotate-90
                      group-hover/item:opacity-70
                      group-hover/item:transition-transform
                      group-hover/item:ease-out
                      group-hover/item:delay-100"
                      />
                      <img
                        src={data.image[1]}
                        alt=""
                        className="h-[300px] object-cover"
                      />
                    </div>

                    <div
                      className="w-[calc(100vw-2rem)]
                    md:w-[600px]
                    bg-neutral-800 relative overflow-hidden group/item"
                    >
                      <div
                        className="w-[101%] h-full absolute top-0 
                      left-0  backdrop-blur-lg  opacity-100
                      translate-x-0 
                      transition-all
                      ease-out
                      duration-500
                      group-hover/item:translate-x-full
                      group-hover/item:transition-all
                      group-hover/item:ease-out
                      group-hover/item:delay-100    
                      "
                      ></div>
                      {/* <ScanSearchIcon className="absolute mx-auto my-auto top-1/2 left-1/2" /> */}
                      <UserPlusIcon
                        className="absolute mx-auto my-auto left-[calc(45%)] 
                      top-[calc(30%)]
                      opacity-100
                      transition-all
                      rotate-0
                      group-hover/item:rotate-45
                      group-hover/item:opacity-70
                      group-hover/item:transition-transform
                      group-hover/item:ease-out
                      group-hover/item:delay-100
                      hover:cursor-pointer"
                      />
                      <img
                        src={data.image[2]}
                        alt=""
                        className="h-[300px] w-full object-fill"
                      />
                    </div>
                  </div>

                  <p className="text-xl w-[80%]">
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
