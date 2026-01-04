import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || "#about");
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header
      className={[
        "fixed left-0 top-0 z-50 w-full",
        "transition-all duration-200",
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-black/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo (keep it inside hero visually by letting hero start behind navbar) */}
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-black/20 bg-gray-600 text-sm font-semibold">
              L
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-wide">
              LAVA
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={[
                    "relative text-sm font-medium text-black/80 transition-colors",
                    "hover:text-black",
                    isActive ? "text-black" : "",
                  ].join(" ")}
                >
                  {l.label}
                  <span
                    className={[
                      "absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full transition-transform duration-200",
                      isActive
                        ? "scale-x-100 bg-black/80"
                        : "scale-x-0 bg-black/40 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-semibold text-black/80 hover:bg-white transition"
            >
              Book now
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-semibold text-black/80"
            aria-label="Open menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-80" : "max-h-0",
          ].join(" ")}
        >
          <div className="pb-4 pt-2">
            <div className="flex flex-col gap-2 rounded-2xl border border-black/10 bg-white/90 p-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-black/80 hover:bg-black/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-black px-3 py-2 text-center text-sm font-semibold text-white hover:opacity-90"
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
