/*
 * Design: Structured Elegance — Neo-Corporate
 * Hero: Full-viewport with dark blue overlay on solar panel image
 * Left-aligned content, large serif heading, orange accent elements
 */
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/hero-bg-LYdowMTxVjJHDLoXrWRnZ3.webp";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-animate]");
    children.forEach((child, i) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 150 + i * 120);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, rgba(13,59,122,0.92) 0%, rgba(21,78,159,0.85) 50%, rgba(13,59,122,0.92) 100%), url('${HERO_BG}') center/cover no-repeat`,
      }}
    >
      {/* Subtle geometric accent */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.06] hidden lg:block" />
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-[#F7931E]/[0.08] hidden lg:block" />
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[160px] h-[160px] rounded-full bg-[#F7931E]/[0.06] hidden lg:block" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Heading */}
        <h1
          data-animate
          className="text-white leading-[1.05] tracking-tight mb-6 max-w-[700px] opacity-0 translate-y-6 transition-all duration-700"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          Harness The
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #F7931E" }}>
            Power of the Sun
          </span>
        </h1>

        {/* Description */}
        <p
          data-animate
          className="text-white/50 text-lg font-light max-w-[440px] mb-8 leading-relaxed opacity-0 translate-y-6 transition-all duration-700"
        >
          Premium solar solutions for homes, businesses, and beyond. Where
          cutting-edge technology meets sustainable living.
        </p>

        {/* Actions */}
        <div
          data-animate
          className="flex flex-wrap gap-4 items-center opacity-0 translate-y-6 transition-all duration-700"
        >
          <a
            href="#projects"
            className="inline-flex items-center bg-[#F7931E] hover:bg-[#FDB95B] text-[#0D3B7A] font-semibold text-[0.9rem] px-8 py-3.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#F7931E]/20"
          >
            View Our Projects
          </a>
        </div>
      </div>
    </section>
  );
}
