/*
 * Design: Structured Elegance — Neo-Corporate
 * Innovation: Deep blue background, featured tech card + grid of innovations
 * Orange accent numbers, clean card layout
 */

const innovations = [
  {
    num: "01",
    title: "AI Energy Management",
    desc: "Machine learning optimizes charge cycles in real-time, extending battery life by up to 40% automatically.",
  },
  {
    num: "02",
    title: "Bi-Facial Solar Glass",
    desc: "Transparent panels generating power from both surfaces — ideal for skylights and building facades.",
  },
  {
    num: "03",
    title: "Flexible Solar Film",
    desc: "Ultra-thin rollable photovoltaics for curved rooftops, vehicles, and marine applications.",
  },
  {
    num: "04",
    title: "IoT Grid Monitoring",
    desc: "Real-time diagnostics with AI fault detection, keeping your array at peak performance 24/7.",
  },
  {
    num: "05",
    title: "Micro-Inverter 3.0",
    desc: "Per-panel optimization boosting whole-system output by up to 25% vs traditional string setups.",
  },
  {
    num: "06",
    title: "Self-Cleaning Nano Coat",
    desc: "Hydrophobic nano-coating repels dust, maintaining full output without manual cleaning intervention.",
  },
];

export default function InnovationSection() {
  return (
    <section id="innovation" className="py-20 lg:py-28 bg-[#154E9F]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Latest Innovation
          </span>
          <h2
            className="text-white leading-[1.1] tracking-tight mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
            }}
          >
            The Science Behind
            <br />
            Tomorrow's Energy
          </h2>
          <p className="text-white/40 text-[0.95rem] font-light max-w-[480px] leading-relaxed">
            Breakthroughs redefining how the world harvests and stores solar
            power in 2025.
          </p>
        </div>

        {/* Layout: Featured + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {/* Featured Card */}
          <div className="bg-[#0D3B7A] p-8 lg:p-10 flex flex-col justify-between lg:row-span-2">
            <div>
              <span className="inline-block bg-[#F7931E]/12 border border-[#F7931E]/25 text-[#F7931E] text-[0.68rem] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-6">
                ✦ Flagship Technology
              </span>
              <h3
                className="text-white text-xl lg:text-2xl font-bold leading-[1.2] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Perovskite Tandem Solar Cells
              </h3>
              <p className="text-white/42 text-[0.85rem] leading-[1.7] mb-8">
                A revolutionary two-layer cell architecture that captures a wider
                solar spectrum — delivering unprecedented conversion efficiency
                never before achievable in residential solar panels.
              </p>
            </div>
            <div>
              <div
                className="text-[#F7931E] text-5xl font-bold leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                33%
              </div>
              <div className="text-white/32 text-xs mt-1">
                Conversion Efficiency Record
              </div>
            </div>
          </div>

          {/* Innovation Cards Grid */}
          {innovations.map((item) => (
            <div
              key={item.num}
              className="bg-[#113D7A] p-6 hover:bg-[#134589] transition-colors duration-300 relative group"
            >
              <div
                className="text-[#F7931E]/15 text-4xl font-bold leading-none mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.num}
              </div>
              <h4 className="text-white text-[0.9rem] font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-white/36 text-[0.78rem] leading-[1.6]">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7931E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-350" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
