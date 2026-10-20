import {
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Grid3x3,
  Home,
  Layers,
  Mail,
  MessageSquare,
  Moon,
  Network,
  Phone,
  Plug,
  Puzzle,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

const contact = {
  email: "larraiz@outlook.com",
  phone: "+1 (407) 821-7287",
};
const telHref = `tel:${contact.phone.replace(/[^\d+]/g, "")}`;

type Section = {
  id: string;
  label: string;
  icon: ReactNode;
  tile: string;
};

const sections: Section[] = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" />, tile: "bg-[#0f6cbd]" },
  { id: "agentic-ai", label: "Agentic AI", icon: <Sparkles className="w-5 h-5" />, tile: "bg-gradient-to-br from-[#2563eb] via-[#7c3aed] to-[#db2777]" },
  { id: "custom-dev", label: "Custom Dev", icon: <Code2 className="w-5 h-5" />, tile: "bg-[#038387]" },
  { id: "approach", label: "Approach", icon: <Workflow className="w-5 h-5" />, tile: "bg-[#31752f]" },
  { id: "skills", label: "Skills", icon: <Layers className="w-5 h-5" />, tile: "bg-[#5c2e91]" },
  { id: "certifications", label: "Certs", icon: <Award className="w-5 h-5" />, tile: "bg-[#c239b3]" },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" />, tile: "bg-[#ca5010]" },
];

const stats = [
  { value: "15+", label: "Years in SharePoint & M365" },
  { value: "17", label: "Years building with C# / .NET" },
  { value: "9", label: "Years on Power Platform" },
  { value: "6", label: "Microsoft & industry certifications" },
];

type Prompt = { ask: string; plan: string[] };

const prompts: Prompt[] = [
  {
    ask: "Build an agent that answers HR policy questions in Teams",
    plan: [
      "Ground the agent on the HR SharePoint library with permission trimming",
      "Publish as a Copilot Studio / declarative agent in Teams & M365 Copilot",
      "Add actions: open a case, look up PTO balance via a secure API",
      "Track usage and answer quality with analytics and feedback loops",
    ],
  },
  {
    ask: "Automate contract approvals end-to-end",
    plan: [
      "Model the process and data in SharePoint lists or Dataverse",
      "Orchestrate approvals with Power Automate and Adaptive Cards",
      "Use an AI step to extract key terms and flag risky clauses",
      "Keep a human in the loop with full audit history",
    ],
  },
  {
    ask: "Modernize our classic SharePoint intranet",
    plan: [
      "Inventory sites, content and customizations with PowerShell",
      "Rebuild custom features as SPFx web parts & extensions",
      "Migrate content to modern hub sites with clean navigation",
      "Add an intranet agent so people can ask instead of search",
    ],
  },
  {
    ask: "Connect our line-of-business system to Microsoft 365",
    plan: [
      "Expose a secure .NET Web API on Azure with Entra ID auth",
      "Surface data in Teams via a message extension or tab",
      "Index content with a Graph connector for Copilot & Search",
      "Wrap the API as an MCP server / plugin so agents can act on it",
    ],
  },
];

const agenticServices = [
  {
    title: "Copilot Studio agents",
    desc: "Low-code agents with topics, generative answers, knowledge sources and Power Automate actions — published to Teams, websites and M365 Copilot.",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "Declarative agents for M365 Copilot",
    desc: "Extend Microsoft 365 Copilot with custom instructions, scoped SharePoint knowledge and API plugins that respect your tenant's permissions.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Custom engine agents",
    desc: "Pro-code agents with the Microsoft 365 Agents SDK, Semantic Kernel and Azure OpenAI for full control of models, orchestration and memory.",
    icon: <BrainCircuit className="w-5 h-5" />,
  },
  {
    title: "Tools, plugins & MCP servers",
    desc: "Turn existing APIs into agent tools — OpenAPI plugins, Model Context Protocol servers and Graph-powered actions agents can safely call.",
    icon: <Plug className="w-5 h-5" />,
  },
  {
    title: "RAG over your content",
    desc: "Retrieval over SharePoint, Dataverse and SQL with Azure AI Search and Graph connectors — grounded answers with citations.",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "Governance & responsible AI",
    desc: "Entra ID auth, least-privilege access, DLP-aware connectors, human-in-the-loop approvals and telemetry from day one.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

const architecture = [
  { title: "Channels", items: ["Microsoft Teams", "M365 Copilot", "Web & mobile"], icon: <MessageSquare className="w-4 h-4" /> },
  { title: "Orchestration", items: ["Copilot Studio", "M365 Agents SDK", "Semantic Kernel"], icon: <BrainCircuit className="w-4 h-4" /> },
  { title: "Tools & actions", items: ["Microsoft Graph", "Power Automate", "Custom APIs / MCP"], icon: <Zap className="w-4 h-4" /> },
  { title: "Knowledge", items: ["SharePoint", "Dataverse & SQL", "Azure AI Search"], icon: <Database className="w-4 h-4" /> },
];

const customDev = [
  {
    title: "SharePoint Framework (SPFx)",
    desc: "Web parts, extensions and Viva Connections cards built with React & TypeScript for modern intranets.",
    icon: <FileCode2 className="w-6 h-6" />,
    tile: "bg-[#038387]",
  },
  {
    title: "Microsoft Teams apps",
    desc: "Tabs, bots, message extensions and Adaptive Card workflows that bring line-of-business data into the flow of work.",
    icon: <Users className="w-6 h-6" />,
    tile: "bg-[#5b5fc7]",
  },
  {
    title: "Microsoft Graph integrations",
    desc: "Automations and apps on users, files, mail, calendars and Planner — secured with Entra ID app registrations.",
    icon: <Network className="w-6 h-6" />,
    tile: "bg-[#0f6cbd]",
  },
  {
    title: ".NET Web APIs on Azure",
    desc: "Secure REST APIs with .NET, OAuth/JWT and SQL Server, deployed to Azure App Service via Azure DevOps pipelines.",
    icon: <Cloud className="w-6 h-6" />,
    tile: "bg-[#0078d4]",
  },
  {
    title: "Power Platform solutions",
    desc: "Power Apps, Power Automate and Logic Apps — extended with custom connectors when low-code needs pro-code.",
    icon: <Workflow className="w-6 h-6" />,
    tile: "bg-[#742774]",
  },
  {
    title: "Migrations & modernization",
    desc: "Classic SharePoint (2007–2019) to SharePoint Online, with PowerShell scripting, runbooks and governance.",
    icon: <Rocket className="w-6 h-6" />,
    tile: "bg-[#ca5010]",
  },
];

const approach = [
  { stage: "Discover", items: ["Business goals & users", "Data and permissions map", "Quick-win use cases"] },
  { stage: "Design", items: ["Solution architecture", "Security & compliance review", "Clickable prototype"] },
  { stage: "Build", items: ["Agile sprints in Azure DevOps", "Automated tests & CI/CD", "Weekly demos"] },
  { stage: "Adopt & govern", items: ["Rollout & training", "Telemetry and feedback", "Continuous improvement"] },
];

const tech = [
  {
    title: "Microsoft 365 & Cloud",
    icon: <Layers className="w-5 h-5" />,
    items: [
      { name: "SharePoint (2007–Online, SPFx)", years: 15 },
      { name: "Microsoft 365 & Office 365", years: 9 },
      { name: "Power Platform", years: 9 },
      { name: "Azure App Services & DevOps", years: null },
    ],
  },
  {
    title: "Programming & Frameworks",
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: "C# / .NET Framework & .NET Core", years: 17 },
      { name: "JavaScript, HTML5, CSS3", years: 17 },
      { name: "React & TypeScript", years: 9 },
      { name: "PHP / Hack, GraphQL", years: null },
    ],
  },
  {
    title: "AI & Agents",
    icon: <Sparkles className="w-5 h-5" />,
    items: [
      { name: "Copilot Studio & declarative agents", years: null },
      { name: "Azure OpenAI & Azure AI Search", years: null },
      { name: "Semantic Kernel & M365 Agents SDK", years: null },
      { name: "Model Context Protocol (MCP)", years: null },
    ],
  },
  {
    title: "Data & Automation",
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "SQL Server (2000–2019, T-SQL)", years: 20 },
      { name: "REST APIs, OAuth, JWT", years: null },
      { name: "PowerShell & Runbooks", years: null },
      { name: "Asana, Monday.com, Azure DevOps", years: null },
    ],
  },
];

