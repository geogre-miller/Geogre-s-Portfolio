import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold text-white"
      >
        Let&apos;s Work Together
      </motion.h2>
      <div className="mx-auto max-w-2xl rounded-lg border border-stone-800 bg-stone-950/70 p-6 text-center">
        <p className="mb-6 text-stone-300">
          Open to frontend and full-stack opportunities where React, Next.js,
          product thinking, and reliable execution matter.
        </p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-3 text-stone-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-3 text-stone-400"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-cyan-200"
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
