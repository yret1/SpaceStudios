import Check from "../assets/Check.svg";

import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

const What = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      console.log("Inview");
    }
  }, [isInview]);

  const parent = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section className="h-screen w-screen flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10 bg-slate">
      <section className="flex justify-center h-96 items-center flex-1">
        <div className="object-cover w-80 h-80 lg:w-4/6 lg:h-full rounded overflow-hidden shadow-lg shadow-black bg-[url('/src/assets/Services.avif')] bg-center bg-cover"></div>
      </section>

      <section
        ref={ref}
        className="flex flex-col justify-center items-center flex-1 gap-2"
      >
        <h2 className="text-3xl font-semibold text-center p-10">My Services</h2>

        <motion.section
          className="flex flex-col gap-4"
          variants={parent}
          initial="initial"
          animate={isInview ? "animate" : "initial"}
        >
          <motion.section
            variants={child}
            className="flex justify-center gap-20"
          >
            <div className="flex items-center justify-start w-40 gap-2">
              <img className="h-10" src={Check} alt="" />
              <p className="text-nowrap">Wedding Photos</p>
            </div>
            <div className="flex items-center justify-start w-40 gap-2">
              <img className="h-10" src={Check} alt="" />
              <p className="text-nowrap">Pregnancy Shoots</p>
            </div>
          </motion.section>
          <motion.section
            variants={child}
            className="flex justify-center  gap-20"
          >
            <div className="flex items-center justify-start w-40 gap-2">
              <img className="h-10" src={Check} alt="" />
              <p className="text-nowrap">Headshots</p>
            </div>
            <div className="flex items-center justify-start w-40 gap-2">
              <img className="h-10" src={Check} alt="" />
              <p className="text-nowrap">Portfolios</p>
            </div>
          </motion.section>
          <motion.section
            variants={child}
            className="flex justify-center  gap-20"
          >
            <div className="flex items-center justify-start w-40 gap-2 ">
              <img className="h-10" src={Check} alt="" />
              <p className="text-nowrap">Commercials</p>
            </div>
            <div className="flex items-center justify-start w-40 gap-2 ">
              <img className="h-10" src={Check} alt="" />
              <p className="text-nowrap">Posters</p>
            </div>
          </motion.section>
        </motion.section>

        <a href="/#contact" className="w-full flex justify-center">
          <button className="transition-all hover:scale-105 border-solid border-black border-2 lg:w-3/6 p-3 rounded hover:text-white hover:bg-black m-10">
            <p className="font-semibold">Get In Touch</p>
          </button>
        </a>
      </section>
    </section>
  );
};

export default What;
