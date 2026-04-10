/*
 * Design: Structured Elegance — Neo-Corporate
 * Philosophy: Now Vision & Mission format
 * Deep blue background, formal layout
 */
import { Eye, Target } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#0D3B7A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
          Our Philosophy
        </span>
        <h2
          className="text-white leading-[1.1] tracking-tight mb-14"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
          }}
        >
          Guided by Purpose
          <br />
          and Commitment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white/[0.06] border border-white/[0.1] rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#F7931E]/15 flex items-center justify-center">
                <Eye size={22} className="text-[#F7931E]" />
              </div>
              <h3
                className="text-white text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vision
              </h3>
            </div>
            <p className="text-white/55 text-[0.95rem] leading-[1.85] font-light">
              To help build a cleaner and more sustainable future by accelerating
              the adoption of renewable energy technologies and enabling
              communities to harness the power of the sun.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/[0.06] border border-white/[0.1] rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#F7931E]/15 flex items-center justify-center">
                <Target size={22} className="text-[#F7931E]" />
              </div>
              <h3
                className="text-white text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mission
              </h3>
            </div>
            <p className="text-white/55 text-[0.95rem] leading-[1.85] font-light">
              To provide reliable, efficient, and economically viable solar energy
              solutions through strong engineering, quality installations, and
              partnerships with globally recognized renewable energy technology
              manufacturers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
