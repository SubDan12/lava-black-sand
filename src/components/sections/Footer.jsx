export default function Footer() {
  return (
    <footer className="bg-[#343434] px-6 py-8 text-white/70 md:px-10">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold tracking-wide">L</div>

        <div className="flex gap-6 text-[10px] tracking-[0.22em]">
          <a className="hover:text-white transition" href="#about">
            ABOUT
          </a>
          <a className="hover:text-white transition" href="#articles">
            ARTICLES
          </a>
          <a className="hover:text-white transition" href="#subscribe">
            SUBSCRIBE
          </a>
        </div>
      </div>
    </footer>
  );
}
