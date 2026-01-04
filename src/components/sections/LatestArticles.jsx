import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../animations";

export default function LatestArticles() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#3a3a3a] py-20 px-8"
    >
      <motion.h1 variants={fadeUp} className="text-center text-3xl mb-14">
        Latest articles
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.article
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
          >
            <motion.img
              src="/lombook.jpg"
              alt=""
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="aspect-3/4 w-full object-cover"
            />

            <div className="mt-4 text-sm tracking-wide">Article title</div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
