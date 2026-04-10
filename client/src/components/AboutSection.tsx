/*
 * Design: Structured Elegance — Neo-Corporate
 * About Us: Formal two-column layout, no stats grid
 * Updated content per user request
 */

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
          About Us
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div>
            <h2
              className="text-[#0D3B7A] leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
              }}
            >
              Dedicated to Revolutionizing
              <br />
              How Energy Is Harnessed
            </h2>

            {/* Decorative line */}
            <div className="w-16 h-[3px] bg-[#F7931E] rounded-full" />
          </div>

          {/* Right: Content */}
          <div className="space-y-5">
            <p className="text-[#333] text-[0.95rem] leading-[1.8] font-light">
              Apollo Solar Ventures Inc. is a renewable energy engineering company
              dedicated to designing, installing, and implementing solar power
              systems for residential, commercial, agricultural, and utility-scale
              applications. The company focuses on transforming solar energy into
              measurable economic savings while contributing to environmental
              sustainability.
            </p>
            <p className="text-[#333] text-[0.95rem] leading-[1.8] font-light">
              Apollo Solar Ventures combines engineering expertise, experienced
              project management, and trusted global technology partners to deliver
              solar solutions tailored to the needs of each client. Whether the
              project is a residential rooftop system or a large solar farm, the
              company ensures reliable performance, efficiency, and long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
