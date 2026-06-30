import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Database,
  FileChartColumn,
  Gauge,
  GitBranch,
  Layers3,
  Mail,
  Network,
  RefreshCw,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const contactHref =
  "mailto:contact@hydradata.fr?subject=HYDRADATA%20consultation%20request";

const painPoints = [
  {
    title: "Scattered data sources",
    text: "Data is spread across Excel files, CRM tools, finance exports, marketing platforms and manual reports.",
    icon: Database,
  },
  {
    title: "Manual reporting",
    text: "Teams spend too much time cleaning, copying and rebuilding the same reports every week.",
    icon: ClipboardList,
  },
  {
    title: "Unclear KPIs",
    text: "Different teams use different definitions, making performance hard to compare and trust.",
    icon: Gauge,
  },
  {
    title: "Low decision confidence",
    text: "Management needs clearer, faster and more reliable data to make business decisions.",
    icon: SearchCheck,
  },
];

const services = [
  {
    title: "Power BI Dashboards",
    text: "Interactive dashboards for sales, marketing, finance and operational reporting.",
    icon: BarChart3,
  },
  {
    title: "Data Automation",
    text: "Automated data flows that reduce manual reporting and improve reliability.",
    icon: Workflow,
  },
  {
    title: "KPI Design",
    text: "Clear metric definitions and reporting frameworks for consistent performance tracking.",
    icon: FileChartColumn,
  },
  {
    title: "Data Governance",
    text: "Data-flow mapping, quality rules, documentation and access-control principles.",
    icon: ShieldCheck,
  },
  {
    title: "AI-assisted Workflows",
    text: "Practical AI workflows for reporting, data cleaning, summarization and business productivity.",
    icon: Sparkles,
  },
  {
    title: "CRM & Business Data Analysis",
    text: "Structuring customer, sales and operational data into decision-ready datasets.",
    icon: Layers3,
  },
];

const process = [
  {
    title: "Diagnose",
    text: "We review your data sources, reporting process, business needs and current pain points.",
  },
  {
    title: "Structure",
    text: "We clean, organize and model your data into a more reliable reporting foundation.",
  },
  {
    title: "Build",
    text: "We design Power BI dashboards, KPI views and automated reporting workflows.",
  },
  {
    title: "Automate",
    text: "We reduce manual work with repeatable pipelines, Power Automate flows or structured refresh logic.",
  },
  {
    title: "Adopt",
    text: "We document the solution, support users and help teams integrate reporting into daily decisions.",
  },
];

