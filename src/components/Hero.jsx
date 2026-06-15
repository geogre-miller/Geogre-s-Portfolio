import profilePic from "../assets/profilepic.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import resume from "../assets/Xieng Trinh Quang Huy Full-stack Developer.pdf";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Hero = () => {
  return (
    <section className="pb-16 pt-8 lg:pb-28">
      <div className="flex flex-wrap items-center gap-y-12">
        <div className="order-2 w-full lg:order-2 lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Xieng Trinh Quang Huy"
              className="aspect-square w-full max-w-[420px] rounded-2xl border border-stone-800 object-cover shadow-2xl shadow-cyan-950/30"
              width={450}
              height={450}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="order-1 w-full lg:order-1 lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-6 flex flex-col items-center lg:items-start"
          >
            <motion.p
              variants={childVariants}
              className="mb-4 rounded-full border border-gray-500 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-transparent"
            >
              Available for Frontend / Full-stack roles
            </motion.p>
            <motion.h2
              variants={childVariants}
              className="pb-2 text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-left lg:text-8xl"
            >
              Quang Huy
            </motion.h2>
            <motion.h2
              variants={childVariants}
              className="pb-2 text-2xl tracking-tight text-stone-400"
            >
              (George Miller)
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full-stack Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-2xl py-6 text-center text-lg leading-8 text-stone-300 lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={childVariants}
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition-colors duration-300"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-100 "
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
