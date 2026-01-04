import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";

const destinations = {
  lava: {
    title: "BLACK SAND BEACH",
    desc: "Volcanic coastlines shaped by fire and ocean.",
  },
  timor: {
    title: "UNTAMED COAST",
    desc: "Remote shores where nature still rules.",
  },
  lombok: {
    title: "ENDLESS HORIZONS",
    desc: "Quiet landscapes far from the crowds.",
  },
};

export default function Hero() {
  const [active, setActive] = useState("lava");
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full text-white">
      {/* ================= HERO IMAGE ================= */}
      <div className="relative h-140 md:h-160 w-full overflow-hidden">
        <motion.img
          src="hero.jpg"
          alt="Lava beach"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/40" />

        {/* Navbar overlay */}
        <div className="absolute inset-x-0 top-0 z-30">
          <Navbar />
        </div>

        {/* ================= HERO TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute left-8 top-40 md:left-16 md:top-48 z-20 max-w-lg"
        >
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            Lava
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-4"
            >
              <p className="text-[11px] tracking-[0.4em] text-white/70">
                {destinations[active].title}
              </p>

              <div className="mt-4 h-px w-9 bg-white/40" />

              <p className="mt-6 text-sm leading-7 text-white/50">
                {destinations[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ================= DESTINATION CHIPS ================= */}
          <div className="mt-10 flex gap-4">
            {Object.keys(destinations).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={[
                  "rounded-full border px-4 py-1 text-[10px] tracking-[0.35em] hover:cursor-pointer",
                  active === key
                    ? "border-white/60 text-white"
                    : "border-white/25 text-white/50 hover:border-white/50",
                ].join(" ")}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= SLOW TRAVELLING SECTION ================= */}
      <div className="bg-[#3a3a3a] py-24 text-center">
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto rounded-full border border-white/30 px-10 py-3 text-[11px] tracking-[0.35em] text-white/80 hover:border-white/60 hover:cursor-pointer"
        >
          SLOW TRAVELLING
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-12 max-w-2xl px-6">
                <p className="text-[11px] tracking-[0.35em] text-white/55">
                  A TRAVEL BLOG
                </p>

                <p className="mt-8 text-sm leading-8 text-white/50">
                  We love to provide the most authentic content from athletes,
                  adventurers, explorers, travelers around the world. Our
                  long-term mission is to educate, inspire and enable all people
                  to experience and protect wilderness.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
