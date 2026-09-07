"use client";

/**
 * Course2 — image-led layout, same blue/white theme as Course1.
 *
 * The hero photo is a free-to-use Unsplash image (server rack, by Kevin Ache,
 * Unsplash License — no attribution required, but swap in your own licensed
 * photo before shipping if you'd rather not depend on an external host):
 * https://unsplash.com/photos/a-rack-of-servers-in-a-server-room-2JJ3wBHu4_0
 */

import {
  Cpu,
  MonitorCog,
  Network,
  Server,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Layers,
  Award,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?fm=jpg&q=80&w=2400&auto=format&fit=crop";

const STATS = [
  { label: "Core modules", value: "6" },
  { label: "Certification tracks", value: "2" },
  { label: "Skill level", value: "Beg. → Adv." },
  { label: "Format", value: "Hands-on" },
];

const MODULES = [
  {
    icon: Cpu,
    title: "PC Hardware Installation & Troubleshooting",
    desc: "Learn the fundamentals of desktop support engineering. Gain expertise in identifying, installing, and troubleshooting PC components including RAM, motherboards, hard drives, SMPS, and processors. Master cooling mechanisms (air cooling, liquid cooling, thermal paste application), peripheral device setup, and complete PC assembly. Dive into BIOS/UEFI settings, printer connectivity, scanner integration, and beep code identification for quick diagnostics. Includes laptop parts identification, upgrades, and server hardware concepts.",
  },
  {
    icon: MonitorCog,
    title: "Operating Systems Configuration & Troubleshooting",
    desc: "Become proficient in managing modern operating systems. Install, configure, and troubleshoot Windows 10/11 with complete coverage of security, privacy, networking, and performance optimization. Learn Linux fundamentals (Parrot, Ubuntu) with dual-boot setups and boot process management. Master user and workstation management, device driver installation, and application troubleshooting. Explore Windows Tools, Control Panel, PowerShell, WSL (Windows Subsystem for Linux), and essential Linux commands. Handle system maintenance, user profiles, file management, and OS-related issue resolution like a pro.",
  },
  {
    icon: Network,
    title: "Network Essentials & Infrastructure",
    desc: "Develop comprehensive networking skills. Understand network devices, topologies, and the OSI/TCP-IP model. Master IP addressing, subnetting, and network parameters. Learn cable types (UTP, Fiber), crimping standards, Ethernet, and LAN technologies. Set up both wired and wireless LANs, configure DNS and DHCP, and implement network security (Firewall, IPS, IDS, VPN, SSL/TLS). Use advanced monitoring tools like Wireshark for network analysis. Troubleshoot connectivity issues with command-line tools and remote access solutions (PuTTY, RDP, TeamViewer, ConnectWise). Manage network printers and understand network documentation.",
  },
  {
    icon: Terminal,
    title: "Microsoft 365 & Collaboration Tools",
    desc: "Master productivity and communication platforms. Learn MS Word, Excel (with formulas and data management), and PowerPoint (template and theme creation). Master pivot tables, sorting, filtering, and data visualization. Configure Outlook for multiple email accounts (Offline, Cloud, POP/IMAP, Mobile). Set up Google Workspace integration and troubleshoot Outlook issues including backup, PST/OST management, and performance optimization. Manage OneDrive and collaborate effectively with MS Teams and SharePoint. Handle user licensing and account management across cloud platforms.",
  },
  {
    icon: Server,
    title: "Windows Server 2022 Administration (MCSA Paper 1)",
    desc: "Advance into enterprise IT. Master Windows Server 2022 installation, upgrades, and workload migration. Manage Active Directory (ADDS) objects and infrastructure. Implement network infrastructure services and identity/group policies. Configure local and enterprise storage solutions, implement Storage Spaces, and enable data deduplication. Install and manage Hyper-V virtual machines and containerization (Windows and Hyper-V containers). Deploy backup and restore solutions using Server Backup. Configure remote access, web services, and implement comprehensive security protocols. Monitor and troubleshoot server issues at the enterprise level.",
  },
  {
    icon: Layers,
    title: "Advanced Certifications Pathway",
    desc: "CCNA (Routing & Switching) — Become a networking professional. Network fundamentals, IP addressing, network access technologies, Cisco device configuration, advanced IP connectivity, IP services implementation, infrastructure security, WAN technologies, automation, and troubleshooting. RedHat SA1 (System Administration) — Specialize in Linux. Command-line access and file management, RHEL help and documentation, text file creation and editing, local user and group management, Linux file permissions, process management, service and daemon control, OpenSSH configuration, security, networking, log analysis, software package management, and virtualization.",
  },
];

const CERTS = [
  {
    icon: Network,
    name: "CCNA",
    subtitle: "Routing & Switching",
    desc: "Become a networking professional. Network fundamentals, IP addressing, network access technologies, Cisco device configuration, advanced IP connectivity, IP services implementation, infrastructure security, WAN technologies, automation, and troubleshooting.",
  },
  {
    icon: Terminal,
    name: "RedHat SA1",
    subtitle: "System Administration",
    desc: "Specialize in Linux. Command-line access and file management, RHEL help and documentation, text file creation and editing, local user and group management, Linux file permissions, process management, service and daemon control, OpenSSH configuration, security, networking, log analysis, software package management, and virtualization.",
  },
];

const WHY = [
  { icon: CheckCircle2, title: "Hands-on training", desc: "Real hardware and live environments, not slides." },
  { icon: CheckCircle2, title: "Industry-relevant tools", desc: "The same platforms Fortune 500 IT teams run daily." },
  { icon: CheckCircle2, title: "Career-ready certifications", desc: "Structured prep for CCNA and RedHat SA1." },
  { icon: CheckCircle2, title: "Beginner to advanced", desc: "No prior IT background assumed, ever." },
];

const CAREER_STEPS = ["Desktop Support", "Junior Network Admin", "System Administrator"];

export default function Course2() {
  return (
    <div className="c2">
      <style>{`
        .c2 {
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

        .c2 * { box-sizing: border-box; }

        .c2 h1, .c2 h2, .c2 h3 {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .c2 .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ---------- Hero ---------- */

        .c2-hero {
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

        .c2-hero-content {
          max-width: 620px;
        }

        .c2-hero p.kicker {
          color: #cfe0fb;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .c2-hero h1 {
          color: #ffffff;
          font-size: clamp(2.2rem, 4.6vw, 3.4rem);
          line-height: 1.08;
        }

        .c2-hero p.lede {
          color: #e4ecfb;
          font-size: 1.08rem;
          max-width: 50ch;
          margin-top: 1.3rem;
        }

        .c2-hero-ctas {
          display: flex;
          gap: 0.9rem;
          margin-top: 2.2rem;
          flex-wrap: wrap;
        }

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

        .btn-primary {
          background: #ffffff;
          color: var(--blue-dim);
        }
        .btn-primary:hover { transform: translateY(-1px); background: #eef4ff; }

        .btn-ghost {
          background: rgba(255,255,255,0.08);
          color: #ffffff;
          border-color: rgba(255,255,255,0.55);
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.18); }

        /* ---------- Stat strip (overlaps hero) ---------- */

        .c2-stats {
          max-width: 1100px;
          margin: -5.5rem auto 0;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .c2-stats-inner {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(11,42,91,0.18);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 1.8rem 1rem;
        }

        .stat {
          text-align: center;
          border-right: 1px solid var(--line);
        }
        .stat:last-child { border-right: none; }

        .stat .value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--blue);
        }
        .stat .label {
          font-size: 0.82rem;
          color: var(--text-mute);
          margin-top: 0.3rem;
        }

        /* ---------- Sections ---------- */

        .c2-section {
          padding: 6rem 0 2rem;
        }

        .c2-section.tight { padding-top: 3.5rem; }

        .c2-head {
          max-width: 40ch;
          margin-bottom: 2.5rem;
        }
        .c2-head h2 { font-size: 1.8rem; }
        .c2-head p {
          color: var(--text-mute);
          margin-top: 0.7rem;
        }

        /* ---------- Overview split ---------- */

        .c2-overview {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
          padding: 4.5rem 0;
        }

        .c2-overview p {
          color: var(--text-mute);
          font-size: 1.05rem;
        }

        .c2-pull {
          background: var(--blue-100);
          border-radius: 16px;
          padding: 1.8rem;
        }
        .c2-pull p {
          font-family: 'Space Grotesk', sans-serif;
          color: var(--navy);
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 0;
        }

        /* ---------- Timeline curriculum ---------- */

        .timeline {
          position: relative;
        }

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

        .t-body h3 {
          font-size: 1.1rem;
        }
        .t-body p {
          color: var(--text-mute);
          font-size: 0.92rem;
          margin-top: 0.5rem;
          max-width: 72ch;
        }

        /* ---------- Certs ---------- */

        .cert-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

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
        .cert-card .sub {
          color: var(--blue);
          font-size: 0.8rem;
          font-weight: 600;
          margin-top: 0.2rem;
        }
        .cert-card p {
          color: var(--text-mute);
          font-size: 0.92rem;
          margin-top: 0.8rem;
        }

        /* ---------- Why ---------- */

        .why-panel {
          background: var(--surface);
          border-radius: 20px;
          padding: 2.5rem;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem 2.5rem;
        }

        .why-item { display: flex; gap: 0.9rem; }
        .why-item svg { color: var(--blue); width: 20px; height: 20px; flex-shrink: 0; margin-top: 0.15rem; }
        .why-item h4 { font-size: 1rem; margin: 0 0 0.3rem; font-family: 'Space Grotesk', sans-serif; }
        .why-item p { color: var(--text-mute); font-size: 0.9rem; margin: 0; }

        /* ---------- Career stepper ---------- */

        .stepper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .step {
          flex: 1;
          text-align: center;
          position: relative;
        }

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

        .step-label {
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* ---------- CTA ---------- */

        .c2-cta {
          position: relative;
          margin: 6rem 0 0;
          padding: 5rem 0;
          background-image:
            linear-gradient(120deg, rgba(11,42,91,0.94), rgba(37,99,235,0.9)),
            url('${HERO_IMAGE}');
          background-size: cover;
          background-position: center;
        }

        .c2-cta-inner { text-align: center; max-width: 46ch; margin: 0 auto; }

        .c2-cta h2 { color: #fff; font-size: 2rem; }
        .c2-cta p { color: #d9e4fb; margin-top: 1rem; }
        .c2-cta .btn-primary { margin: 2rem auto 0; }

        @media (max-width: 860px) {
          .c2-overview { grid-template-columns: 1fr; }
          .cert-cards, .why-grid { grid-template-columns: 1fr; }
          .c2-stats-inner { grid-template-columns: repeat(2, 1fr); row-gap: 1.3rem; }
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
      <section className="c2-hero">
        <div className="wrap">
          <div className="c2-hero-content">
            <p className="kicker">IT Support &amp; Networking · Certification Track</p>
            <h1>Computer IT Support &amp; Networking Professional</h1>
            <p className="lede">
              From your first PC build to administering enterprise servers — a hands-on path
              into IT support and networking, built for beginners and career switchers.
            </p>
            <div className="c2-hero-ctas">
              <button className="btn-primary">
                Enroll now <ArrowRight size={16} />
              </button>
              <button className="btn-ghost">View curriculum</button>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="c2-stats">
        <div className="c2-stats-inner">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="wrap c2-overview">
        <p>
          This is a ground-up IT support and networking program built for beginners and career
          switchers alike. You&apos;ll work through the same problems desktop support engineers,
          network admins, and system administrators solve every day: broken peripherals,
          misconfigured subnets, locked-out user accounts, failed backups.
        </p>
        <div className="c2-pull">
          <p>Six modules, each building on the last — so the fundamentals are muscle memory by
          the time you reach enterprise servers.</p>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="wrap c2-section tight">
        <div className="c2-head">
          <h2>Course modules</h2>
          <p>A structured progression from PC basics to enterprise infrastructure.</p>
        </div>

        <div className="timeline">
          {MODULES.map((m, i) => {
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
      <section className="wrap c2-section">
        <div className="c2-head">
          <h2>Certification pathway</h2>
          <p>Module 6 prepares you for two credentials in parallel.</p>
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
      <section className="wrap c2-section">
        <div className="why-panel">
          <div className="c2-head" style={{ marginBottom: "2rem" }}>
            <h2>Why train with CISNP</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div className="why-item" key={w.title}>
                  <Icon />
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section className="wrap c2-section">
        <div className="c2-head">
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
      <section className="c2-cta">
        <div className="wrap c2-cta-inner">
          <Award size={28} color="#fff" style={{ marginBottom: "1rem" }} />
          <h2>Start your IT career today</h2>
          <p>Six modules. Two certification tracks. One clear path into enterprise IT.</p>
          <button className="btn-primary">
            Enroll now <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}