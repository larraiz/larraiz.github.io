import {
  Mail,
  Phone,
  Briefcase,
  Layers,
  Database,
  Code,
  CheckCircle,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";

export default function AppSP() {
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [navOpen]);

  const contact = {
    email: "larraiz@outlook.com",
    phone: "+1 (407) 821-7287",
  };

  const handleNavClick =
    (sectionId: string) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
      setNavOpen(false);
    };

  const strengths = [
    "Enterprise Digital Transformation",
    "Modern SharePoint & Microsoft 365 Solutions",
    "Full Stack Development (.NET, C#, React, SQL, REST APIs)",
    "Cloud & Automation (Azure, Power Platform, DevOps)",
    "Agile Collaboration & Business-Focused Delivery",
  ];

  const tech = [
    {
      title: "Microsoft & Cloud",
      items: [
        "SharePoint (2007–Online, SPFx) — 15+ yrs",
        "Microsoft 365 & Office 365 — 9 yrs",
        "Power Platform (Power Automate, PowerApps) — 9 yrs",
        "Azure App Services & Azure DevOps",
      ],
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Programming & Frameworks",
      items: [
        "C# / .NET Framework & .NET Core (Web API) — 17 yrs",
        "React (Typescript, Flow) — 9 yrs",
        "JavaScript, jQuery, HTML5, CSS3 — 17 yrs",
        "PHP / Hack, GraphQL",
      ],
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Databases",
      items: ["SQL Server (2000–2019, T-SQL) — 20 yrs"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Tools & Automation",
      items: [
        "PowerShell & Runbooks",
        "REST API Development",
        "Project Management: Asana, Monday.com, ADO",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const certs = [
    "Microsoft 365 Certified: Developer Associate",
    "Microsoft Certified Solution Developer (MCSD): App Builder & Web Apps",
    "Microsoft Certified Azure Fundamentals",
    "MCTS: SharePoint 2010, 2013 (Core & Advanced Solutions)",
    "MCTS: Programming in HTML5, JavaScript, CSS3",
    "Scrum Foundation Professional",
  ];

  return (
    <div className="flex flex-col h-[100dvh] w-full overflow-x-hidden bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <div className="h-12 bg-[#0078d4] text-white flex items-center px-4 md:px-6 flex-shrink-0 pt-[env(safe-area-inset-top)] box-content">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 md:gap-6">
            <button
              type="button"
              aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={navOpen}
              aria-controls="site-nav"
              onClick={() => setNavOpen((o) => !o)}
              className="md:hidden p-2 -ml-2 rounded hover:bg-white/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium flex items-center gap-2">
                SharePoint Developer
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              className="inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDark ? "Light" : "Dark"}
            </button>
            <img
              src="https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_32x1.png"
              alt="SharePoint Icon"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 min-h-0 min-w-0">
        {navOpen && (
          <div
            aria-hidden="true"
            className="md:hidden fixed inset-0 top-12 bg-black/40 z-30"
            onClick={() => setNavOpen(false)}
          />
        )}
        <div
          id="site-nav"
          className={`${
            navOpen ? "translate-x-0 visible" : "-translate-x-full invisible"
          } md:translate-x-0 md:visible transition-transform fixed md:static top-12 bottom-0 left-0 z-40 w-64 max-w-[80vw] overflow-y-auto bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 flex-shrink-0`}
        >
          <nav className="space-y-1">
            <button onClick={handleNavClick("#header")} className="flex items-center gap-3 px-3 py-2 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md group w-full text-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0078d4]"><path d="M12 3L4 9V21H20V9L12 3Z" /></svg>
              <span>Home</span>
            </button>
            <button onClick={handleNavClick("#profile")} className="flex items-center gap-3 px-3 py-2 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md group w-full text-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0078d4]"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" /></svg>
              <span>Professional Profile</span>
            </button>
            <button onClick={handleNavClick("#skills")} className="flex items-center gap-3 px-3 py-2 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md group w-full text-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0078d4]"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" /></svg>
              <span>Skills & Experience</span>
            </button>
            <button onClick={handleNavClick("#contact")} className="flex items-center gap-3 px-3 py-2 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md group w-full text-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0078d4]"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" /></svg>
              <span>Contact</span>
            </button>
          </nav>
        </div>

        <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden bg-slate-50 dark:bg-slate-950">
          <div className="max-w-[1268px] mx-auto px-4 md:px-6 py-6 break-words">
            <header id="header" className="mb-8">
              <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-[32px] font-semibold text-slate-900 dark:text-white mb-2">
                Luis Enrique Arraiz Benitez
              </motion.h1>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                <div className="font-semibold">Software Developer · SharePoint Modern Solutions</div>
                <div className="text-xs">Last modified today</div>
              </div>
              <div className="mt-6 bg-slate-100 dark:bg-slate-900 rounded-lg p-6">
                <p className="text-lg text-slate-900 dark:text-slate-100 mb-4">
                  Transforming business complexity into powerful, scalable digital platforms — building enterprise-grade solutions using Microsoft 365, SPFx, .NET, React and Azure.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 bg-[#0078d4] hover:bg-[#106ebe] px-4 py-2 rounded-sm text-sm text-white transition-colors"><Mail className="w-4 h-4" />{contact.email}</a>
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 border border-[#0078d4] text-[#0078d4] hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-sm text-sm transition-colors"><Phone className="w-4 h-4" />{contact.phone}</a>
                </div>
              </div>
            </header>

            <div id="profile" className="mb-8">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#0078d4]" />Professional Profile</h2>
                </div>
                <div className="p-4">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                    With 15+ years of experience delivering enterprise-level solutions, I design, develop and deploy modern digital platforms that accelerate business growth. I focus on Microsoft 365 ecosystems, SharePoint Framework (SPFx), full-stack web APIs and cloud-native services.
                  </p>
                </div>
              </div>
            </div>

            <div id="skills" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <section className="space-y-8 lg:col-span-1">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#0078d4]" />Core Strengths</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      {strengths.map((s) => (
                        <li key={s} className="flex items-start gap-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                          <span className="mt-1 text-[#0078d4]">•</span>
                          <span className="text-slate-700 dark:text-slate-200">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Layers className="w-5 h-5 text-[#0078d4]" />Certifications</h3>
                  </div>
                  <div className="p-4">
                    <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                      {certs.map((c) => (
                        <li key={c} className="py-3 px-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Code className="w-5 h-5 text-[#0078d4]" />Technology Stack</h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tech.map((t) => (
                        <article key={t.title} className="border border-slate-200 dark:border-slate-800 rounded hover:shadow-md transition-shadow bg-white dark:bg-slate-950">
                          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded">{t.icon}</div>
                            <h4 className="font-semibold text-slate-900 dark:text-white">{t.title}</h4>
                          </div>
                          <ul className="p-4 space-y-2">
                            {t.items.map((it) => (
                              <li key={it} className="text-slate-700 dark:text-slate-200 flex items-start gap-2">
                                <span className="mt-1 text-[#0078d4]">•</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Database className="w-5 h-5 text-[#0078d4]" />Databases & APIs</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-700 dark:text-slate-200 mb-6">SQL Server expertise (T-SQL), schema design, and building secure RESTful Web APIs with .NET Core.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        "SQL Server (20 yrs)",
                        ".NET Core Web API (4+ yrs)",
                        "REST / OAuth / JWT",
                      ].map((item) => (
                        <div key={item} className="p-3 bg-slate-100 dark:bg-slate-800 rounded text-sm text-center text-slate-700 dark:text-slate-200">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#0078d4]" />Tools & Platforms</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Power Platform (Power Automate, PowerApps, Logic Apps)",
                        "Azure DevOps & App Services",
                        "PowerShell Scripts & Runbooks",
                        "Asana, Monday.com, Azure DevOps (project management)",
                      ].map((item) => (
                        <div key={item} className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-700 dark:text-slate-200 transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div id="contact" className="mt-8">
              <div className="bg-gradient-to-r from-[#0078d4] to-[#106ebe] rounded-lg overflow-hidden">
                <div className="px-8 py-12 md:py-16">
                  <div className="max-w-4xl">
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to modernize your enterprise platforms?</h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Transform your organization with modern SharePoint solutions, custom SPFx development, and seamless Microsoft 365 integrations. Let's build something exceptional together.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 bg-white text-[#0078d4] hover:bg-white/90 px-6 py-3 rounded-md transition-colors text-lg font-medium shadow-lg"><Mail className="w-5 h-5" /> Contact via Email</a>
                      <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium border border-white/30"><Phone className="w-5 h-5" /> Schedule a Call</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-[1268px] mx-auto px-6 py-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
            © {new Date().getFullYear()} Luis Enrique Arraiz Benitez — All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