const strengths = [
  "Enterprise digital transformation",
  "Modern SharePoint & Microsoft 365 solutions",
  "Agentic AI on Microsoft 365 & Azure",
  "Full stack development (.NET, C#, React, SQL)",
  "Cloud & automation (Azure, Power Platform, DevOps)",
  "Agile, business-focused delivery",
];

const certs = [
  { name: "Microsoft 365 Certified: Developer Associate", issuer: "Microsoft" },
  { name: "MCSD: App Builder & Web Applications", issuer: "Microsoft" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { name: "MCTS: SharePoint 2010 & 2013", issuer: "Microsoft" },
  { name: "MCTS: Programming in HTML5, JavaScript, CSS3", issuer: "Microsoft" },
  { name: "Scrum Foundation Professional", issuer: "CertiProf" },
];

const searchIndex: { label: string; section: string }[] = [
  ...agenticServices.map((s) => ({ label: s.title, section: "agentic-ai" })),
  ...customDev.map((s) => ({ label: s.title, section: "custom-dev" })),
  ...tech.flatMap((t) => t.items.map((i) => ({ label: i.name, section: "skills" }))),
  ...certs.map((c) => ({ label: c.name, section: "certifications" })),
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function readTheme(): boolean {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-fl-card border border-fl-stroke rounded-lg shadow-fl2 ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ icon, eyebrow, title, desc }: { icon: ReactNode; eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-fl-brand">
        {icon}
        {eyebrow}
      </div>
      <h2 className="mt-1 text-2xl md:text-[28px] font-semibold text-fl-fg leading-tight">{title}</h2>
      {desc && <p className="mt-2 text-fl-fg2 max-w-3xl">{desc}</p>}
    </div>
  );
}

function CopilotDemo() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const prompt = prompts[active];

  useEffect(() => {
    setStep(0);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(prompt.plan.length);
      return;
    }
    const t = window.setInterval(() => {
      setStep((s) => {
        if (s >= prompt.plan.length) {
          window.clearInterval(t);
          return s;
        }
        return s + 1;
      });
    }, 650);
    return () => window.clearInterval(t);
  }, [active, prompt.plan.length]);

  return (
    <div className="copilot-border rounded-xl p-[1.5px]">
      <div className="bg-fl-card rounded-[11px] p-4 md:p-5 h-full">
        <div className="flex items-center gap-2 text-sm font-semibold text-fl-fg">
          <span className="copilot-tile w-7 h-7 rounded-md flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </span>
          Ask how I'd build it
        </div>

        <div className="mt-4 flex justify-end">
          <div className="max-w-[90%] bg-fl-brand-subtle text-fl-fg rounded-lg rounded-br-sm px-3 py-2 text-sm">
            {prompt.ask}
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <span className="copilot-tile w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-white mt-0.5">
            <Bot className="w-3.5 h-3.5" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-fl-fg3 mb-2" aria-live="polite">
              {step < prompt.plan.length ? "Planning…" : "Here's the plan"}
            </div>
            <ol className="space-y-2 min-h-[176px]">
              {prompt.plan.map((p, i) => (
                <li
                  key={p}
                  className={`flex items-start gap-2 text-sm transition-opacity duration-300 ${i < step ? "opacity-100" : "opacity-0"}`}
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-fl-success" />
                  <span className="text-fl-fg">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {prompts.map((p, i) => (
            <button
              key={p.ask}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`text-left text-xs px-3 py-1.5 rounded-full border transition-colors ${
                i === active
                  ? "border-fl-brand bg-fl-brand-subtle text-fl-brand"
                  : "border-fl-stroke text-fl-fg2 hover:bg-fl-hover"
              }`}
            >
              {p.ask}
            </button>
          ))}
        </div>

        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent("Project idea")}`}
          className="mt-4 flex items-center gap-2 border border-fl-stroke rounded-lg px-3 py-2.5 text-sm text-fl-fg3 hover:border-fl-brand transition-colors"
        >
          <span className="flex-1">Describe your own idea…</span>
          <Send className="w-4 h-4 text-fl-brand" />
        </a>
      </div>
    </div>
  );
}

export default function AppM365() {
  const [isDark, setIsDark] = useState(readTheme);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [isDark]);

  useEffect(() => {
    if (!launcherOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLauncherOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [launcherOpen]);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { root, rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((r) => r.label.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const go = (id: string) => {
    scrollTo(id);
    setLauncherOpen(false);
    setQuery("");
  };

  return (
    <div className="flex flex-col h-[100dvh] w-full overflow-hidden bg-fl-canvas text-fl-fg font-segoe transition-colors">
      {/* Suite header */}
      <header className="suite-bar h-12 flex-shrink-0 flex items-center gap-2 px-2 md:px-3 text-white pt-[env(safe-area-inset-top)] box-content relative z-50">
        <button
          type="button"
          aria-label="Open portfolio launcher"
          aria-expanded={launcherOpen}
          aria-controls="app-launcher"
          onClick={() => setLauncherOpen((o) => !o)}
          className="w-10 h-10 rounded flex items-center justify-center hover:bg-white/15"
        >
          <Grid3x3 className="w-5 h-5" />
        </button>
        <button type="button" onClick={() => go("home")} className="flex items-center gap-2 font-semibold text-[15px] whitespace-nowrap">
          Luis Arraiz
          <span className="hidden sm:inline font-normal opacity-80">| Microsoft 365 &amp; AI Developer</span>
        </button>

        <div className="flex-1 flex justify-center px-2 min-w-0">
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-fl-brand" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => window.setTimeout(() => setSearchFocused(false), 150)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && results[0]) go(results[0].section);
              }}
              placeholder="Search skills, e.g. Copilot Studio, SPFx, Graph"
              aria-label="Search skills"
              className="w-full h-8 rounded-md bg-white text-[#242424] placeholder:text-[#707070] pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-white/60"
            />
            {searchFocused && query && (
              <div className="absolute top-10 left-0 right-0 bg-fl-card text-fl-fg border border-fl-stroke rounded-lg shadow-fl16 py-1">
                {results.length ? (
                  results.map((r) => (
                    <button
                      key={r.label}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => go(r.section)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-fl-hover flex items-center justify-between gap-3"
                    >
                      <span className="truncate">{r.label}</span>
                      <span className="text-xs text-fl-fg3 shrink-0">{sections.find((s) => s.id === r.section)?.label}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-fl-fg3">No matches — try "agent", "Teams" or "Azure"</div>
                )}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsDark((v) => !v)}
          className="w-10 h-10 rounded flex items-center justify-center hover:bg-white/15"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <a
          href={`mailto:${contact.email}`}
          aria-label="Email Luis"
          className="w-8 h-8 rounded-full bg-white text-[#0f6cbd] text-xs font-bold flex items-center justify-center mr-1 ring-2 ring-white/30"
        >
          LA
        </a>
      </header>

      {/* App launcher flyout */}
      <AnimatePresence>
        {launcherOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/20" aria-hidden="true" onClick={() => setLauncherOpen(false)} />
            <motion.div
              id="app-launcher"
              role="dialog"
              aria-label="Portfolio sections"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed z-50 top-[calc(3rem+env(safe-area-inset-top))] left-0 w-[320px] max-w-[calc(100vw-16px)] bg-fl-card border border-fl-stroke rounded-br-lg shadow-fl28 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-fl-fg">Explore</span>
                <button type="button" aria-label="Close" onClick={() => setLauncherOpen(false)} className="p-1 rounded hover:bg-fl-hover">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(s.id)}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-fl-hover"
                  >
                    <span className={`${s.tile} w-10 h-10 rounded-lg text-white flex items-center justify-center shadow-fl4`}>{s.icon}</span>
                    <span className="text-xs text-fl-fg">{s.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex flex-1 min-h-0">
        {/* App rail */}
        <nav aria-label="Sections" className="hidden md:flex w-[68px] flex-shrink-0 flex-col items-center gap-1 py-2 bg-fl-rail border-r border-fl-stroke">
          {sections.map((s) => {
            const active = activeId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                aria-current={active ? "true" : undefined}
                className={`relative w-[60px] py-2 rounded-md flex flex-col items-center gap-1 text-[10px] transition-colors ${
                  active ? "text-fl-brand font-semibold" : "text-fl-fg2 hover:bg-fl-hover hover:text-fl-fg"
                }`}
              >
                {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-fl-brand" />}
                {s.icon}
                {s.label}
              </button>
            );
          })}
        </nav>

        <main ref={mainRef} className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-8 space-y-12 break-words">
            {/* Hero */}
            <section id="home" className="scroll-mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 items-stretch">
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col justify-center"
                >
                  <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-fl-brand-subtle text-fl-brand">
                    <span className="w-2 h-2 rounded-full bg-fl-success" />
                    Available for new projects
                  </span>
                  <h1 className="mt-4 text-[34px] md:text-[44px] leading-[1.1] font-semibold text-fl-fg">
                    Luis Enrique Arraiz Benitez
                  </h1>
                  <p className="mt-3 text-lg md:text-xl font-semibold copilot-text">
                    Custom Microsoft 365 development &amp; Agentic AI
                  </p>
                  <p className="mt-4 text-fl-fg2 text-base md:text-lg max-w-xl leading-relaxed">
                    I turn business complexity into scalable platforms on Microsoft 365, SharePoint, Teams and Azure —
                    and now into AI agents that work alongside your people, grounded in your data and governed by your tenant.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => go("agentic-ai")}
                      className="inline-flex items-center gap-2 bg-[#0f6cbd] hover:bg-[#115ea3] text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-fl4 transition-colors"
                    >
                      <Sparkles className="w-4 h-4" /> Explore Agentic AI
                    </button>
                    <button
                      type="button"
                      onClick={() => go("custom-dev")}
                      className="inline-flex items-center gap-2 bg-fl-card border border-fl-stroke hover:bg-fl-hover text-fl-fg px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
                    >
                      <Code2 className="w-4 h-4" /> Custom development
                    </button>
                  </div>
                </motion.div>
                <CopilotDemo />
              </div>

              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <Card key={s.label} className="p-4">
                    <div className="text-3xl font-semibold text-fl-brand">{s.value}</div>
                    <div className="mt-1 text-sm text-fl-fg2">{s.label}</div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Agentic AI */}
            <section id="agentic-ai" className="scroll-mt-6">
              <SectionHeader
                icon={<Sparkles className="w-4 h-4" />}
                eyebrow="Agentic AI"
                title="Agents that reason, act and stay inside your guardrails"
                desc="From low-code Copilot Studio agents to pro-code custom engine agents, I design AI that doesn't just answer questions — it plans, calls tools and completes work across Microsoft 365."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {agenticServices.map((s) => (
                  <Card key={s.title} className="p-5 hover:shadow-fl8 transition-shadow">
                    <span className="copilot-tile w-10 h-10 rounded-lg text-white flex items-center justify-center">{s.icon}</span>
                    <h3 className="mt-3 font-semibold text-fl-fg">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-fl-fg2 leading-relaxed">{s.desc}</p>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 p-5 md:p-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="font-semibold text-fl-fg">Reference architecture</h3>
                  <span className="text-xs text-fl-fg3">Secured end-to-end with Microsoft Entra ID</span>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 items-stretch">
                  {architecture.map((a, i) => (
                    <div key={a.title} className="flex flex-col md:flex-row items-stretch">
                      <div className="flex-1 rounded-lg border border-fl-stroke bg-fl-canvas p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-fl-brand">
                          {a.icon}
                          {a.title}
                        </div>
                        <ul className="mt-2 space-y-1.5">
                          {a.items.map((it) => (
                            <li key={it} className="text-sm text-fl-fg bg-fl-card border border-fl-stroke rounded px-2 py-1">
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {i < architecture.length - 1 && (
                        <div className="flex items-center justify-center text-fl-fg3 py-1 md:py-0 md:px-1.5" aria-hidden="true">
                          <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Custom development */}
            <section id="custom-dev" className="scroll-mt-6">
              <SectionHeader
                icon={<Code2 className="w-4 h-4" />}
                eyebrow="Custom development"
                title="Built for the way your organization works"
                desc="When out-of-the-box isn't enough, I build custom apps and integrations across the Microsoft 365 platform — production-grade, secure and maintainable."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {customDev.map((c) => (
                  <Card key={c.title} className="p-5 hover:shadow-fl8 transition-shadow group">
                    <span className={`${c.tile} w-11 h-11 rounded-lg text-white flex items-center justify-center shadow-fl4`}>{c.icon}</span>
                    <h3 className="mt-3 font-semibold text-fl-fg">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-fl-fg2 leading-relaxed">{c.desc}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Approach */}
            <section id="approach" className="scroll-mt-6">
              <SectionHeader
                icon={<Workflow className="w-4 h-4" />}
                eyebrow="How I work"
                title="From idea to adoption"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {approach.map((a, i) => (
                  <div key={a.stage} className="rounded-lg bg-fl-rail border border-fl-stroke p-3">
                    <div className="flex items-center justify-between px-1">
                      <span className="font-semibold text-sm text-fl-fg">{a.stage}</span>
                      <span className="text-xs text-fl-fg3">Step {i + 1}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {a.items.map((it) => (
                        <div key={it} className="bg-fl-card border border-fl-stroke rounded-md px-3 py-2 text-sm text-fl-fg shadow-fl2 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-fl-brand" />
                          {it}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="scroll-mt-6">
              <SectionHeader
                icon={<Layers className="w-4 h-4" />}
                eyebrow="Skills & experience"
                title="15+ years across the Microsoft stack"
                desc="With 15+ years delivering enterprise-level solutions, I design, develop and deploy modern digital platforms on Microsoft 365, SharePoint Framework, full-stack web APIs and cloud-native services."
              />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tech.map((t) => (
                    <Card key={t.title} className="p-5">
                      <div className="flex items-center gap-2 font-semibold text-fl-fg">
                        <span className="text-fl-brand">{t.icon}</span>
                        {t.title}
                      </div>
                      <ul className="mt-3 space-y-3">
                        {t.items.map((it) => (
                          <li key={it.name}>
                            <div className="flex items-baseline justify-between gap-3 text-sm">
                              <span className="text-fl-fg">{it.name}</span>
                              {it.years && <span className="text-fl-fg3 text-xs shrink-0">{it.years} yrs</span>}
                            </div>
                            {it.years && (
                              <div className="mt-1 h-1 rounded-full bg-fl-hover overflow-hidden">
                                <div className="h-full rounded-full bg-fl-brand" style={{ width: `${Math.min(100, (it.years / 20) * 100)}%` }} />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
                <Card className="p-5">
                  <div className="flex items-center gap-2 font-semibold text-fl-fg">
                    <Briefcase className="w-5 h-5 text-fl-brand" />
                    Core strengths
                  </div>
                  <ul className="mt-3 space-y-1">
                    {strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-fl-fg px-2 py-2 rounded-md hover:bg-fl-hover">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-fl-brand" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>

            {/* Certifications */}
            <section id="certifications" className="scroll-mt-6">
              <SectionHeader icon={<Award className="w-4 h-4" />} eyebrow="Certifications" title="Credentials" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certs.map((c) => (
                  <Card key={c.name} className="p-4 flex items-center gap-3">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-fl-brand-subtle text-fl-brand flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-fl-fg">{c.name}</div>
                      <div className="text-xs text-fl-fg3">{c.issuer}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-6">
              <div className="copilot-hero rounded-xl overflow-hidden text-white">
                <div className="px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold opacity-90">
                      <Puzzle className="w-4 h-4" /> Let's build together
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
                      Ready to put AI agents and modern apps to work?
                    </h2>
                    <p className="mt-4 text-white/90 text-lg leading-relaxed">
                      Whether it's a Copilot agent, a Teams app, an SPFx intranet or a secure API on Azure — let's talk about what you want to automate.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#0f6cbd] hover:bg-white/90 px-6 py-3 rounded-md font-semibold shadow-fl8 transition-colors"
                    >
                      <Mail className="w-5 h-5" /> {contact.email}
                    </a>
                    <a
                      href={telHref}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      <Phone className="w-5 h-5" /> {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="pb-4 text-center text-xs text-fl-fg3">
              © {new Date().getFullYear()} Luis Enrique Arraiz Benitez — All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
