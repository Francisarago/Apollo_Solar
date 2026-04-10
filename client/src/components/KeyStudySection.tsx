/*
 * Design: Structured Elegance — Neo-Corporate
 * Key Study: White background, case study cards with data highlights
 * Professional data presentation, orange accent on key metrics
 */
import { TrendingUp, Zap, DollarSign, BarChart3 } from "lucide-react";

const KEY_STUDY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/key-study-chart-fBRFYt7hw2DeiH8odaRrRg.webp";

const caseStudies = [
  {
    icon: TrendingUp,
    title: "Residential ROI Analysis",
    subtitle: "Metro Manila, 2024",
    metric: "4.2 yrs",
    metricLabel: "Average Payback Period",
    desc: "A comprehensive study of 500+ residential installations across Metro Manila showed an average payback period of 4.2 years, with monthly savings of up to 85% on electricity bills.",
    highlights: [
      { label: "Avg. Monthly Savings", value: "₱12,400" },
      { label: "System Size", value: "5–10 kW" },
      { label: "CO₂ Offset/Year", value: "6.2 tons" },
    ],
  },
  {
    icon: Zap,
    title: "Commercial Efficiency Study",
    subtitle: "Cebu Industrial Zone, 2024",
    metric: "32%",
    metricLabel: "Energy Cost Reduction",
    desc: "Our 200kW installation at a Cebu manufacturing facility demonstrated a 32% reduction in total energy costs within the first year, with peak shaving benefits during high-demand periods.",
    highlights: [
      { label: "Annual Savings", value: "₱2.8M" },
      { label: "System Capacity", value: "200 kW" },
      { label: "Grid Independence", value: "68%" },
    ],
  },
  {
    icon: DollarSign,
    title: "Net Metering Impact",
    subtitle: "Nationwide Study, 2023–2024",
    metric: "₱8.5M",
    metricLabel: "Total Credits Earned",
    desc: "Analysis of 1,200 net metering participants across the Philippines revealed cumulative energy credits of ₱8.5M, proving the financial viability of solar investment for Filipino homeowners.",
    highlights: [
      { label: "Participants", value: "1,200+" },
      { label: "Avg. Credit/Month", value: "₱5,900" },
      { label: "Excess Generation", value: "22%" },
    ],
  },
];

export default function KeyStudySection() {
  return (
    <section id="key-study" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14">
          <div>
            <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Key Study
            </span>
            <h2
              className="text-[#0D3B7A] leading-[1.1] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
              }}
            >
              Data-Driven Results
              <br />
              That Speak for Themselves
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#6b7280] text-[0.95rem] font-light leading-relaxed max-w-[480px]">
              Our research and case studies demonstrate the measurable impact of
              solar energy adoption across residential, commercial, and
              community sectors in the Philippines.
            </p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-12 h-[240px] lg:h-[320px] relative">
          <img
            src={KEY_STUDY_IMG}
            alt="Solar energy analytics dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B7A]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 lg:left-10">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 size={18} className="text-[#F7931E]" />
              <span className="text-white/70 text-xs font-semibold tracking-wider uppercase">
                Performance Analytics
              </span>
            </div>
            <p className="text-white text-lg lg:text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Real-time monitoring across 50,000+ installations nationwide
            </p>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="border border-[#E5E5E5] rounded-xl p-6 hover:border-[#F7931E]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#154E9F]/8 flex items-center justify-center shrink-0">
                  <study.icon size={20} className="text-[#154E9F]" />
                </div>
                <div>
                  <h4 className="text-[#0D3B7A] text-[0.9rem] font-semibold leading-tight">
                    {study.title}
                  </h4>
                  <span className="text-[#9ca3af] text-xs">{study.subtitle}</span>
                </div>
              </div>

              {/* Key Metric */}
              <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4 text-center">
                <div
                  className="text-[#F7931E] text-3xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {study.metric}
                </div>
                <div className="text-[#6b7280] text-xs mt-1">
                  {study.metricLabel}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#4a5568] text-[0.82rem] leading-[1.65] mb-4">
                {study.desc}
              </p>

              {/* Highlights */}
              <div className="border-t border-[#E5E5E5] pt-4 space-y-2">
                {study.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex justify-between items-center text-[0.78rem]"
                  >
                    <span className="text-[#9ca3af]">{h.label}</span>
                    <span className="text-[#0D3B7A] font-semibold">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
