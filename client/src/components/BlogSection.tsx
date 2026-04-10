/*
 * Design: Structured Elegance — Neo-Corporate
 * Blog: White background, editorial-style blog cards
 * Featured article + sidebar smaller articles
 */
import { toast } from "sonner";

const articles = [
  {
    featured: true,
    gradient: "from-[#0D3B7A] to-[#154E9F]",
    emoji: "☀️",
    category: "Deep Dive",
    title: "Monocrystalline vs Polycrystalline: Which Solar Panel is Right for You in 2025?",
    desc: "A comprehensive breakdown of efficiency, cost, lifespan, and best-use scenarios to help you make the smartest investment for your property.",
    date: "Jun 12, 2025",
    readTime: "8 min read",
    author: "Apollo Team",
  },
  {
    featured: false,
    gradient: "from-[#2C6CCF] to-[#154E9F]",
    emoji: "🔋",
    category: "Tips",
    title: "How to Maximize Your Battery Storage Life",
    date: "May 28, 2025",
    readTime: "5 min read",
  },
  {
    featured: false,
    gradient: "from-[#D47A0A] to-[#F7931E]",
    emoji: "💰",
    category: "Finance",
    title: "Solar Financing in the Philippines: A Complete 2025 Guide",
    date: "May 14, 2025",
    readTime: "6 min read",
  },
  {
    featured: false,
    gradient: "from-[#1a6b3a] to-[#2a8a4a]",
    emoji: "🏘️",
    category: "Installation",
    title: "5 Common Solar Installation Mistakes — and How to Avoid Them",
    date: "Apr 30, 2025",
    readTime: "4 min read",
  },
];

export default function BlogSection() {
  const handleClick = () => {
    toast("Feature coming soon", {
      description: "Blog articles will be available in a future update.",
    });
  };

  const featured = articles.find((a) => a.featured)!;
  const sidebar = articles.filter((a) => !a.featured);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Solar Insights & Tips
            </span>
            <h2
              className="text-[#0D3B7A] leading-[1.1] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
              }}
            >
              Knowledge That
              <br />
              Powers Decisions
            </h2>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured Article */}
          <div
            onClick={handleClick}
            className="lg:col-span-3 rounded-xl overflow-hidden border border-[#E5E5E5] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div
              className={`bg-gradient-to-br ${featured.gradient} p-6 min-h-[200px] flex flex-col justify-end relative overflow-hidden`}
            >
              <span className="absolute top-4 right-4 text-5xl opacity-10">
                {featured.emoji}
              </span>
              <span className="bg-[#F7931E] text-[#0D3B7A] text-[0.6rem] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full w-fit">
                {featured.category}
              </span>
            </div>
            <div className="p-6">
              <h3
                className="text-[#0D3B7A] text-xl font-bold leading-[1.3] mb-3 group-hover:text-[#2C6CCF] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featured.title}
              </h3>
              <p className="text-[#6b7280] text-[0.82rem] leading-[1.6] mb-4">
                {featured.desc}
              </p>
              <div className="flex gap-4 text-[0.72rem] text-[#9ca3af]">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
                <span>{featured.author}</span>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {sidebar.map((article) => (
              <div
                key={article.title}
                onClick={handleClick}
                className="rounded-xl overflow-hidden border border-[#E5E5E5] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`bg-gradient-to-br ${article.gradient} p-4 min-h-[80px] flex items-end relative overflow-hidden`}
                >
                  <span className="absolute top-2 right-3 text-3xl opacity-10">
                    {article.emoji}
                  </span>
                  <span className="bg-[#F7931E] text-[#0D3B7A] text-[0.55rem] font-bold tracking-[0.1em] uppercase px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3
                    className="text-[#0D3B7A] text-[0.92rem] font-bold leading-[1.3] mb-2 group-hover:text-[#2C6CCF] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {article.title}
                  </h3>
                  <div className="flex gap-3 text-[0.68rem] text-[#9ca3af]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
