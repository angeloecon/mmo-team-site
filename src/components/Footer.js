
export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-zinc-500 py-10 text-center border-t border-purple-900/50 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 bg-purple-600/10 blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-heading text-2xl md:text-3xl text-white mb-2 tracking-widest drop-shadow-md">
          CHOSEN <span className="text-purple-500">ONES</span>
        </p>

        <p className="font-sub-heading text-md md:text-lg text-cyan-400 mb-4 tracking-[0.15em] uppercase">
          {/* Forging our legacy -- ??  */}
          The Chosen Path <span className="text-zinc-700 mx-2">|</span> Est.
          2022
        </p>

        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-8"></div>

        {/* Copyright / Disclaimer / creator*/}
        <div className="font-sans text-xs text-zinc-600 max-w-2xl leading-relaxed space-y-2">
          <p>
            This site is not affiliated with, endorsed, or sponsored by PokeMMO
            or Nintendo.
          </p>
          <p>
            Pokémon and all respective names are trademark &copy; of Nintendo.
          </p>

          <p className="my-0">© <span className="text-purple-400 py-0">[CHSN]Rieri</span></p>
          {/* Pangit Result */}
          {/* <GlitchText text={"[CHSN]Rieri"} className={"text-purple-500 drop-shadow-[0_0_15px_rgba(167,139,250,0.8)] font-heading"}/> */}
        </div>
      </div>
    </footer>
  );
}
