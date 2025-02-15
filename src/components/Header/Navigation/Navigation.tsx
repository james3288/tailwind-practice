import { useState } from "react";
import { menuList } from "../../../constants/constants";
import { CloseMenuIcon, HambumgerMenuIcon } from "../../icons/SvgComponents";
import { motion } from "framer-motion";

const Navigation = () => {
  const [menuItem] = useState(menuList());
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    opened: {
      x: 0,
      transition: {
        delay: 0,
        ease: "easeOut",
      },
    },
    closed: {
      x: -1000,
    },
  };

  const menuItemsVariants = {
    opened: {
      x: -10,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
    closed: {
      x: -1000,
    },
  };

  const item = {
    closed: { opacity: 0 },
    opened: { opacity: 1 },
  };

  return (
    <>
      {/* menu */}
      <div className="flex justify-center items-center mr-8">
        <ul className="font-semibold md:flex flex-row gap-4 hidden h-full">
          {menuItem.map((menu) => (
            <li className="group">
              <div className="flex flex-col h-full justify-between items-center">
                <a href="" className="group-hover:text-green-400 pt-8">
                  {menu.title}
                </a>
                <span
                  className="w-full ring-2 ring-green-500 
                  rounded-md hidden group-hover:block"
                ></span>
              </div>
            </li>
          ))}
        </ul>
        <div className="sm:block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <HambumgerMenuIcon />
        </div>
      </div>
      {/* end menu */}

      {/* mobile menu */}
      <motion.div
        initial={{ x: -1000 }}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        //   transition={{ delay: 0, ease: "easeOut" }}
        className={`flex flex-col h-screen w-screen absolute
            bg-black md:hidden
        top-0 left-0 justify-center z-50`}
      >
        <motion.ul
          initial={{ x: -1000 }}
          variants={menuItemsVariants}
          animate={isOpen ? "opened" : "closed"}
          className="flex flex-col text-2xl items-center gap-4"
        >
          {menuItem.map((menu) => (
            <motion.li className="group h-[4rem]" variants={item}>
              <div className="flex flex-col h-full justify-between items-center">
                <a href="">{menu.title}</a>
                <span
                  className="w-full ring-2 ring-green-500 
                  rounded-md hidden group-hover:block"
                ></span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <div
          className="absolute right-8 top-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CloseMenuIcon className="hover:text-green-500" />
        </div>
      </motion.div>
      {/* end mobile menu */}
    </>
  );
};

export default Navigation;
