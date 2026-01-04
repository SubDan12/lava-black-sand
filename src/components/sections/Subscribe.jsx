import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function Subscribe() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#2f2f2f] py-24 px-8 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-medium tracking-wide">
        Subscribe
      </h2>

      <p className="mt-3 text-[11px] tracking-[0.35em] text-white/55">
        SIGN UP TO OUR NEWSLETTER
      </p>

      <div className="mx-auto mt-12 max-w-md">
        {/* INPUT */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          type="email"
          placeholder="Your email"
          className="w-full bg-transparent border-b border-white/30 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60"
        />

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mt-10 border border-white/40 px-10 py-3 text-[11px] tracking-[0.35em] text-white/80 hover:border-white/70 hover:text-white hover:cursor-pointer"
        >
          SUBSCRIBE
        </motion.button>
      </div>
    </motion.section>
  );
}
