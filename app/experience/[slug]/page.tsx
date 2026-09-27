import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EXPERIENCES_DATA, getExperienceBySlug } from "../../portfolio/experienceData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPERIENCES_DATA.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);

  if (!exp) {
    return {
      title: "Experience Not Found — Aaditya Bagde",
    };
  }

  return {
    title: `${exp.role} at ${exp.company} — Aaditya Bagde`,
    description: exp.tagline || exp.overview,
    openGraph: {
      title: `${exp.role} — ${exp.company} | Aaditya Bagde`,
      description: exp.overview,
      url: `https://portfolio-aadityabagde.vercel.app/experience/${exp.slug}`,
    },
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);

  if (!exp) {
    notFound();
  }

  const currentIndex = EXPERIENCES_DATA.findIndex((item) => item.slug === exp.slug);
  const prevExp = currentIndex > 0 ? EXPERIENCES_DATA[currentIndex - 1] : null;
  const nextExp = currentIndex < EXPERIENCES_DATA.length - 1 ? EXPERIENCES_DATA[currentIndex + 1] : null;

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
            href="/#experience"
            className="group inline-flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            <span className="text-[var(--red)] transform group-hover:-translate-x-1 transition-transform duration-300 text-sm">
              &larr;
            </span>
            <span>Back to Experience</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={exp.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-xs tracking-[0.18em] uppercase px-3.5 sm:px-4 py-2 border border-[rgba(232,23,44,0.5)] hover:border-[var(--red)] bg-[rgba(232,23,44,0.12)] hover:bg-[var(--red)] text-white font-bold transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(232,23,44,0.25)]"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              <span>View Certificate</span> &#8599;
            </a>
            <a
              href="/aaditya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-xs tracking-[0.18em] uppercase px-3 sm:px-4 py-2 border border-white/15 hover:border-white/40 text-white/80 hover:text-white transition-all duration-300 font-semibold hidden xs:inline-flex"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              Resume PDF
            </a>
            <Link
              href="/#contact"
              className="text-[9px] sm:text-xs tracking-[0.18em] uppercase px-3.5 sm:px-4 py-2 bg-white text-black font-bold hover:bg-white/90 transition-all duration-300 hidden sm:inline-flex"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24">
        {/* Experience Hero Header */}
        <section className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[var(--red)] tracking-widest px-2.5 py-1 border border-[rgba(232,23,44,0.3)] bg-[rgba(232,23,44,0.05)]">
              {exp.badge}
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-white/50" style={{ fontFamily: "sans-serif" }}>
              {exp.location}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4 leading-[0.95]"
            style={{ fontFamily: "sans-serif" }}
          >
            {exp.role}
          </h1>

          <div className="flex items-center gap-3 text-lg sm:text-2xl font-bold text-[var(--red)] mb-6 font-sans">
            <span>{exp.company}</span>
            <span className="text-white/30">—</span>
            <span className="text-white/60 font-mono text-sm sm:text-base font-normal">{exp.date}</span>
          </div>

          <p
            className="text-base sm:text-xl text-white/75 font-serif italic max-w-3xl leading-relaxed mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;{exp.tagline}&rdquo;
          </p>

          {/* Direct Certificate Banner */}
          <div className="p-6 sm:p-8 bg-[#080a0e] border border-[rgba(232,23,44,0.3)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(232,23,44,0.1)]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--red)] via-[#ff4757] to-transparent" />
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm border border-[var(--red)] bg-[var(--red)]/10 text-[var(--red)] flex items-center justify-center text-xl font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--red)] font-bold font-mono">
                    OFFICIAL CREDENTIAL
                  </span>
                  {exp.certificateId && (
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-white/10 text-white/50">
                      ID: {exp.certificateId}
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1" style={{ fontFamily: "sans-serif" }}>
                  Verified Internship Certificate
                </h3>
                <p className="text-xs text-white/50 font-sans">
                  Issued by {exp.certificateIssuer}. Click to inspect and verify the official document.
                </p>
              </div>
            </div>

            <a
              href={exp.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-6 py-3.5 bg-[var(--red)] hover:bg-[#ff2d44] text-white font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_20px_rgba(232,23,44,0.4)] flex-shrink-0 inline-flex items-center justify-center gap-2"
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              <span>View Certificate PDF</span> &rarr;
            </a>
          </div>
        </section>

        {/* Impact Metrics Bar */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exp.impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2 font-mono">
                    {metric.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[var(--red)] mb-2" style={{ fontFamily: "sans-serif" }}>
                    {metric.value}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Role Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-24">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-4" style={{ fontFamily: "sans-serif" }}>
              // 01. Role Overview
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "sans-serif" }}>
              Responsibilities & Scope of Work
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/65 font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
              {exp.overview}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-start p-6 sm:p-8 bg-[#080a0e] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[var(--red)] to-transparent" />
            <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-4" style={{ fontFamily: "sans-serif" }}>
              // 02. Organization
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: "sans-serif" }}>
              {exp.company}
            </h3>
            <div className="text-xs font-mono text-[var(--red)] mb-4">{exp.date}</div>
            <p className="text-xs leading-relaxed text-white/55 font-sans mb-6">
              Official engagement validating engineering standards, real-world deployment practices, and collaborative team sprints.
            </p>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
              <span>Location:</span>
              <span className="text-white/80 font-semibold">{exp.location}</span>
            </div>
          </div>
        </section>

        {/* Key Engineering Accomplishments */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-2" style={{ fontFamily: "sans-serif" }}>
              // 03. Key Contributions
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white" style={{ fontFamily: "sans-serif" }}>
              Deliverables & Measurable Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {exp.keyContributions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-[rgba(232,23,44,0.3)] transition-colors duration-300 flex items-start gap-4"
              >
                <span className="text-sm font-mono text-[var(--red)] font-bold mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/75 font-sans">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Breakdown */}
        <section className="mb-20 sm:mb-28 p-6 sm:p-10 bg-white/[0.015] border border-white/10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--red)] font-semibold mb-2" style={{ fontFamily: "sans-serif" }}>
              // 04. Technical Arsenal
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "sans-serif" }}>
              Technologies & Methodologies Used
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.core.map((item) => (
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

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                Engineering Practices
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.practices.map((item) => (
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

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--red)] font-bold mb-3 font-mono">
                Developer Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.tools.map((item) => (
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

        {/* Bottom Navigation */}
        <section className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevExp ? (
            <Link
              href={`/experience/${prevExp.slug}`}
              className="group flex flex-col items-start text-left w-full sm:w-auto"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                &larr; Previous Internship
              </span>
              <span className="text-lg font-bold text-white group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                {prevExp.role}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href="/#experience"
            className="text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white px-6 py-3 border border-white/15 hover:border-[var(--red)] transition-all duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            All Experiences
          </Link>

          {nextExp ? (
            <Link
              href={`/experience/${nextExp.slug}`}
              className="group flex flex-col items-end text-right w-full sm:w-auto"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                Next Internship &rarr;
              </span>
              <span className="text-lg font-bold text-white group-hover:text-[var(--red)] transition-colors" style={{ fontFamily: "sans-serif" }}>
                {nextExp.role}
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
