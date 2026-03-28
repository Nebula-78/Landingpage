/** Maquette décorative d'une landing page dans le hero. */
export default function MockupCard() {
  return (
    <div
      className="relative flex justify-center"
      aria-hidden="true"       /* purement décoratif */
      role="presentation"
    >
      <div className="relative w-full max-w-[440px] animate-float">

        {/* Badge top-right */}
        <div className="absolute -top-3.5 -right-3.5 bg-gold text-cloud
                        px-4 py-2 rounded-full text-xs font-bold
                        shadow-gold whitespace-nowrap z-10">
          🚀 Livré en 1 weekend
        </div>

        {/* Browser window */}
        <div className="w-full bg-midnight-mid rounded-[20px] overflow-hidden
                        border border-cloud/[0.08]
                        shadow-[0_24px_80px_rgba(0,0,0,0.55),0_2px_8px_rgba(0,0,0,0.3)]">

          {/* Browser bar */}
          <div className="bg-[#252525] px-4 py-3 flex items-center gap-2 border-b border-cloud/[0.08]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="flex-1 bg-cloud/[0.08] border border-cloud/[0.08]
                            rounded-md h-6 mx-2 flex items-center px-2.5
                            text-[0.72rem] text-cloud/35">
              stevekouadio.com
            </div>
          </div>

          {/* Content preview */}
          <div className="p-5">
            {/* Hero block */}
            <div className="bg-gradient-to-br from-forest to-forest-light rounded-xl p-5 mb-3.5">
              <div className="h-2 bg-cloud/30 rounded mb-2 w-[85%]" />
              <div className="h-2 bg-cloud/30 rounded mb-2 w-[60%]" />
              <div className="h-2 bg-cloud/30 rounded mb-3 w-[40%]" />
              <span className="bg-gold text-white text-[0.7rem] font-bold px-3.5 py-1.5 rounded-full">
                Obtenir ma page →
              </span>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-3 gap-2 mb-3.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-cloud/[0.08] rounded-lg h-14 p-2">
                  <div className="h-1.5 bg-cloud/15 rounded mb-1.5" />
                  <div className="h-1.5 bg-forest/55 rounded mb-1.5 w-3/5" />
                  <div className="h-1 bg-cloud/15 rounded w-2/5" />
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {[{ num: '+3x', label: 'Conversions' }, { num: '48h', label: 'Livraison' }].map(
                ({ num, label }) => (
                  <div key={label} className="bg-gold/15 rounded-lg p-3 text-center">
                    <div className="font-serif font-bold text-gold-light">{num}</div>
                    <div className="text-[0.62rem] text-cloud/35 mt-0.5">{label}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Badge bottom-left */}
        <div className="absolute -bottom-3.5 -left-3.5
                        bg-midnight-mid border border-cloud/15
                        shadow-card px-3.5 py-2 rounded-xl
                        text-[0.75rem] font-semibold text-forest-muted
                        flex items-center gap-1.5 whitespace-nowrap">
          ✅ Design premium · Mobile-ready
        </div>
      </div>
    </div>
  );
}
