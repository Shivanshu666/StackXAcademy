"use client";

import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Award,
  Clock,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Briefcase,
  Headphones,
  PlayCircle,
  BarChart3,
  Code2,
  LineChart,
  Brain,
  Paintbrush,
  Megaphone,
  Binary,
  Mail,
  Phone,
  MapPin,
  // Facebook,
  // Twitter,
  // Linkedin,
  // Instagram,
  Quote,
  Cpu,
  Monitor,
  NetworkIcon,
} from "lucide-react";
import { Network } from "node:inspector";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/* -------------------------------------------------------------------------- */
/*  Static data                                                               */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { label: "Students", value: "10K+", icon: Users },
  { label: "Courses", value: "50+", icon: BookOpen },
  { label: "Expert Instructors", value: "25+", icon: GraduationCap },
  { label: "Satisfaction", value: "95%", icon: Award },
];

const ABOUT_FEATURES = [
  "Expert-led learning",
  "Practical, hands-on projects",
  "Career-focused education",
];

type Course = {
  id: number;
  category: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  students: string;
  duration: string;
  price: string;
  icon: typeof Code2;
};

const COURSES: Course[] = [
  {
     id: 1,
  category: "IT Support",
  title: "Install & Troubleshoot PC Hardware",
  description:
    "Learn PC hardware installation, troubleshooting, cooling, peripherals, and complete computer assembly from the ground up.",
  instructor: "Desktop Support Expert",
  rating: 4.9,
  students: "2.8K",
  duration: "8 weeks",
  price: "$149",
  icon: Cpu,

  },
  {
     id: 2,
  category: "Operating Systems",
  title: "Configure & Troubleshoot OS",
  description:
    "Master Windows and Linux operating systems, installation, configuration, troubleshooting, security, user management, networking, and system maintenance.",
  instructor: "OS Support Expert",
  rating: 4.9,
  students: "2.5K",
  duration: "8 weeks",
  price: "$149",
  icon: Monitor,
  },
  {
    id: 3,
  category: "Networking",
  title: "Network Essentials",
  description:
    "Learn computer networking fundamentals, network devices, IP addressing, subnetting, LAN configuration, wireless networking, troubleshooting, and network security.",
  instructor: "Network Engineering Expert",
  rating: 4.9,
  students: "2.6K",
  duration: "8 weeks",
  price: "$149",
  icon: Globe,
  },
  {
    id: 4,
  category: "Microsoft 365",
  title: "Microsoft 365 & Outlook",
  description:
    "Master Microsoft Word, Excel, PowerPoint, Outlook, Teams, SharePoint, OneDrive, and essential Microsoft 365 administration and troubleshooting.",
  instructor: "Microsoft 365 Expert",
  rating: 4.8,
  students: "2.4K",
  duration: "8 weeks",
  price: "$149",
  icon: Monitor,
  },
  {
    id: 5,
  category: "Server Administration",
  title: "Microsoft Server Administration",
  description:
    "Master Windows Server 2022 administration, Active Directory, network services, Group Policy, storage, virtualization, security, backup, and server troubleshooting.",
  instructor: "Windows Server Administrator",
  rating: 4.9,
  students: "2.3K",
  duration: "8 weeks",
  price: "$149",
  icon: Monitor,
  },
  {
    id: 6,
  category: "Networking",
  title: "CCNA — Routing & Switching",
  description:
    "Build strong networking skills with Cisco routing, switching, IP addressing, network services, infrastructure security, WAN technologies, and troubleshooting.",
  instructor: "Cisco Network Engineer",
  rating: 4.9,
  students: "2.2K",
  duration: "8 weeks",
  price: "$149",
  icon: Globe,
  },
  {
  id: 7,
  category: "Linux Administration",
  title: "Red Hat Linux System Administration",
  description:
    "Master Red Hat Linux system administration, command-line operations, users and groups, permissions, processes, services, networking, security, and system management.",
  instructor: "Red Hat Linux Administrator",
  rating: 4.9,
  students: "2.1K",
  duration: "8 weeks",
  price: "$149",
  icon: Monitor,
  },
  {
  id: 8,
  category: "IT Support",
  title: "Windows System Administration",
  description:
    "Learn Windows installation, user management, system configuration, security, troubleshooting, updates, and administration from the ground up.",
  instructor: "Windows Administration Expert",
  rating: 4.8,
  students: "2.4K",
  duration: "9 hours",
  price: "$159",
  icon: Monitor,
},
{
  id: 9,
  category: "IT Support",
  title: "Networking Fundamentals & Troubleshooting",
  description:
    "Master networking fundamentals including IP addresses, DNS, DHCP, routers, switches, Wi-Fi, network security, and practical troubleshooting.",
  instructor: "Network Support Specialist",
  rating: 4.9,
  students: "3.1K",
  duration: "10 hours",
  price: "$169",
  icon: Monitor,
},
{
  id: 10,
  category: "IT Support",
  title: "Cybersecurity Fundamentals for IT Support",
  description:
    "Understand cybersecurity fundamentals, common threats, password security, malware protection, phishing prevention, access control, and secure IT practices.",
  instructor: "Cybersecurity Professional",
  rating: 4.9,
  students: "3.6K",
  duration: "11 hours",
  price: "$179",
  icon: Monitor,
},

];

