import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const Vars = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <section
      ref={ref}
      id="contact"
      className="flex justify-center min-h-screen items-center bg-slate-900 p-10"
    >
      <motion.article
        variants={Vars}
        initial="initial"
        animate={isInview ? "animate" : "initial"}
        className="flex flex-col items-center gap-10 rounded-xl max-w-screen border-white border-4"
      >
        <figure className="bg-[url('/src/assets/Contact.jpg')] rounded-t-lg h-96 w-full bg-cover bg-center"></figure>
        <h2 className="text-white font-bold text-3xl">Get In Touch!</h2>

        <div className="text-white flex justify-start flex-col gap-4 p-10">
          <p className="font-bold">
            Feel free to reach out to me for any questions or just to say hi!
          </p>
          <p className="font-semibold">
            Email: <span className="font-default">email1234@email.com</span>{" "}
          </p>
          <p className="font-semibold">
            Phone: <span className="font-default">123-456-7890</span>
          </p>
          <p className="font-semibold">
            Address:{" "}
            <span className="font-default">
              1234 Address St. City, State 12345
            </span>
          </p>
        </div>
      </motion.article>
    </section>
  );
};

export default Contact;
