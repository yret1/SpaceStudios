import arrow from "../assets/arrow.svg";

import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-end items-center w-screen h-screen bg-cover bg-center bg-[url('/src/assets/Heroimg.avif')] shadow-2xl shadow-black"
    >
      <aside className="flex flex-col absolute top-10 left-10 text-2xl lg:text-xl md:text-base font-bold text-white">
        <h1 className="text-white w-10 flex justify-center ">S</h1>
        <h1 className="text-white w-10 flex justify-center ">P</h1>
        <h1 className="text-white w-10 flex justify-center ">A</h1>
        <h1 className="text-white w-10 flex justify-center ">C</h1>
        <h1 className="text-white w-10 flex justify-center ">E</h1>
        <h1 className="text-white w-10 flex justify-center ">S</h1>
        <h1 className="text-white w-10 flex justify-center ">T</h1>
        <h1 className="text-white w-10 flex justify-center ">U</h1>
        <h1 className="text-white w-10 flex justify-center ">D</h1>
        <h1 className="text-white w-10 flex justify-center ">I</h1>
        <h1 className="text-white w-10 flex justify-center ">O</h1>
        <h1 className="text-white w-10 flex justify-center ">S</h1>
      </aside>

      <a href="/#about" className="w-screen">
        <button className="text-white h-20 w-screen flex justify-center items-center ">
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            src={arrow}
            className="w-10"
          />
        </button>
      </a>
    </section>
  );
};

export default Hero;