const useCases = [
  {
    title: "Sales Performance Reporting",
    text: "Pipeline, revenue, rebooking, conversion and regional sales performance.",
  },
  {
    title: "Marketing Performance Analysis",
    text: "Campaign performance, audience segmentation, lead quality and channel reporting.",
  },
  {
    title: "Finance & Management Reporting",
    text: "Revenue tracking, cost visibility, recurring reports and executive dashboards.",
  },
  {
    title: "CRM Data Structuring",
    text: "Cleaning, deduplication, segmentation and customer data enrichment.",
  },
  {
    title: "Multi-region Operations",
    text: "Standardized reporting across countries, teams, markets and business units.",
  },
  {
    title: "Executive Decision Dashboards",
    text: "High-level KPI dashboards designed for management visibility and faster decisions.",
  },
];

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Use Cases", "#use-cases"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <main id="home">
      <header className="site-header" aria-label="HYDRADATA site header">
        <a className="brand-mark" href="#home" aria-label="HYDRADATA home">
          <Image
            src="/brand/logo-primary.svg"
            alt="HYDRADATA"
            width={210}
            height={48}
            priority
          />
        </a>
        <nav className="top-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-small button-primary" href={contactHref}>
          <CalendarCheck size={16} aria-hidden="true" />
          <span>Book a Consultation</span>
        </a>
      </header>

      <section className="hero section-panel">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent data & business intelligence consultancy</p>
            <h1>Turn fragmented data into reliable business decisions.</h1>
            <p className="hero-lede">
              HYDRADATA helps B2B teams build automated Power BI dashboards,
              reporting infrastructure, KPI frameworks, and AI-assisted
              workflows for clearer commercial and operational decisions.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button button-primary" href={contactHref}>
                <CalendarCheck size={18} aria-hidden="true" />
                <span>Book a Consultation</span>
              </a>
              <a className="button button-secondary" href="#services">
                <span>Explore Services</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="trust-strip" aria-label="HYDRADATA service focus">
              <span>Power BI</span>
              <span>Data Automation</span>
              <span>KPI Design</span>
              <span>AI Workflows</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Business intelligence dashboard preview">
            <div className="dashboard-shell">
              <div className="dashboard-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="dashboard-layout">
                <aside className="dashboard-sidebar">
                  <div />
                  <div />
                  <div />
                  <div />
                </aside>
                <div className="dashboard-main">
                  <div className="metric-row">
                    <div>
                      <small>Revenue</small>
                      <strong>€1.28M</strong>
                    </div>
                    <div>
                      <small>Pipeline</small>
                      <strong>64%</strong>
                    </div>
                    <div>
                      <small>Refresh</small>
                      <strong>Auto</strong>
                    </div>
                  </div>
                  <div className="chart-grid">
                    <div className="bar-chart" aria-hidden="true">
                      <span style={{ height: "42%" }} />
                      <span style={{ height: "66%" }} />
                      <span style={{ height: "54%" }} />
                      <span style={{ height: "82%" }} />
                      <span style={{ height: "70%" }} />
                    </div>
                    <div className="flow-chart" aria-hidden="true">
                      <Network size={26} />
                      <GitBranch size={30} />
                      <RefreshCw size={24} />
                    </div>
                  </div>
                  <div className="data-flow" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-note">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Decision-ready reporting foundation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-panel pain-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Common reporting challenges</p>
            <h2>When reporting becomes manual, fragmented and unreliable, decisions slow down.</h2>
          </div>
          <div className="card-grid four">
            {painPoints.map((item) => (
              <article className="info-card" key={item.title}>
                <item.icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel services-section" id="services">
        <div className="section-inner">
          <div className="split-heading">
            <div>
              <p className="eyebrow">Core services</p>
              <h2>Data, BI and automation services for B2B teams.</h2>
            </div>
            <p>
              Practical support across the reporting lifecycle, from source data
              structure to dashboards that teams can maintain and trust.
            </p>
          </div>
          <div className="card-grid three">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <service.icon size={24} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel process-section" id="process">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>From scattered data to decision-ready reporting.</h2>
          </div>
          <div className="process-list">
            {process.map((step, index) => (
              <article className="process-item" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel usecase-section" id="use-cases">
        <div className="section-inner">
          <div className="split-heading">
            <div>
              <p className="eyebrow">Use cases</p>
              <h2>Built for practical B2B reporting needs.</h2>
            </div>
            <p>
              HYDRADATA focuses on real operating questions across commercial,
              finance, CRM and management reporting.
            </p>
          </div>
          <div className="usecase-grid">
            {useCases.map((useCase) => (
              <article className="usecase-card" key={useCase.title}>
                <Route size={20} aria-hidden="true" />
                <div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel about-section" id="about">
        <div className="section-inner about-grid">
          <div className="about-copy">
            <p className="eyebrow">About HYDRADATA</p>
            <h2>About HYDRADATA</h2>
            <p>
              HYDRADATA SASU is an independent data and business intelligence
              consultancy based in France.
            </p>
            <p>
              We help B2B organizations turn fragmented operational data into
              reliable reporting infrastructure, automated dashboards and clearer
              business decisions.
            </p>
            <p>
              Our work combines business analysis, Power BI development, data
              automation, KPI design, data governance and AI-assisted workflows.
              The goal is to build practical data systems that business teams can
              actually use, maintain and trust.
            </p>
            <strong>From fragmented data to reliable business decisions.</strong>
          </div>
          <div className="about-media">
            <Image
              src="/brand/linkedin-company-banner.png"
              alt="HYDRADATA LinkedIn company banner"
              width={1128}
              height={191}
            />
            <div className="about-points">
              <span>France-based consultancy</span>
              <span>Microsoft data ecosystem</span>
              <span>B2B reporting focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="section-inner final-cta-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to make your business data easier to trust, use and act on?</h2>
            <p>
              Whether you need a Power BI dashboard, a cleaner reporting process,
              a KPI framework or a more automated data workflow, HYDRADATA can
              help you structure the next step.
            </p>
          </div>
          <div className="contact-action">
            <a className="button button-primary button-light" href={contactHref}>
              <Mail size={18} aria-hidden="true" />
              <span>Contact HYDRADATA</span>
            </a>
            <p>Tell us about your reporting challenge and we will help you identify the clearest next step.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
