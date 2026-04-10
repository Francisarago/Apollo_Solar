/*
 * Design: Structured Elegance — Neo-Corporate
 * Footer: Dark blue background
 * COMPANY: About Apollo Solar, Partner Brands, Philosophy
 * CONTACT US: Phone numbers, Facebook link
 * Removed: Support column, Privacy Policy, Terms of Service, Sitemap
 * Updated: copyright to 2024 Apollo Solar Ventures, quote, description
 */
import { Phone, Facebook } from "lucide-react";

const APOLLO_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/apollo-logo_9d73a455.png";

const companyLinks = [
  { label: "About Apollo Solar", href: "#about" },
  { label: "Partner Brands", href: "#partners" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#091F3F] pt-16 lg:pt-20 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2.5 text-white no-underline mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <img
                src={APOLLO_LOGO}
                alt="Apollo Solar Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-base font-black">
                Apollo <span className="text-[#F7931E]">Solar</span>
              </span>
            </a>
            <p className="text-white/32 text-[0.84rem] leading-[1.7] font-light max-w-[260px] mb-4">
              We are not selling just for profit, we advocate the utilization of
              free and natural energy from the Sun. Thru Solar Power we reduce
              cost of electricity production - a major contributor of poverty.
            </p>
            <p
              className="text-[#F7931E]/45 text-[0.9rem] italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Alone we can do so little, Together we can do so much."
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white/85 text-[0.68rem] font-semibold tracking-[0.18em] uppercase mb-5">
              Company
            </h5>
            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/35 text-[0.83rem] font-light no-underline mb-2.5 hover:text-[#F7931E] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-white/85 text-[0.68rem] font-semibold tracking-[0.18em] uppercase mb-5">
              Contact Us
            </h5>
            <div className="flex items-start gap-2.5 mb-3">
              <Phone size={14} className="text-[#F7931E] mt-0.5 shrink-0" />
              <div>
                <a
                  href="tel:0432331359"
                  className="block text-white/45 text-[0.83rem] font-light no-underline hover:text-[#F7931E] transition-colors duration-200"
                >
                  043 233 1359
                </a>
                <a
                  href="tel:09053399288"
                  className="block text-white/45 text-[0.83rem] font-light no-underline hover:text-[#F7931E] transition-colors duration-200 mt-1"
                >
                  0905 3399 288
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mt-4">
              <Facebook size={14} className="text-[#F7931E] shrink-0" />
              <a
                href="https://www.facebook.com/Apollosolarlipa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 text-[0.83rem] font-light no-underline hover:text-[#F7931E] transition-colors duration-200"
              >
                Apollo Solar Lipa
              </a>
            </div>
          </div>
        </div>

        {/* Scripture */}
        <div className="border-t border-white/[0.06] border-b border-b-white/[0.06] py-6 mb-6 text-center">
          <blockquote
            className="text-white/28 text-[0.95rem] italic leading-[1.6]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "The earth is the Lord's, and everything in it, the world, and all
            who live in it"
          </blockquote>
          <cite className="block mt-2 text-[#F7931E]/35 text-[0.68rem] not-italic tracking-[0.15em] uppercase">
            Psalm 24:1
          </cite>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <p className="text-white/20 text-[0.77rem]">
            © 2024 Apollo Solar Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
