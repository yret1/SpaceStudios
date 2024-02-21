import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const parentVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const childVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="bg-neutral-900 flex flex-col lg:flex-row justify-center items-center min-h-96 p-20 gap-7  shadow-2xl shadow-black"
    >
      <motion.section className="flex-1 flex justify-center items-center">
        <div className="w-80 rounded h-80 sm:h-96 sm:w-96 bg-white overflow-hidden ">
          <img
            className=""
            src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </motion.section>

      <motion.div
        variants={parentVariants}
        initial="initial"
        animate={isInview ? "animate" : "initial"}
        className="flex-1 text-center p-10 w-screen"
      >
        <motion.h2
          variants={childVariants}
          className="text-white font-bold text-3xl p-10"
        >
          Who am I?
        </motion.h2>
        <motion.p variants={childVariants} className="text-white">
          Hi! I&apos;m Eric a passionate photographer with a keen eye for
          capturing beautiful moments. With years of experience in the field, I
          specialize in various genres including landscape, portrait, and event
          photography. My goal is to create stunning visuals that evoke emotions
          and tell compelling stories. Through my lens, I aim to showcase the
          world&apos;s beauty and inspire others to see the extraordinary in the
          ordinary. Let&apos;s embark on a visual journey together!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
