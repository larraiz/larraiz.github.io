import {
  Mail,
  Phone,
  Briefcase,
  Layers,
  Database,
  Code,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { type MouseEvent } from "react";

// Default export React component for a single-file portfolio website
// Tailwind CSS required. To preview: create a new React app (Vite or CRA/Next),
// install lucide-react and framer-motion, enable Tailwind, then drop this file as a page or component.

export default function AppSP() {
  // const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  const contact = {
    email: "larraiz@outlook.com",
    phone: "+1 ",
  };

  // const accordionItems = [
  //   {
  //     id: "experience",
  //     title: "Work Experience",
  //     content: [
  //       {
  //         role: "Senior SharePoint Developer",
  //         company: "Microsoft",
  //         period: "2020 - Present",
  //         description: "Leading SharePoint Framework (SPFx) development and Microsoft 365 integration projects."
  //       },
  //       {
  //         role: "Full Stack Developer",
  //         company: "Enterprise Solutions Inc.",
  //         period: "2017 - 2020",
  //         description: "Developed and maintained enterprise-scale SharePoint solutions and .NET applications."
  //       }
  //     ]
  //   },
  //   {
  //     id: "education",
  //     title: "Education & Training",
  //     content: [
  //       {
  //         degree: "Master of Computer Science",
  //         institution: "University of Technology",
  //         year: "2015",
  //         details: "Specialized in Enterprise Software Architecture"
  //       }
  //     ]
  //   },
  //   {
  //     id: "projects",
  //     title: "Key Projects",
  //     content: [
  //       {
  //         name: "Enterprise Intranet Modernization",
  //         description: "Led the transformation of legacy SharePoint environments to modern experiences.",
  //         technologies: ["SharePoint Online", "SPFx", "React", "TypeScript"]
  //       },
  //       {
  //         name: "Automated Workflow Platform",
  //         description: "Designed and implemented enterprise-wide automation solution.",
  //         technologies: ["Power Automate", "Azure Logic Apps", "SharePoint REST API"]
  //       }
  //     ]
  //   }
  // ];

  // Function to handle navigation menu clicks
  const handleNavClick =
    (sectionId: string) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
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
    <div className="flex flex-col h-screen bg-[#faf9f8] text-[#323130]">
      {/* SharePoint Suite Bar */}
      <div className="h-12 bg-[#0078d4] text-white flex items-center px-6 flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium flex items-center gap-2">
                SharePoint Developer
                {/* <img 
                  src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/sharepoint_48x1.svg"
                  alt="SharePoint Logo"
                  className="h-6 w-6 ml-2"
                /> */}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img 
              src="https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_32x1.png"
              alt="SharePoint Icon"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>

      {/* Main container with left navigation */}
      <div className="flex flex-1 min-h-0">
        {/* SharePoint Left Navigation */}
        <div className="w-64 bg-white border-r border-[#edebe9] p-4 flex-shrink-0">
          <nav className="space-y-1">
            {/* <div className="text-sm font-large text-[#323130] px-3 py-2">
              menu
            </div> */}
            <button
              onClick={handleNavClick("#header")}
              className="flex items-center gap-3 px-3 py-2 text-[#323130] hover:bg-[#f3f2f1] rounded-md group w-full text-left"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#0078d4]"
              >
                <path d="M12 3L4 9V21H20V9L12 3Z" />
              </svg>
              <span>Home</span>
            </button>
            <button
              onClick={handleNavClick("#profile")}
              className="flex items-center gap-3 px-3 py-2 text-[#323130] hover:bg-[#f3f2f1] rounded-md group w-full text-left"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#0078d4]"
              >
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
              </svg>
              <span>Professional Profile</span>
            </button>
            <button
              onClick={handleNavClick("#skills")}
              className="flex items-center gap-3 px-3 py-2 text-[#323130] hover:bg-[#f3f2f1] rounded-md group w-full text-left"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#0078d4]"
              >
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
              </svg>
              <span>Skills & Experience</span>
            </button>
            <button
              onClick={handleNavClick("#contact")}
              className="flex items-center gap-3 px-3 py-2 text-[#323130] hover:bg-[#f3f2f1] rounded-md group w-full text-left"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#0078d4]"
              >
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
              <span>Contact</span>
            </button>
          </nav>
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto bg-white w-full">
          {/* Portfolio container - SharePoint uses max-width-1268px */}
          <div className="max-w-[1268px] mx-auto px-6 py-6">
            {/* SharePoint-style Page Header */}
            <header id="header" className="mb-8">
              <motion.h1
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-[32px] font-semibold text-[#323130] mb-2"
              >
                Luis Enrique Arraiz Benitez
              </motion.h1>
              <div className="text-sm text-[#605e5c]">
                <div className="font-semibold">
                  Software Developer · SharePoint Modern Solutions
                </div>
                <div className="text-xs">Last modified today</div>
              </div>

              {/* SharePoint Hero Banner */}
              <div className="mt-6 bg-[#f3f2f1] rounded-lg p-6">
                <p className="text-lg text-[#323130] mb-4">
                  Transforming business complexity into powerful, scalable
                  digital platforms — building enterprise-grade solutions using
                  Microsoft 365, SPFx, .NET, React and Azure.
                </p>

                <div className="flex gap-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 bg-[#0078d4] hover:bg-[#106ebe] px-4 py-2 rounded-sm text-sm text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center gap-2 border border-[#0078d4] text-[#0078d4] hover:bg-[#f3f2f1] px-4 py-2 rounded-sm text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </a>
                </div>
              </div>
            </header>

            {/* SharePoint Accordion Web Part */}
            <div id="profile" className="mb-8">
              <div className="bg-white border border-[#edebe9] rounded">
                <div className="px-6 py-4 border-b border-[#edebe9]">
                  <h2 className="text-lg font-semibold text-[#323130] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0078d4]" />
                    Professional Profile
                  </h2>
                </div>
                <div className="p-4">
                  <p className="text-[#323130] leading-relaxed mb-6">
                    With 15+ years of experience delivering enterprise-level
                    solutions, I design, develop and deploy modern digital
                    platforms that accelerate business growth. I focus on
                    Microsoft 365 ecosystems, SharePoint Framework (SPFx),
                    full-stack web APIs and cloud-native services.
                  </p>
                  
                  {/* <div className="space-y-2">
                    {accordionItems.map((item) => (
                      <div key={item.id} className="border border-[#edebe9] rounded">
                        <button
                          onClick={() => setExpandedAccordion(expandedAccordion === item.id ? null : item.id)}
                          className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#f3f2f1] transition-colors"
                        >
                          <span className="font-medium text-[#323130]">{item.title}</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className={`transform transition-transform ${
                              expandedAccordion === item.id ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {expandedAccordion === item.id && (
                          <div className="px-4 pb-4 text-[#323130]">
                            {item.id === "experience" && (
                              <div className="space-y-4">
                                {item.content.map((exp: any, idx: number) => (
                                  <div key={idx} className="border-l-2 border-[#0078d4] pl-4">
                                    <h4 className="font-medium">{exp.role}</h4>
                                    <p className="text-sm text-[#605e5c]">{exp.company} | {exp.period}</p>
                                    <p className="mt-2">{exp.description}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                            {item.id === "education" && (
                              <div className="space-y-4">
                                {item.content.map((edu: any, idx: number) => (
                                  <div key={idx}>
                                    <h4 className="font-medium">{edu.degree}</h4>
                                    <p className="text-sm text-[#605e5c]">{edu.institution}, {edu.year}</p>
                                    <p className="mt-2">{edu.details}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                            {item.id === "projects" && (
                              <div className="space-y-4">
                                {item.content.map((project: any, idx: number) => (
                                  <div key={idx} className="bg-[#f3f2f1] p-4 rounded">
                                    <h4 className="font-medium">{project.name}</h4>
                                    <p className="mt-2">{project.description}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {project.technologies.map((tech: string, techIdx: number) => (
                                        <span
                                          key={techIdx}
                                          className="px-2 py-1 text-xs bg-[#0078d4] text-white rounded"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>

            {/* SharePoint Section Layout */}
            <div id="skills" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column - SharePoint Quick Links and List Web Parts */}
              <section className="space-y-8 lg:col-span-1">
                {/* Core Strengths - Quick Links Web Part Style */}
                <div className="bg-white border border-[#edebe9] rounded">
                  <div className="px-6 py-4 border-b border-[#edebe9]">
                    <h3 className="text-lg font-semibold text-[#323130] flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#0078d4]" />
                      Core Strengths
                    </h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      {strengths.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 p-2 hover:bg-[#f3f2f1] rounded"
                        >
                          <span className="mt-1 text-[#0078d4]">•</span>
                          <span className="text-[#323130]">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Certifications - List Web Part Style */}
                <div className="bg-white border border-[#edebe9] rounded">
                  <div className="px-6 py-4 border-b border-[#edebe9]">
                    <h3 className="text-lg font-semibold text-[#323130] flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#0078d4]" />
                      Certifications
                    </h3>
                  </div>
                  <div className="p-4">
                    <ul className="divide-y divide-[#edebe9]">
                      {certs.map((c) => (
                        <li
                          key={c}
                          className="py-3 px-2 text-[#323130] hover:bg-[#f3f2f1]"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Center column - SharePoint Web Parts */}
              <section className="lg:col-span-2 space-y-8">
                {/* Technology Stack - SharePoint Grid Web Part */}
                <div className="bg-white border border-[#edebe9] rounded">
                  <div className="px-6 py-4 border-b border-[#edebe9]">
                    <h2 className="text-lg font-semibold text-[#323130] flex items-center gap-2">
                      <Code className="w-5 h-5 text-[#0078d4]" />
                      Technology Stack
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tech.map((t) => (
                        <article
                          key={t.title}
                          className="border border-[#edebe9] rounded hover:shadow-md transition-shadow"
                        >
                          <div className="p-4 border-b border-[#edebe9] flex items-center gap-3">
                            <div className="p-2 bg-[#f3f2f1] rounded">
                              {t.icon}
                            </div>
                            <h4 className="font-semibold text-[#323130]">
                              {t.title}
                            </h4>
                          </div>
                          <ul className="p-4 space-y-2">
                            {t.items.map((it) => (
                              <li
                                key={it}
                                className="text-[#323130] flex items-start gap-2"
                              >
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

                {/* Databases & APIs - SharePoint Text Web Part */}
                <div className="bg-white border border-[#edebe9] rounded">
                  <div className="px-6 py-4 border-b border-[#edebe9]">
                    <h3 className="text-lg font-semibold text-[#323130] flex items-center gap-2">
                      <Database className="w-5 h-5 text-[#0078d4]" />
                      Databases & APIs
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#323130] mb-6">
                      SQL Server expertise (T-SQL), schema design, and building
                      secure RESTful Web APIs with .NET Core.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        "SQL Server (20 yrs)",
                        ".NET Core Web API (4+ yrs)",
                        "REST / OAuth / JWT",
                      ].map((item) => (
                        <div
                          key={item}
                          className="p-3 bg-[#f3f2f1] rounded text-sm text-center text-[#323130]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools & Platforms - SharePoint List Web Part */}
                <div className="bg-white border border-[#edebe9] rounded">
                  <div className="px-6 py-4 border-b border-[#edebe9]">
                    <h3 className="text-lg font-semibold text-[#323130] flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#0078d4]" />
                      Tools & Platforms
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Power Platform (Power Automate, PowerApps, Logic Apps)",
                        "Azure DevOps & App Services",
                        "PowerShell Scripts & Runbooks",
                        "Asana, Monday.com, Azure DevOps (project management)",
                      ].map((item) => (
                        <div
                          key={item}
                          className="p-3 hover:bg-[#f3f2f1] rounded text-[#323130] transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* SharePoint Hero Web Part - Call to Action */}
            <div id="contact" className="mt-8">
              <div className="bg-gradient-to-r from-[#0078d4] to-[#106ebe] rounded-lg overflow-hidden">
                <div className="px-8 py-12 md:py-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjA5LjUgMTQ5LjVjNDcuNS00NyAxMjQuNS00NyAxNzIgMGw0NyA0N2M0Ny41IDQ3LjUgNDcuNSAxMjQuNSAwIDE3MmwtNDcgNDdjLTQ3LjUgNDcuNS0xMjQuNSA0Ny41LTE3MiAwbC00Ny00N2MtNDcuNS00Ny41LTQ3LjUtMTI0LjUgMC0xNzJsNDctNDd6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-right-top bg-no-repeat">
                  <div className="max-w-4xl">
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                      Ready to modernize your enterprise platforms?
                    </h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Transform your organization with modern SharePoint
                      solutions, custom SPFx development, and seamless Microsoft
                      365 integrations. Let's build something exceptional
                      together.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 bg-white text-[#0078d4] hover:bg-white/90 px-6 py-3 rounded-md transition-colors text-lg font-medium shadow-lg"
                      >
                        <Mail className="w-5 h-5" /> Contact via Email
                      </a>
                      <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium border border-white/30"
                      >
                        <Phone className="w-5 h-5" /> Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
           {/* SharePoint Footer */}
      <div className="border-t border-[#edebe9] bg-white">
        <div className="max-w-[1268px] mx-auto px-6 py-3">
          <div className="text-xs text-[#605e5c] text-center">
            © {new Date().getFullYear()} Luis Enrique Arraiz Benitez — All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
