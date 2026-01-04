import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="border border-white/40 px-5 py-2 text-[11px] tracking-[0.35em] hover:cursor-pointer"
    >
      SUBSCRIBE
    </motion.button>
  );
}
