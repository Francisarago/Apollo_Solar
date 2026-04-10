/*
 * Design: Structured Elegance — Neo-Corporate
 * Projects: Shows ALL projects (default + admin-added) to every visitor
 * Regular users can only VIEW projects — no add/edit/delete controls
 * Admin adds projects via /admin/projects (password-protected)
 */
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

const PROJECT_FABSLAI = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/project-fabslai_3e010f0b.jpg";
const PROJECT_DR_JIAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/project-dr-jiao_0e590cbd.jpg";
const PROJECT_KATIGBAK_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/project-katigbak-1_ee03e0c3.jpg";
const PROJECT_KATIGBAK_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/project-katigbak-2_dd4d63cb.jpg";

export interface Project {
  id: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  images?: string[];
  description: string;
  details: { label: string; value: string }[];
}

export const PROJECTS_KEY = "apollo_projects";

export const defaultProjects: Project[] = [
  {
    id: "fabslai",
    tag: "Commercial",
    title: "FABSLAI Solar Installation",
    summary:
      "Solar installation that reduced electricity costs from approximately PHP 45,000 per month to around PHP 17,000 and eventually produced net metering credits of a negative amount -4,000.",
    image: PROJECT_FABSLAI,
    description:
      "Grid-tied solar photovoltaic installation for Fernando Air Base Savings and Loan Association, Inc. (FABSLAI) located in Lipa City, Batangas. Apollo Solar Ventures provided the engineering design, supply, installation, and commissioning of the solar power system. The system produces approximately 200–250 kWh per day or about 70,000–90,000 kWh annually. Due to strong solar production and net-metering export credits, the facility has experienced negative electricity bills during certain billing periods, demonstrating significant cost savings and effective renewable energy utilization.",
    details: [
      { label: "Installed Capacity", value: "50 kWp" },
      { label: "Daily Production", value: "200–250 kWh" },
      { label: "Annual Production", value: "70,000–90,000 kWh" },
      { label: "Location", value: "Lipa City, Batangas" },
    ],
  },
  {
    id: "dr-agnes-jiao",
    tag: "Residential",
    title: "Residential Solar System – Dr. Agnes Jiao",
    summary:
      "A residential rooftop solar installation that reduced monthly electricity costs from around PHP 10,000 to approximately PHP 2,000.",
    image: PROJECT_DR_JIAO,
    description:
      "A residential rooftop solar installation that reduced monthly electricity costs from around PHP 10,000 to approximately PHP 2,000. This project demonstrates the significant savings achievable through properly designed residential solar systems.",
    details: [
      { label: "Type", value: "Residential Rooftop" },
      { label: "Before Solar", value: "~PHP 10,000/month" },
      { label: "After Solar", value: "~PHP 2,000/month" },
      { label: "Savings", value: "~80%" },
    ],
  },
  {
    id: "katigbak-property",
    tag: "Off-Grid",
    title: "Off-Grid Solar Installation – Katigbak Property",
    summary:
      "A full off-grid solar system designed to provide complete energy independence for a private property installation. The solar panels are installed as perimeter walls.",
    image: PROJECT_KATIGBAK_1,
    images: [PROJECT_KATIGBAK_1, PROJECT_KATIGBAK_2],
    description:
      "A full off-grid solar system designed to provide complete energy independence for a private property installation. The solar panels are installed as perimeter walls, showcasing an innovative approach to solar panel placement that maximizes space utilization while providing both security fencing and energy generation.",
    details: [
      { label: "Type", value: "Off-Grid System" },
      { label: "Installation", value: "Perimeter Wall Panels" },
      { label: "Energy Independence", value: "100%" },
      { label: "Design", value: "Dual-purpose (fence + solar)" },
    ],
  },
];

/** Helper to get all projects (default + admin-added from localStorage) */
export function getAllProjects(): Project[] {
  try {
    const stored = localStorage.getItem(PROJECTS_KEY);
    if (stored) {
      const custom: Project[] = JSON.parse(stored);
      return [...defaultProjects, ...custom];
    }
  } catch {
    // ignore parse errors
  }
  return defaultProjects;
}

export default function ProjectsSection() {
  const [, setLocation] = useLocation();
  const [allProjects, setAllProjects] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    setAllProjects(getAllProjects());
  }, []);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#F7931E] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
          Apollo Projects
        </span>
        <h2
          className="text-[#0D3B7A] leading-[1.1] tracking-tight mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
          }}
        >
          Our Work Across
          <br />
          the Philippines
        </h2>
        <p className="text-[#6b7280] text-[0.95rem] font-light max-w-[520px] leading-relaxed mb-12">
          From residential homes to large-scale commercial facilities, explore
          our portfolio of successful solar installations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLocation(`/projects/${project.id}`)}
              className="group bg-white border border-[#E5E5E5] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#F7931E] text-white text-[0.7rem] font-semibold px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>

              {/* Content — view only, no edit/delete for regular users */}
              <div className="p-5">
                <h3
                  className="text-[#0D3B7A] text-lg font-bold mb-2 group-hover:text-[#F7931E] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#6b7280] text-[0.85rem] leading-[1.7] font-light line-clamp-3">
                  {project.summary}
                </p>
                <span className="inline-block mt-4 text-[#F7931E] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
