/*
 * Design: Structured Elegance — Neo-Corporate
 * Project Detail: Full page view of a single project
 * Shows project image(s), description, details table
 * Accessible to ALL users (view only)
 */
import { useParams, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { getAllProjects } from "@/components/ProjectsSection";
import { useEffect, useState } from "react";
import type { Project } from "@/components/ProjectsSection";

const APOLLO_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/apollo-logo_9d73a455.png";

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const allProjects = getAllProjects();
    const found = allProjects.find((p) => p.id === params.id);
    setProject(found || null);
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <p className="text-[#6b7280] text-lg mb-4">Project not found.</p>
        <button
          onClick={() => setLocation("/")}
          className="text-[#F7931E] font-semibold hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  const images = project.images || [project.image];

  return (
    <div className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="bg-[#0D3B7A] py-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2.5 text-white no-underline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <img src={APOLLO_LOGO} alt="Apollo Solar" className="w-8 h-8 object-contain" />
            <span className="text-base font-black">
              Apollo <span className="text-[#F7931E]">Solar</span>
            </span>
          </a>
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/60 hover:text-[#F7931E] text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#F7931E] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {project.tag}
          </span>
          <h1
            className="text-white text-3xl lg:text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content — view only for all users */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2
              className="text-[#0D3B7A] text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Project Description
            </h2>
            <p className="text-[#4a5568] text-[0.95rem] leading-[1.85] font-light mb-8">
              {project.description}
            </p>

            {/* Additional images */}
            {images.length > 1 && (
              <div>
                <h3
                  className="text-[#0D3B7A] text-lg font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-[#E5E5E5]">
                      <img
                        src={img}
                        alt={`${project.title} - ${i + 1}`}
                        className="w-full h-[220px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Details */}
          <div>
            <div className="bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl p-6">
              <h3
                className="text-[#0D3B7A] text-lg font-bold mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Project Details
              </h3>
              <div className="space-y-4">
                {project.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex justify-between items-start border-b border-[#E5E5E5] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-[#6b7280] text-sm font-medium">
                      {detail.label}
                    </span>
                    <span className="text-[#0D3B7A] text-sm font-semibold text-right max-w-[55%]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/"
              className="mt-6 w-full inline-flex items-center justify-center bg-[#F7931E] hover:bg-[#FDB95B] text-[#0D3B7A] font-semibold text-sm px-6 py-3 rounded-full no-underline transition-all duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
