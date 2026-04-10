/*
 * Design: Structured Elegance — Neo-Corporate
 * Partners: Deep blue background
 * Only Fronius, Seraphim, Huawei logo buttons linking to their sites
 * Removed all marquee brand names
 */

const FRONIUS_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/fronius-new_d611bd11.png";
const SERAPHIM_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/seraphim-logo_ac2e4fde.png";
const HUAWEI_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/huawei-logo_065e4164.png";

const featuredPartners = [
  { name: "Fronius", logo: FRONIUS_LOGO, url: "https://www.fronius.com/en" },
  { name: "Seraphim", logo: SERAPHIM_LOGO, url: "https://www.seraphim-energy.com/" },
  { name: "Huawei", logo: HUAWEI_LOGO, url: "https://www.huawei.com/en/" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#0D3B7A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
          Partner Brands
        </span>
        <h2
          className="text-white leading-[1.1] tracking-tight mb-3 mx-auto"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
          }}
        >
          Backed by the Industry's
          <br />
          Most Trusted Names
        </h2>
        <p className="text-white/36 text-[0.95rem] font-light max-w-[520px] mx-auto leading-relaxed mb-14">
          We source exclusively from verified, globally recognized manufacturers
          — quality you can depend on.
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14">
          {featuredPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.06] border border-white/[0.1] rounded-xl px-10 py-6 flex items-center justify-center hover:bg-white/[0.12] hover:border-[#F7931E]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 lg:h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
