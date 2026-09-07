"use client";

/**
 * Course3 — same layout/design system as Course2, content swapped for TCEC.
 *
 * Hero photo: free-to-use Unsplash image (network cabling, by Taylor Vick,
 * Unsplash License — no attribution required; swap in your own licensed
 * photo before shipping if you'd rather not depend on an external host):
 * https://unsplash.com/photos/cable-network-M5tzZtFCOfs
 */

import {
  Server,
  Network,
  Database,
  ShieldCheck,
  Layers,
  Cloud,
  Boxes,
  Globe,
  CheckCircle2,
  ArrowRight,
  Award,
  DollarSign,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=80&w=2400&auto=format&fit=crop";

const STATS = [
  { label: "Core modules", value: "8" },
  { label: "Cloud platforms", value: "3" },
  { label: "Skill level", value: "Beg. → Adv." },
  { label: "Format", value: "Hands-on" },
];

const MODULES = [
  {
    icon: Server,
    title: "Compute & Virtual Machines Across All Clouds",
    desc: "Become a multi-cloud compute expert. Master AWS EC2 for elastic compute with instance types, pricing models (On-Demand, Reserved, Spot), and auto-scaling. Deploy Microsoft Azure Virtual Machines with Windows and Linux support, cost optimization, and availability sets. Work with Google Cloud Compute Engine for high-performance computing and custom machine types. Compare instance sizing, pricing strategies, and performance across platforms. Implement load balancing, auto-scaling groups, and instance templates. Master security groups, firewalls, and network interfaces. Learn cost optimization across all three providers. Understand when to choose each platform for specific workload requirements. Become fluent in switching between AWS, Azure, and GCP compute services seamlessly.",
  },
  {
    icon: Database,
    title: "Object & Block Storage Solutions",
    desc: "Master cloud storage architecture. Work with AWS S3 for unlimited object storage with versioning, lifecycle policies, and cross-region replication. Implement Microsoft Azure Blob Storage with access tiers (Hot, Cool, Archive) and lifecycle management. Deploy Google Cloud Storage with storage classes and data transfer services. Understand object storage use cases, pricing, and performance optimization. Master AWS EBS, Azure Managed Disks, and Google Persistent Disks for block storage with snapshots and encryption. Configure storage redundancy, replication, and disaster recovery. Implement encryption at rest and in transit. Set up access controls, shared access signatures, and IAM policies. Learn backup and recovery strategies. Become proficient in choosing the right storage solution for each cloud platform based on workload requirements.",
  },
  {
    icon: Network,
    title: "Virtual Networks & Connectivity",
    desc: "Design enterprise networking across clouds. Create and manage AWS VPCs with subnets, route tables, and security groups. Build Microsoft Azure Virtual Networks (VNets) with NSGs and network peering. Deploy Google Cloud VPCs with firewall rules and custom networks. Master VPN connectivity, Direct Connect (AWS), ExpressRoute (Azure), and Cloud Interconnect (GCP). Implement cross-cloud networking and hybrid cloud architectures. Configure DNS services: AWS Route 53, Azure DNS, and Google Cloud DNS. Set up load balancing across all platforms. Master network segmentation, security policies, and traffic management. Learn multi-cloud networking strategies and inter-cloud connectivity. Understand NAT, CDN, and DDoS protection across providers. Implement high-availability network architectures in all three clouds.",
  },
  {
    icon: ShieldCheck,
    title: "Identity, Access & Security (IAM)",
    desc: "Master enterprise identity management. Work with AWS IAM for user, group, role, and policy management. Implement Microsoft Entra ID (Azure AD) for hybrid identity and multi-tenant organizations. Configure Google Cloud IAM with predefined and custom roles. Master authentication and authorization across platforms. Implement MFA, SSO, and conditional access. Work with service accounts and API keys. Understand role-based access control (RBAC) in all three environments. Master least-privilege access principles and IAM best practices. Implement cross-cloud identity federation. Set up audit logging and compliance monitoring. Learn secrets management, encryption keys, and certificate management. Secure APIs and applications across AWS, Azure, and GCP.",
  },
  {
    icon: Database,
    title: "Relational Databases & Data Services",
    desc: "Become a multi-cloud database architect. Manage AWS RDS supporting MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. Deploy Microsoft Azure SQL Database and Azure SQL Managed Instance. Work with Google Cloud SQL and Cloud Spanner. Master database configuration, backups, and high availability. Implement read replicas, multi-region failover, and disaster recovery. Configure encryption, audit logging, and compliance features. Master backup and restore strategies. Understand pricing models and cost optimization. Learn database migration services across clouds. Implement performance monitoring and query optimization. Work with connection pooling, caching, and replication. Choose the right database service for multi-cloud deployments. Master data synchronization and hybrid database architectures.",
  },
  {
    icon: Layers,
    title: "Advanced Cloud Services & DevOps",
    desc: "Extend beyond core services. Work with containerization and Kubernetes across AWS EKS, Azure AKS, and Google GKE. Master CI/CD pipelines: AWS CodePipeline, Azure DevOps, and Google Cloud Build. Implement Infrastructure as Code (IaC) using Terraform for multi-cloud deployments. Work with serverless computing: AWS Lambda, Azure Functions, and Google Cloud Functions. Deploy message queues and event-driven architectures. Master monitoring and logging: AWS CloudWatch, Azure Monitor, and Google Cloud Logging. Implement disaster recovery and business continuity across clouds. Master cost management and billing across all three platforms. Learn multi-cloud orchestration and automation. Understand API management and integration services. Implement security best practices and compliance frameworks.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization & Multi-Cloud Strategies",
    desc: "Master cloud economics and architecture. Understand pricing models across all three providers — On-Demand, Reserved Instances, Spot/Preemptible, and Savings Plans. Implement cost allocation, budgets, and alerts. Master resource optimization and rightsizing. Learn commitment discounts and cost forecasting. Implement cost governance policies. Understand when to choose AWS vs Azure vs GCP based on cost, features, and compliance. Master hybrid cloud strategies combining on-premises infrastructure with cloud services. Learn multi-cloud redundancy and vendor lock-in mitigation. Implement cloud financial management best practices. Master ROI calculations and business case development. Understand cloud migration strategies and TCO analysis. Become fluent in multi-cloud vendor management and contract negotiation. Learn emerging cloud trends and future-proofing your infrastructure.",
  },
  {
    icon: Boxes,
    title: "Hands-On Multi-Cloud Project",
    desc: "Apply everything in real-world scenarios. Design and deploy a complete 3-tier application simultaneously across AWS, Azure, and GCP. Implement redundancy, failover, and load balancing across clouds. Set up centralized monitoring, logging, and security across all three platforms. Configure automated backups and disaster recovery. Implement Infrastructure as Code for reproducible deployments. Create cloud governance policies and cost controls. Document architecture, runbooks, and operational procedures. Present your multi-cloud architecture to industry standards. Understand production-ready deployments and best practices. Master troubleshooting across multiple cloud platforms.",
  },
];

const CERTS = [
  {
    icon: Cloud,
    name: "AWS",
    subtitle: "Solutions Architect prep",
    desc: "Covers the AWS side of the curriculum — EC2, S3, VPC, IAM, and RDS — mapped directly onto the AWS Solutions Architect exam blueprint. AWS holds roughly 35% of global cloud market share.",
  },
  {
    icon: Boxes,
    name: "Azure",
    subtitle: "Administrator prep",
    desc: "Covers Azure Virtual Machines, Blob Storage, VNets, Microsoft Entra ID, and Azure SQL, aligned with the Azure Administrator exam. Azure holds roughly 23% of global cloud market share.",
  },
  {
    icon: Globe,
    name: "GCP",
    subtitle: "Cloud Architect prep",
    desc: "Covers Compute Engine, Cloud Storage, Cloud SQL, Cloud Spanner, and Google Cloud IAM, aligned with the GCP Cloud Architect exam. GCP holds roughly 11% of global cloud market share.",
  },
];

const WHY = [
  { title: "Future-proof your career", desc: "Master 70%+ of the global cloud market in one certification." },
  { title: "Maximum earning potential", desc: "Multi-cloud engineers earn 30%+ more than single-cloud specialists." },
  { title: "Industry standard coverage", desc: "AWS (35%), Azure (23%), and GCP (11%) market share, side by side." },
  { title: "Hands-on training", desc: "Real cloud environments with AWS, Azure, and GCP sandbox accounts." },
  { title: "No vendor lock-in", desc: "Portable cloud skills applicable to any organization." },
  { title: "Enterprise demand", desc: "Fortune 500 companies deploy multi-cloud strategies." },
  { title: "Dual certifications ready", desc: "Prepare for AWS Solutions Architect, Azure Administrator, and GCP Cloud Architect." },
  { title: "Real-world scenarios", desc: "Multi-cloud architectures, migrations, and hybrid cloud deployments." },
  { title: "Expert instructors", desc: "Industry veterans with 15+ years of multi-cloud experience." },
  { title: "Career advancement", desc: "A path to Cloud Architect, Solutions Engineer, and DevOps roles." },
];

const AUDIENCE = [
  "IT professionals transitioning to cloud",
  "System administrators ready for cloud careers",
  "Network engineers specializing in cloud infrastructure",
  "DevOps engineers expanding multi-cloud expertise",
  "Cloud support specialists aiming for architect roles",
  "Anyone seeking the highest-paying cloud certification",
];

const CAREER_STEPS = ["Cloud Support Specialist", "Solutions Engineer / DevOps Engineer", "Cloud Architect"];

export default function Course3() {
  return (
    <div className="c3">
      <style>{`
        .c3 {
          --bg: #ffffff;
          --surface: #f3f7fd;
          --line: #dde8f5;
          --navy: #0b2a5b;
          --blue: #2563eb;
          --blue-dim: #1d4ed8;
          --blue-100: #dbeafe;
          --text: #0c1f36;
          --text-mute: #55677e;

          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.55;
        }

        .c3 * { box-sizing: border-box; }

        .c3 h1, .c3 h2, .c3 h3 {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .c3 .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ---------- Hero ---------- */

        .c3-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          background-image:
            linear-gradient(180deg, rgba(9,26,54,0.72) 0%, rgba(9,26,54,0.55) 45%, rgba(255,255,255,0.98) 96%),
            url('${HERO_IMAGE}');
          background-size: cover;
          background-position: center;
          padding: 7rem 0 8rem;
        }

        .c3-hero-content { max-width: 640px; }

        .c3-hero p.kicker { color: #cfe0fb; font-size: 0.95rem; margin-bottom: 1rem; }

        .c3-hero h1 {
          color: #ffffff;
          font-size: clamp(2.1rem, 4.4vw, 3.2rem);
          line-height: 1.1;
        }

        .c3-hero p.lede {
          color: #e4ecfb;
          font-size: 1.08rem;
          max-width: 54ch;
          margin-top: 1.3rem;
        }

        .c3-hero-ctas { display: flex; gap: 0.9rem; margin-top: 2.2rem; flex-wrap: wrap; }

        .btn-primary, .btn-ghost {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.85rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid transparent;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .btn-primary { background: #ffffff; color: var(--blue-dim); }
        .btn-primary:hover { transform: translateY(-1px); background: #eef4ff; }

        .btn-ghost {
          background: rgba(255,255,255,0.08);
          color: #ffffff;
          border-color: rgba(255,255,255,0.55);
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.18); }

        /* ---------- Stat strip ---------- */

        .c3-stats {
          max-width: 1100px;
          margin: -5.5rem auto 0;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .c3-stats-inner {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(11,42,91,0.18);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 1.8rem 1rem;
        }

        .stat { text-align: center; border-right: 1px solid var(--line); }
        .stat:last-child { border-right: none; }
        .stat .value { font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 700; color: var(--blue); }
        .stat .label { font-size: 0.82rem; color: var(--text-mute); margin-top: 0.3rem; }

        /* ---------- Sections ---------- */

        .c3-section { padding: 6rem 0 2rem; }
        .c3-section.tight { padding-top: 3.5rem; }

        .c3-head { max-width: 44ch; margin-bottom: 2.5rem; }
        .c3-head h2 { font-size: 1.8rem; }
        .c3-head p { color: var(--text-mute); margin-top: 0.7rem; }

        /* ---------- Overview split ---------- */

        .c3-overview {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
          padding: 4.5rem 0;
        }

        .c3-overview p { color: var(--text-mute); font-size: 1.05rem; }

        .c3-pull { background: var(--blue-100); border-radius: 16px; padding: 1.8rem; }
        .c3-pull p {
          font-family: 'Space Grotesk', sans-serif;
          color: var(--navy);
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 0;
        }

        /* ---------- Timeline curriculum ---------- */

        .timeline { position: relative; }

        .timeline::before {
          content: "";
          position: absolute;
          left: 23px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--line);
        }

        .t-item {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 1.5rem;
          padding-bottom: 2.75rem;
        }
        .t-item:last-child { padding-bottom: 0; }

        .t-node {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid var(--blue);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .t-body h3 { font-size: 1.1rem; }
        .t-body p { color: var(--text-mute); font-size: 0.92rem; margin-top: 0.5rem; max-width: 72ch; }

        /* ---------- Certs ---------- */

        .cert-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        .cert-card {
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 2rem;
          background: var(--surface);
        }

        .cert-medal {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--blue);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
        }

        .cert-card h3 { font-size: 1.2rem; }
        .cert-card .sub { color: var(--blue); font-size: 0.8rem; font-weight: 600; margin-top: 0.2rem; }
        .cert-card p { color: var(--text-mute); font-size: 0.92rem; margin-top: 0.8rem; }

        /* ---------- Why ---------- */

        .why-panel { background: var(--surface); border-radius: 20px; padding: 2.5rem; }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem 2.5rem; }
        .why-item { display: flex; gap: 0.9rem; }
        .why-item svg { color: var(--blue); width: 20px; height: 20px; flex-shrink: 0; margin-top: 0.15rem; }
        .why-item h4 { font-size: 1rem; margin: 0 0 0.3rem; font-family: 'Space Grotesk', sans-serif; }
        .why-item p { color: var(--text-mute); font-size: 0.9rem; margin: 0; }

        /* ---------- Audience ---------- */

        .audience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem 2.5rem; }
        .audience-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.9rem 1.1rem;
          border: 1px solid var(--line);
          border-radius: 10px;
          font-size: 0.92rem;
        }
        .audience-item svg { color: var(--blue); width: 18px; height: 18px; flex-shrink: 0; }

        /* ---------- Career stepper ---------- */

        .stepper { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; }

        .step { flex: 1; text-align: center; position: relative; }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--blue);
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.9rem;
          position: relative;
          z-index: 1;
        }

        .step:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 20px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: var(--line);
        }

        .step-label { font-size: 0.9rem; font-weight: 600; }

        /* ---------- CTA ---------- */

        .c3-cta {
          position: relative;
          margin: 6rem 0 0;
          padding: 5rem 0;
          background-image:
            linear-gradient(120deg, rgba(11,42,91,0.94), rgba(37,99,235,0.9)),
            url('${HERO_IMAGE}');
          background-size: cover;
          background-position: center;
        }

        .c3-cta-inner { text-align: center; max-width: 48ch; margin: 0 auto; }
        .c3-cta h2 { color: #fff; font-size: 2rem; }
        .c3-cta p { color: #d9e4fb; margin-top: 1rem; }
        .c3-cta .btn-primary { margin: 2rem auto 0; }

        @media (max-width: 860px) {
          .c3-overview { grid-template-columns: 1fr; }
          .cert-cards { grid-template-columns: 1fr; }
          .why-grid, .audience-grid { grid-template-columns: 1fr; }
          .c3-stats-inner { grid-template-columns: repeat(2, 1fr); row-gap: 1.3rem; }
          .stat:nth-child(2) { border-right: none; }
          .stat { border-bottom: 1px solid var(--line); padding-bottom: 1rem; }
          .stat:nth-last-child(-n+2) { border-bottom: none; padding-bottom: 0; }
          .stepper { flex-direction: column; align-items: flex-start; gap: 1.75rem; }
          .step { text-align: left; display: flex; align-items: center; gap: 1rem; }
          .step-circle { margin: 0; }
          .step:not(:last-child)::after { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="c3-hero">
        <div className="wrap">
          <div className="c3-hero-content">
            <p className="kicker">Multi-Cloud Certification · AWS · Azure · GCP</p>
            <h1>TRI Cloud Engineer Certification (TCEC)</h1>
            <p className="lede">
              Learn AWS, Microsoft Azure, and Google Cloud Platform side by side and become a
              versatile, multi-cloud architect — with hands-on expertise across 70%+ of global
              cloud deployments.
            </p>
            <div className="c3-hero-ctas">
              <button className="btn-primary">
                Enroll now <ArrowRight size={16} />
              </button>
              <button className="btn-ghost">View curriculum</button>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="c3-stats">
        <div className="c3-stats-inner">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="wrap c3-overview">
        <p>
          This industry-leading certification trains you on identical cloud services across all
          three major providers, making you the most sought-after cloud professional. From
          compute and storage to networking, databases, and security, you&apos;ll gain hands-on
          expertise in enterprise cloud infrastructure across AWS, Azure, and GCP — ready for the
          highest-paying cloud roles.
        </p>
        <div className="c3-pull">
          <p>Master 70%+ of the global cloud market in one certification — no vendor lock-in, no
          single-cloud ceiling.</p>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="wrap c3-section tight">
        <div className="c3-head">
          <h2>Course modules</h2>
          <p>Eight modules, each covering AWS, Azure, and GCP side by side.</p>
        </div>

        <div className="timeline">
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <div className="t-item" key={m.title}>
                <div className="t-node">
                  <Icon size={20} />
                </div>
                <div className="t-body">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CERTS */}
      <section className="wrap c3-section">
        <div className="c3-head">
          <h2>Certification pathway</h2>
          <p>The curriculum maps directly onto three industry-recognized cloud certifications.</p>
        </div>
        <div className="cert-cards">
          {CERTS.map((c) => {
            const Icon = c.icon;
            return (
              <div className="cert-card" key={c.name}>
                <div className="cert-medal">
                  <Icon size={22} />
                </div>
                <h3>{c.name}</h3>
                <p className="sub">{c.subtitle}</p>
                <p>{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY */}
      <section className="wrap c3-section">
        <div className="why-panel">
          <div className="c3-head" style={{ marginBottom: "2rem" }}>
            <h2>Why choose TCEC</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.title}>
                <CheckCircle2 />
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ENROLL */}
      <section className="wrap c3-section">
        <div className="c3-head">
          <h2>Who should enroll</h2>
        </div>
        <div className="audience-grid">
          {AUDIENCE.map((a) => (
            <div className="audience-item" key={a}>
              <CheckCircle2 />
              <span>{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CAREER */}
      <section className="wrap c3-section">
        <div className="c3-head">
          <h2>Where this leads</h2>
        </div>
        <div className="stepper">
          {CAREER_STEPS.map((step, i) => (
            <div className="step" key={step}>
              <div className="step-circle">{i + 1}</div>
              <div className="step-label">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="c3-cta">
        <div className="wrap c3-cta-inner">
          <Award size={28} color="#fff" style={{ marginBottom: "1rem" }} />
          <h2>Ready for the highest-paying cloud roles?</h2>
          <p>Eight modules. Three cloud platforms. One certification that covers 70%+ of the global cloud market.</p>
          <button className="btn-primary">
            Enroll now <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}