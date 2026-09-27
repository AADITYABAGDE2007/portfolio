import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "../../portfolio/projectsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Aaditya Bagde",
    };
  }

  return {
    title: `${project.title} — Project Details | Aaditya Bagde`,
    description: project.tagline || project.desc,
    openGraph: {
      title: `${project.title} — ${project.category} | Aaditya Bagde`,
      description: project.desc,
      url: `https://portfolio-aadityabagde.vercel.app/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find previous and next projects for quick navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#040608] text-[#f0f0f0] selection:bg-[var(--red)] selection:text-white relative overflow-x-hidden">
      {/* Background Grid & Atmospheric Red Glow */}
      <div className="fixed inset-0 web-bg opacity-15 pointer-events-none" />
      <div
        className="fixed top-0 right-1/4 w-[500px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-15"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
      />
      <div
        className="fixed bottom-10 left-10 w-[400px] h-[400px] pointer-events-none rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #ff2d44 0%, transparent 70%)" }}
      />

      {/* Top Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-[#040608]/85">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            <span className="text-[var(--red)] transform group-hover:-translate-x-1 transition-transform duration-300 text-sm">
              &larr;
            </span>
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/aaditya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center text-[9px] sm:text-xs tracking-[0.18em] uppercase px-3 sm:px-4 py-2 border border-white/20 bg-white/[0.02] text-white/90 font-semibold transition-colors duration-500"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              <span className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0 bg-white" />
              <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">
                Resume PDF
              </span>
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-1.5 text-[9px] sm:text-xs tracking-[0.18em] uppercase px-3 sm:px-4 py-2 border border-[rgba(232,23,44,0.4)] bg-[rgba(232,23,44,0.06)] text-white font-semibold transition-colors duration-500"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              <span className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0 bg-[var(--red)]" />
              <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">
                GitHub Repo
              </span>
              <span className="relative z-10 transition-colors duration-500 text-[var(--red)] group-hover/btn:text-black">
                &rarr;
              </span>
            </a>
            <Link
              href="/#contact"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center text-[9px] sm:text-xs tracking-[0.18em] uppercase px-3.5 sm:px-4 py-2 border border-white bg-white text-black font-bold transition-colors duration-500 hidden sm:inline-flex"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              <span className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0 bg-[var(--red)]" />
              <span className="relative z-10 transition-colors duration-500 text-black group-hover/btn:text-white">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24">
        {/* Project Hero Header */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[var(--red)] tracking-widest px-2.5 py-1 border border-[rgba(232,23,44,0.3)] bg-[rgba(232,23,44,0.05)]">
              PROJECT {project.n}
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-white/50" style={{ fontFamily: "sans-serif" }}>
              {project.category}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95]"
            style={{ fontFamily: "sans-serif" }}
          >
            {project.title}
          </h1>

          <p
            className="text-lg sm:text-2xl text-white/75 font-serif italic max-w-3xl leading-relaxed mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;{project.tagline}&rdquo;
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white/[0.02] border border-white/10 rounded-sm">
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-white/40 mb-1" style={{ fontFamily: "sans-serif" }}>
                Role
              </div>
              <div className="text-sm font-semibold text-white" style={{ fontFamily: "sans-serif" }}>
                {project.role}
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-white/40 mb-1" style={{ fontFamily: "sans-serif" }}>
                Timeline
              </div>
              <div className="text-sm font-semibold text-white" style={{ fontFamily: "sans-serif" }}>
                {project.timeline}
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-white/40 mb-1" style={{ fontFamily: "sans-serif" }}>
                Classification
              </div>
              <div className="text-sm font-semibold text-[var(--red)]" style={{ fontFamily: "sans-serif" }}>
                {project.stat}
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-white/40 mb-1" style={{ fontFamily: "sans-serif" }}>
                Repository
              </div>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden inline-flex items-center gap-1.5 px-3 py-1.5 border border-[rgba(232,23,44,0.4)] bg-[rgba(232,23,44,0.06)] text-xs font-semibold text-white transition-colors duration-500"
                style={{ fontFamily: "sans-serif", textDecoration: "none" }}
              >
                <span className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0 bg-[var(--red)]" />
                <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">
                  Source Code
                </span>
                <span className="relative z-10 transition-colors duration-500 text-[var(--red)] group-hover/btn:text-black">
                  &#8599;
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Overview & Problem Statement Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-24">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-4" style={{ fontFamily: "sans-serif" }}>
              // 01. Comprehensive Overview
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "sans-serif" }}>
              What this project delivers.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/65 font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
              {project.overview}
            </p>
            <div className="p-5 border-l-2 border-[var(--red)] bg-white/[0.015]">
              <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2 font-mono">
                ARCHITECTURAL NOTE
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                {project.architectureNotes}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-start p-6 sm:p-8 bg-[#080a0e] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[var(--red)] to-transparent" />
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-4" style={{ fontFamily: "sans-serif" }}>
              // 02. Problem Solved
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5" style={{ fontFamily: "sans-serif" }}>
              The Challenge & Need
            </h3>
            <p className="text-sm leading-relaxed text-white/65 font-serif" style={{ fontFamily: "Georgia, serif" }}>
              {project.problemSolved}
            </p>
          </div>
        </section>

        {/* Key Engineering Highlights */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-2" style={{ fontFamily: "sans-serif" }}>
              // 03. Engineering Highlights
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white" style={{ fontFamily: "sans-serif" }}>
              Key Accomplishments & Implementation Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-[rgba(232,23,44,0.3)] transition-colors duration-300 flex items-start gap-4"
              >
                <span className="text-sm font-mono text-[var(--red)] font-bold mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/70 font-sans">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-2" style={{ fontFamily: "sans-serif" }}>
              // 04. Capabilities & Modules
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white" style={{ fontFamily: "sans-serif" }}>
              Core Features Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#080a0e] border border-white/10 hover:border-[var(--red)]/40 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-sm bg-[var(--red)]/10 text-[var(--red)] flex items-center justify-center font-mono font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: "sans-serif" }}>
                    {feat.title}
                  </h4>
                  <p className="text-xs text-white/55 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Breakdown */}
        <section className="mb-20 sm:mb-28 p-6 sm:p-10 bg-white/[0.015] border border-white/10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-2" style={{ fontFamily: "sans-serif" }}>
              // 05. Technology Arsenal
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "sans-serif" }}>
              Built With Modern Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                Frontend UI
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.frontend.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white/80"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            {project.techStack.backend && project.techStack.backend.length > 0 && (
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                  Backend Services
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.backend.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white/80"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Database */}
            {project.techStack.database && project.techStack.database.length > 0 && (
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                  Persistence
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.database.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white/80"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                Dev & Workflow
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.tools.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white/80"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Project Navigation (Prev / Next) */}
        <section className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start text-left w-full sm:w-auto"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                &larr; Previous Project
              </span>
              <span className="text-lg font-bold text-white group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href="/#projects"
            className="group/btn relative overflow-hidden text-xs uppercase tracking-[0.3em] px-6 py-3 border border-white/20 bg-white/[0.02] text-white transition-colors duration-500"
            style={{ fontFamily: "sans-serif", textDecoration: "none" }}
          >
            <span className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0 bg-[var(--red)]" />
            <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black font-semibold">
              All Projects Grid
            </span>
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end text-right w-full sm:w-auto"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                Next Project &rarr;
              </span>
              <span className="text-lg font-bold text-white group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </section>
      </main>
    </div>
  );
}
