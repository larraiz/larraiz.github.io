import { Mail, Phone, Briefcase, Layers, Database, Code, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Default export React component for a single-file portfolio website
// Tailwind CSS required. To preview: create a new React app (Vite or CRA/Next),
// install lucide-react and framer-motion, enable Tailwind, then drop this file as a page or component.

export default function App() {
  const contact = {
    email: "larraiz@outlook.com",
    phone: "+1 407-693-1103",
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
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 flex flex-col">
      {/* Main content container */}
      <div className="flex-1 flex items-center justify-center">
        {/* Portfolio container */}
        <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header / Hero */}
        <header className="bg-gradient-to-r from-[#003366] to-[#006699] text-white p-8 md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <motion.h1
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-extrabold tracking-tight"
              >
                Luis Enrique Arraiz Benitez
              </motion.h1>
              <p className="mt-2 text-base md:text-xl opacity-90">
                Software Developer · SharePoint Modern Solutions · Full Stack
              </p>
              <p className="mt-4 text-sm md:text-base max-w-xl">
                Transforming business complexity into powerful, scalable digital platforms — building
                enterprise-grade solutions using Microsoft 365, SPFx, .NET, React and Azure.
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:text-right">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm text-white"
              >
                <Mail className="w-4 h-4" />
                {contact.email}
              </a>
              <div className="mt-3 text-sm text-white flex items-center justify-end gap-3">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Profile */}
        <div className="p-6 md:p-10">
          <div className="p-4 bg-white rounded-2xl shadow-md">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <CheckCircle className="w-5 h-5 text-[#006699]" /> Professional Profile
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              With 15+ years of experience delivering enterprise-level solutions, I design, develop and deploy
              modern digital platforms that accelerate business growth. I focus on Microsoft 365 ecosystems,
              SharePoint Framework (SPFx), full-stack web APIs and cloud-native services.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <main className="px-6 md:px-10 pb-6 md:pb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Strengths */}
          <section className="space-y-6 lg:col-span-1">

            <div className="p-4 bg-white rounded-2xl shadow-md">
              <h3 className="text-md font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#003366]" /> Core Strengths
              </h3>
              <ul className="mt-3 space-y-2 text-base">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1 text-[#006699]">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow-md">
              <h3 className="text-md font-semibold flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#006699]" /> Certifications
              </h3>
              <ul className="mt-3 text-base space-y-1">
                {certs.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Center column - Tech Stack */}
          <section className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <Code className="w-6 h-6 text-[#003366]" /> Technology Stack
              </h2>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {tech.map((t) => (
                  <article key={t.title} className="p-4 border rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#f3f7fb] rounded-lg">{t.icon}</div>
                      <h4 className="font-semibold">{t.title}</h4>
                    </div>
                    <ul className="mt-3 text-base space-y-1">
                      {t.items.map((it) => (
                        <li key={it}>• {it}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Database className="w-5 h-5 text-[#006699]" /> Databases & APIs
              </h3>
              <p className="mt-3 text-sm">SQL Server expertise (T-SQL), schema design, and building secure RESTful Web APIs with .NET Core.</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-gray-50 text-sm text-center">SQL Server (20 yrs)</div>
                <div className="p-3 rounded-lg bg-gray-50 text-sm text-center">.NET Core Web API (4+ yrs)</div>
                <div className="p-3 rounded-lg bg-gray-50 text-sm text-center">REST / OAuth / JWT</div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#003366]" /> Tools & Platforms
              </h3>
              <div className="mt-3 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>Power Platform (Power Automate, PowerApps, Logic Apps)</div>
                <div>Azure DevOps & App Services</div>
                <div>PowerShell Scripts & Runbooks</div>
                <div>Asana, Monday.com, Azure DevOps (project management)</div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer / CTA */}
        <footer className="bg-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold">Ready to modernize your enterprise platforms?</h4>
            <p className="text-xs opacity-90 mt-1">Contact me to discuss SPFx, Microsoft 365 migrations, or custom enterprise solutions.</p>
          </div>

          <div className="flex gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-xl shadow"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 border px-4 py-2 rounded-xl">
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </footer>
        </div>
      </div>

      {/* Small print */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Luis Enrique Arraiz Benitez — All rights reserved.
      </div>
    </div>
  );
}