const CATEGORIES = ["All", ...Array.from(new Set(COURSES.map((c) => c.category)))];

const WHY_CHOOSE_US = [
  {
    title: "Expert Instructors",
    description:
      "Learn from industry professionals who bring real-world experience into every lesson.",
    icon: GraduationCap,
  },
  {
    title: "Practical Learning",
    description:
      "Every course is built around hands-on projects, not just theory you'll forget.",
    icon: PlayCircle,
  },
  {
    title: "Flexible Learning",
    description:
      "Study at your own pace, on any device, on a schedule that fits your life.",
    icon: Clock,
  },
  {
    title: "Career Support",
    description:
      "Get guidance, mentorship, and resources to help you land your next opportunity.",
    icon: Briefcase,
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Nair",
    role: "Frontend Developer",
    quote:
      "The Full Stack course completely changed my career path. The projects felt real, and the instructors actually cared about my progress.",
    initials: "PN",
  },
  {
    name: "Arjun Desai",
    role: "Data Analyst",
    quote:
      "I went from knowing almost nothing about data to landing a job as an analyst in six months. The structure of the course made all the difference.",
    initials: "AD",
  },
  {
    name: "Meera Iyer",
    role: "UI/UX Designer",
    quote:
      "Practical, well-paced, and genuinely engaging. I finally understood design systems after years of trying to learn on my own.",
    initials: "MI",
  },
  {
    name: "Sahil Verma",
    role: "ML Engineer",
    quote:
      "The AI & ML course balances theory and practice perfectly. I built a portfolio I'm actually proud to show employers.",
    initials: "SV",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BlogTeaser />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/stack-x-logo.png"
            alt="Stack X Academy"
            className="h-full w-12 object-contain"
           />
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Stack X <span className="text-blue-600">Academy</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#courses"
          className="hidden items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 lg:inline-flex"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-slate-200 bg-white px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#courses"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white"
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Left content */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
            <Sparkles className="h-3.5 w-3.5" />
            Learn. Build. Grow.
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            Build Skills That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Shape Your Future
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Learn practical skills from expert instructors through carefully
            designed courses that help you grow your knowledge, career, and
            confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex -space-x-3">
              {["PN", "AD", "MI", "SV"].map((initials) => (
                <span
                  key={initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[11px] font-semibold text-blue-700"
                >
                  {initials}
                </span>
              ))}
            </div>
            <p>
              Joined by <span className="font-semibold text-slate-800">10,000+</span>{" "}
              learners worldwide
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Main dashboard card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-blue-900/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">Your Progress</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    UI/UX Design Path
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                  <BarChart3 className="h-5 w-5 text-white" />
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: "Design Fundamentals", pct: 100 },
                  { label: "Wireframing", pct: 80 },
                  { label: "Prototyping", pct: 45 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-slate-600">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-blue-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700">
                    On track to finish this week
                  </span>
                </div>
              </div>
            </div>

            {/* Floating small card - students */}
            <div className="absolute -left-8 top-10 hidden animate-float rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-blue-900/10 sm:flex sm:items-center sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                <Users className="h-4 w-4 text-blue-600" />
              </span>
              <div>
                <p className="text-sm font-bold leading-none text-slate-900">10,000+</p>
                <p className="mt-1 text-[11px] text-slate-500">Active Students</p>
              </div>
            </div>

            {/* Floating small card - rating */}
            <div className="absolute -bottom-6 -right-4 hidden animate-float-delayed rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-blue-900/10 sm:flex sm:items-center sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              </span>
              <div>
                <p className="text-sm font-bold leading-none text-slate-900">4.9/5</p>
                <p className="mt-1 text-[11px] text-slate-500">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats                                                                     */
/* -------------------------------------------------------------------------- */

function StatsSection() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-8 text-center transition-colors hover:bg-blue-50/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
                <stat.icon className="h-5 w-5 text-blue-600" />
              </span>
              <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left visual */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-1 shadow-xl shadow-blue-900/15">
            <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-blue-50 to-white">
              <div className="flex flex-col items-center gap-3 text-blue-600">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg shadow-blue-900/10">
                  <GraduationCap className="h-10 w-10" strokeWidth={1.6} />
                </span>
                <p className="text-sm font-semibold text-blue-700/80">
                  Learning that fits your life
                </p>
              </div>
            </div>
          </div>

          {/* Floating info card */}
          <div className="absolute -bottom-8 -right-4 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-blue-900/10 sm:-right-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
              <Award className="h-6 w-6 text-white" />
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none text-slate-900">
                25+
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Expert Instructors
              </p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Learning Made Simple, Practical &amp; Effective
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            We believe education should be practical, engaging, and directly
            tied to real outcomes. Our courses are designed by industry
            experts and built around projects you can actually put in your
            portfolio &mdash; not just theory you&apos;ll forget.
          </p>

          <ul className="mt-8 space-y-4">
            {ABOUT_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#courses"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Discover Our Story
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Courses                                                                   */
/* -------------------------------------------------------------------------- */

function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="bg-slate-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Courses
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore Our Popular Courses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Learn in-demand skills through practical, structured, and
            engaging courses.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/10">
      {/* Image placeholder */}
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-500">
        <Icon className="h-14 w-14 text-white/90" strokeWidth={1.5} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-blue-700 backdrop-blur">
          {course.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
          {course.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {course.description}
        </p>

        <p className="mt-4 text-xs font-medium text-slate-500">
          By <span className="text-slate-700">{course.instructor}</span>
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {course.students}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-xl font-extrabold text-slate-900">
            {course.price}
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            View Course
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Choose Us                                                             */
/* -------------------------------------------------------------------------- */

function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Better Way to Learn
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We combine expert instruction with practical projects and real
            support to help you succeed.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/10"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-600">
                <item.icon className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white" />
              </span>
              <h3 className="mt-5 text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Real stories from learners who grew their skills and careers with
            us.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10"
            >
              <Quote className="h-6 w-6 text-blue-200" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold leading-none text-slate-900">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Blog teaser                                                               */
/* -------------------------------------------------------------------------- */

const BLOG_POSTS = [
  {
    title: "5 Habits of Highly Effective Online Learners",
    excerpt:
      "Simple, practical habits that make it easier to stay consistent and finish what you start.",
    tag: "Learning Tips",
  },
  {
    title: "How to Build a Portfolio That Gets You Hired",
    excerpt:
      "What actually matters to hiring managers when they review a junior developer's portfolio.",
    tag: "Career",
  },
  {
    title: "Is a Career in Data Science Right for You?",
    excerpt:
      "An honest look at the skills, mindset, and daily work behind a data science career.",
    tag: "Data Science",
  },
];

function BlogTeaser() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              From the Blog
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Insights to Help You Grow
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.title}
              href="#blog"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/10"
            >
              <div className="flex h-32 items-center justify-center bg-blue-50">
                <BookOpen className="h-10 w-10 text-blue-300" strokeWidth={1.5} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-600">
                  {post.tag}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA banner                                                                */
/* -------------------------------------------------------------------------- */

function CtaBanner() {
  return (
    <section className="px-6 py-4 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-sky-500 px-8 py-16 text-center shadow-xl shadow-blue-900/20 sm:px-16">
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-50">
          Join thousands of learners building real, career-ready skills with
          Learnify today.
        </p>
        <a
          href="#courses"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Get Started for Free
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white">
                Learn<span className="text-blue-500">ify</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Practical, expert-led courses that help you build real skills
              and grow your career with confidence.
            </p>
            {/* <div className="mt-5 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-semibold text-white">Popular Courses</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {COURSES.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                hello@learnify.com
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                123 Learning Ave, San Francisco, CA
              </li>
              <li className="flex items-start gap-3">
                <Headphones className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                Support available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Learnify. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}