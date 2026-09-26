"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaArrowRight,
  FaPlay,
  FaStar,
  FaUsers,
  FaChartBar,
  FaChartLine,
  FaTrophy,
  FaBuilding,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaCalendarAlt,
} from "react-icons/fa";
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
  Briefcase,
  Headphones,
  PlayCircle,
  Code2,
  Mail,
  Phone,
  MapPin,
  Quote,
  Cpu,
  Cloud,
  Shield,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/* -------------------------------------------------------------------------- */
/*  Animated Counter                                                          */
/* -------------------------------------------------------------------------- */
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({
  end,
  suffix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Static data                                                               */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Placements", href: "#placements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { label: "Students", value: "50+", icon: Users },
  { label: "Courses", value: "5+", icon: BookOpen },
  { label: "Expert Instructors", value: "10+", icon: GraduationCap },
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
  link: string;
  image: string;
};

const COURSES: Course[] = [
  {
    id: 1,
    category: "IT Systems & Networking",
    title: "Certified IT Systems & Network Professional (CISNP)",
    description:
      "Build professional skills in computer hardware, networking, operating systems, Windows 10/11, Kali Linux, CCNA, and Microsoft Server.",
    instructor: "Stack X Academy IT Systems Expert",
    rating: 4.9,
    students: "25+",
    duration: "1 Year",
    price: "$149",
    icon: Cpu,
    link: "/course1",
    image: "/courses/it-networking.jpg",
  },
  {
    id: 2,
    category: "Cloud Computing",
    title: "TRI Cloud Engineer Certification (TCEC)",
    description:
      "Master the fundamentals of the three major cloud platforms: AWS, Microsoft Azure, and Google Cloud Platform (GCP), and build practical cloud engineering skills.",
    instructor: "Stack X Academy Cloud Expert",
    rating: 4.9,
    students: "25+",
    duration: "1 Year",
    price: "$199",
    icon: Cloud,
    link: "/course2",
    image: "/courses/cloud-computing.jpg",
  },
  {
    id: 3,
    category: "Cyber Security",
    title: "Certified Network Security & Ethical Hacking Professional (CNSEH)",
    description:
      "Learn network security, Check Point Firewall, Fortigate Firewall, ethical hacking, defense, detection, and offensive security concepts.",
    instructor: "Stack X Academy Cyber Security Expert",
    rating: 4.9,
    students: "25+",
    duration: "1 Year",
    price: "$199",
    icon: Shield,
    link: "/course3",
    image: "/courses/cyber-security.jpg",
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
    name: "Gavesh Nishad",
    role: "Desktop Support Engineer",
    quote:
      "My experience with the Desktop Support Engineer course has been excellent The instructor is supportive and explains concepts clearly, with a strong focus on practical, hands-on learning. The detailed guidance on devices and systems like routers and printers has been very valuable.",
    initials: "GN",
    photo: "gavesh.jpeg",
  },
  {
    name: "Sachin maske",
    role: "Desktop Support Engineer",
    quote:
      "StackX Academy offers hands-on practical training in Desktop, Computer Hardware, and Networking. This equips students with technical skills and the confidence needed to establish a successful career in the industry",
    initials: "AD",
    photo: "Sachin.jpeg",
  },
  {
    name: "Kartik Ram",
    role: "Desktop Support Engineer",
    quote:
      "I'm Kartik Ram Sahu and I completed my Hardware and Networking course from StackX Academy",
    initials: "KM",
    photo: "Kartik.jpeg",
  },
  {
    name: "Devika chandrakar",
    role: "Desktop Support Engineer",
    quote:
      "Honestly, I'm really satisfied with the training and support from StackX Academy. If anyone wants to start a career in Desktop Support and Networking, StackX Academy is definitely the place to go. Thanks so much to the entire StackX Academy team for such valuable experience and learning!.",
    initials: "DC",
    photo: "devika.jpeg",
  },
];

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
        <PlacementSection />
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

        <a
          href="https://wa.me/919630372206"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Stack X Academy on WhatsApp"
          className="group relative hidden h-11 items-center justify-center gap-2 overflow-hidden rounded-lg bg-green-500 px-6 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40 lg:inline-flex"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <FaWhatsapp className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
          <span className="relative">WhatsApp</span>
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        </a>

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
            href="https://wa.me/916261885954"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="group relative mt-2 flex h-11 items-center justify-center gap-2 overflow-hidden rounded-lg bg-green-500 px-6 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <FaWhatsapp className="relative h-5 w-5" />
            <span className="relative">WhatsApp</span>
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
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
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/courses/cloud-computing.jpg"
          alt="Students learning together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/50 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/3 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              Learn. Build. Grow.
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]"
            >
              Build Skills That{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Shape Your Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl text-lg leading-relaxed text-slate-300"
            >
              Learn practical skills from expert instructors through carefully
              designed courses that help you grow your knowledge, career, and
              confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Explore Courses
                <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                <FaPlay className="h-3 w-3" />
                Watch Video
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-6 pt-4 text-sm text-slate-400"
            >
              <div className="flex -space-x-3">
                {["PN", "AD", "MI", "SV"].map((initials, i) => (
                  <motion.span
                    key={initials}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-800 bg-slate-700 text-[11px] font-semibold text-white"
                  >
                    {initials}
                  </motion.span>
                ))}
              </div>
              <p>
                Joined by <span className="font-semibold text-white">50+</span>{" "}
                learners worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT – VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[2.25rem]">
                <img
                  src="/Hero.jpeg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.10)_0%,rgba(2,6,23,0.70)_65%,rgba(2,6,23,0.95)_100%)]" />
              </div>

              <div className="relative z-10 overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-blue-950/40">
                <motion.div
                  className="pointer-events-none absolute -inset-y-16 w-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
                  initial={{ x: "-30%" }}
                  animate={{ x: "520%" }}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {["bg-blue-500", "bg-white", "bg-blue-300"].map((c, i) => (
                      <motion.span
                        key={c}
                        className={`h-2 w-2 ${c}`}
                        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                    >
                      <FaChartBar className="h-3.5 w-3.5 text-blue-400" />
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                    >
                      <FaChartLine className="h-3.5 w-3.5 text-white" />
                    </motion.span>
                    <div className="grid grid-cols-2 gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 bg-white/70"
                          animate={{ opacity: [0.15, 1, 0.15] }}
                          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto mt-6 aspect-square w-full max-w-[260px]">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-dashed border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_4px_rgba(255,255,255,0.7)]" />
                  </motion.div>

                  <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1d4ed8" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="12" />
                    <motion.circle
                      cx="100" cy="100" r="78" fill="none"
                      stroke="url(#ringGrad)" strokeWidth="12" strokeLinecap="butt"
                      strokeDasharray={2 * Math.PI * 78}
                      initial={{ strokeDashoffset: 2 * Math.PI * 78 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 78 * 0.32 }}
                      transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
                      style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.6))" }}
                    />
                    <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                    <motion.circle
                      cx="100" cy="100" r="58" fill="none"
                      stroke="#ffffff" strokeWidth="6" strokeLinecap="butt"
                      strokeDasharray={2 * Math.PI * 58}
                      initial={{ strokeDashoffset: 2 * Math.PI * 58 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 58 * 0.6 }}
                      transition={{ duration: 1.8, delay: 0.85, ease: "easeOut" }}
                      style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.6))" }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-blue-500 to-white"
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                      style={{ boxShadow: "0 0 50px 12px rgba(59,130,246,0.45)" }}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-2xl border border-white/60"
                        animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                      />
                      <FaChartBar className="relative z-10 h-7 w-7 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                </div>

                <div className="mt-7 flex h-20 items-end justify-between gap-1.5">
                  {[38, 62, 45, 80, 55, 92, 70, 58, 84, 48, 66, 76].map((h, i) => {
                    const color =
                      i % 2 === 0
                        ? "bg-gradient-to-t from-blue-700 via-blue-500 to-blue-300"
                        : "bg-gradient-to-t from-slate-300 via-white to-white";
                    return (
                      <motion.span
                        key={i}
                        className={`w-full origin-bottom ${color}`}
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                      />
                    );
                  })}
                </div>

                <div className="relative mt-6 h-16 overflow-hidden rounded-lg bg-white/[0.05]">
                  <svg viewBox="0 0 280 60" preserveAspectRatio="none" className="h-full w-full">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="60%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0 46 L35 34 L70 40 L105 22 L140 30 L175 14 L210 24 L245 8 L280 16"
                      fill="none" stroke="url(#lineGrad)" strokeWidth="2.5"
                      strokeLinecap="square" strokeLinejoin="miter"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, delay: 1, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0 46 L35 34 L70 40 L105 22 L140 30 L175 14 L210 24 L245 8 L280 16 L280 60 L0 60 Z"
                      fill="url(#areaGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.8 }}
                    />
                    {[
                      { x: 35, y: 34, c: "#3b82f6" },
                      { x: 105, y: 22, c: "#ffffff" },
                      { x: 175, y: 14, c: "#3b82f6" },
                      { x: 245, y: 8, c: "#ffffff" },
                    ].map((p, i) => (
                      <motion.rect
                        key={p.x}
                        x={p.x - 3} y={p.y - 3} width="6" height="6"
                        fill={p.c}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.6 + i * 0.12, type: "spring", stiffness: 260 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-6 top-16 z-20 hidden sm:block"
              >
                <div className="relative flex h-20 w-20 animate-float items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-xl shadow-blue-900/30 backdrop-blur-xl">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute h-11 w-11 rounded-lg border border-blue-400/60"
                      animate={{ scale: [0.5, 1.6], opacity: [0.8, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
                    />
                  ))}
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/30">
                    <FaUsers className="h-5 w-5 text-white" />
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -bottom-6 -right-4 z-20 hidden sm:block"
              >
                <div className="relative flex h-20 w-24 animate-float-delayed items-end justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/10 px-4 py-5 shadow-xl shadow-blue-900/30 backdrop-blur-xl">
                  {[0, 1, 2, 3].map((i) => {
                    const c =
                      i % 2 === 0
                        ? "bg-gradient-to-t from-blue-700 via-blue-500 to-blue-300"
                        : "bg-gradient-to-t from-slate-300 via-white to-white";
                    return (
                      <motion.span
                        key={i}
                        className={`w-1.5 ${c}`}
                        initial={{ height: "30%" }}
                        animate={{ height: ["25%", "100%", "45%", "80%", "25%"] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                      />
                    );
                  })}
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/40 backdrop-blur-sm">
                    <FaStar className="h-3 w-3 fill-white text-white" />
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
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
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-1 shadow-xl shadow-blue-900/15">
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
              <img
                src="/Aboutus.jpeg"
                alt="Learning that fits your life"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-blue-900/10 sm:-right-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
              <Award className="h-6 w-6 text-white" />
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none text-slate-900">10+</p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Expert Instructors
              </p>
            </div>
          </div>
        </div>

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
/*  Placement Section                                                         */
/* -------------------------------------------------------------------------- */

function PlacementSection() {
  const stats = [
    { icon: FaTrophy, label: "Highest Package", value: 2.8, suffix: " LPA", color: "from-blue-500 to-cyan-400" },
    { icon: FaChartLine, label: "Average Package", value: 2.2, suffix: " LPA", color: "from-blue-600 to-blue-400" },
    // { icon: FaUsers, label: "Students Placed", value: 120, suffix: "+", color: "from-sky-500 to-white" },
    { icon: FaBuilding, label: "Hiring Partners", value: 14, suffix: "+", color: "from-blue-700 to-sky-400" },
  ];
interface Recruiters {
  name: string;
  logo: string;
}

const recruiters: Recruiters[] = [
  { name: "Chroma",              logo: "/sponsorship/Chroma.jpg" },
  { name: "Clarion IT Services", logo: "/sponsorship/Clarion IT.jpg" },
  { name: "CMS",                 logo: "/sponsorship/CMS.jpg" },
  { name: "Globosoft",           logo: "/sponsorship/globosoft.jpg" },
  { name: "HDFC Bank",           logo: "/sponsorship/HDFC Bank.jpg" },
  { name: "JK Lakshmi",          logo: "/sponsorship/JKLakshmi.jpg" },
  { name: "JWS",                 logo: "/sponsorship/JWS.jpg" },
  { name: "Kalinga University",  logo: "/sponsorship/Kalinga.jpg" },
  { name: "Quess Work",          logo: "/sponsorship/Quess Work.jpg" },
  { name: "Rungta University",   logo: "/sponsorship/Rungta.jpg" },
  { name: "Team Lease",          logo: "/sponsorship/Team Lease.jpg" },
  { name: "VPC IT Care",         logo: "/sponsorship/VPC.jpg" },
  { name: "YES Bank",            logo: "/sponsorship/Yes Bank.jpg" },
];
  const placed = [
    { name: "Rahul Mehta", role: "Java Developer", company: "TCS", pkg: "7.5 LPA", batch: "Batch 1", initials: "RM",image: "/students/student1.png"  },
    { name: "Sneha Kulkarni", role: "Frontend Developer", company: "Zoho", pkg: "9 LPA", batch: "Batch 1", initials: "SK",image: "/students/student2.png"  },
    { name: "Aditya Joshi", role: "Data Analyst", company: "Infosys", pkg: "6.5 LPA", batch: "Batch 1", initials: "AJ", image: "/students/student3.png"  },
    { name: "Pooja Nair", role: "UI/UX Designer", company: "Freshworks", pkg: "8 LPA", batch: "Batch 2", initials: "PN", image: "/students/student4.png"  },
    { name: "Vikram Reddy", role: "SDE", company: "Razorpay", pkg: "18 LPA", batch: "Batch 2", initials: "VR", image: "/students/student5.png"  },
    // { name: "Ishita Bansal", role: "Backend Developer", company: "PhonePe", pkg: "12 LPA", batch: "Batch 2", initials: "IB", image: "/students/student1.png"  },
  ];

  const journey = [
    { month: "Jan '24", label: "Coaching Founded", value: 20, icon: FaRocket },
    { month: "Mar '24", label: "Batch 1 Started", value: 45, icon: FaUsers },
    { month: "Jun '24", label: "First Placement Drive", value: 60, icon: FaHandshake },
    { month: "Sep '24", label: "50+ Students Placed", value: 75, icon: FaTrophy },
    { month: "Dec '24", label: "100+ Placements Crossed", value: 90, icon: FaBullseye },
    { month: "Mar '25", label: "45+ Hiring Partners", value: 100, icon: FaBuilding },
  ];

  return (
    <section
      id="placements"
      className="relative w-full overflow-hidden bg-[#050914] py-18 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,rgba(37,99,235,0.22),transparent_55%),radial-gradient(100%_100%_at_10%_100%,rgba(56,189,248,0.15),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
       

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Our Batch,
            <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Our Success Stories
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            We&apos;re a young academy on a mission — and every placement
            we&apos;ve earned so far came from real effort, 1:1 mentorship, and
            students who trusted us from day one.
          </p>

       
        </motion.div>


  <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
  {stats.map((s, i) => {
    const Icon = s.icon;

    return (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-white/[0.07]"
      >
        <div
          className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl transition group-hover:opacity-40`}
        />

        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>

        <p className="text-3xl font-bold text-white">
          <Counter end={s.value} suffix={s.suffix} />
        </p>

        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
          {s.label}
        </p>
      </motion.div>
    );
  })}
</div>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">
              Our Hiring <span className="text-blue-400">Partners</span>
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              15+ companies that have hired our students
            </p>
          </div>

<div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-px">
  {recruiters.map((company: Recruiters, i: number) => (
    <motion.div
      key={company.name}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.04, duration: 0.5 }}
      className="group relative flex aspect-square w-[calc(50%-1px)] items-center justify-center overflow-hidden bg-[#050914] p-4 sm:w-[calc(33.333%-1px)] lg:w-[calc(20%-1px)]"
    >
      <img
        src={company.logo}
        alt={company.name}
        className="h-full w-full object-contain opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
      />
    </motion.div>
  ))}
</div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">
              Our <span className="text-blue-400">Achievers</span> 
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              Real students from our batches who got placed
            </p>
          </div>

<div className="grid grid-cols-5 gap-2">
  {placed.map((s, i) => (
    <motion.div
      key={s.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="relative aspect-square overflow-hidden border-2 border-white"
    >
      <img
        src={s.image}
        alt={s.name}
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
  ))}
</div>

{/* 
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


  {placed.map((s, i) => (
    <motion.div
      key={s.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-white/[0.07]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl ring-2 ring-blue-500/40 shadow-lg shadow-blue-500/30">
            <img
              src={s.image}
              alt={s.name}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-white">{s.name}</p>
            <p className="text-xs text-slate-400">{s.role}</p>
          </div>
        </div>
        <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-bold text-blue-300">
          {s.batch}
        </span>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex items-center gap-2">
          <FaBuilding className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-sm font-semibold text-slate-200">{s.company}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-3 py-1.5">
          <FaTrophy className="h-3 w-3 text-emerald-400" />
          <span className="text-xs font-bold text-emerald-300">{s.pkg}</span>
        </div>
      </div>
    </motion.div>
  ))}

  <motion.a
    href="#contact"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: placed.length * 0.08 }}
    className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-blue-400/40 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent p-6 backdrop-blur-xl transition hover:border-blue-400/80 hover:from-blue-600/30 hover:via-blue-500/20"
  >
    
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/30 opacity-40 blur-3xl transition group-hover:opacity-70" />
    <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky-400/20 opacity-40 blur-3xl transition group-hover:opacity-70" />


    <div className="relative flex h-16 w-16 items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-2xl border border-blue-400/50"
          animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        />
      ))}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 shadow-lg shadow-blue-500/50">
        <FaRocket className="h-6 w-6 text-white" />
      </span>
    </div>

    <p className="mt-5 text-lg font-bold text-white">
      You&apos;re Next!
    </p>
    <p className="mt-1.5 max-w-[200px] text-center text-xs leading-relaxed text-slate-300">
      Join Batch 3 and be part of our next success story
    </p>

    <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-lg transition-all group-hover:-translate-y-0.5 group-hover:shadow-xl">
      Enroll Now
      <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
    </span>
  </motion.a>

</div> */}
        </motion.div>
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
      <div className="group/image relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={course.id === 1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-blue-700 shadow-sm backdrop-blur">
          {course.category}
        </span>
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-lg backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
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

        <div className="mt-6 flex items-center justify-center border-t border-slate-100 pt-5">
          <Link
            href={course.link}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            View Course
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
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
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                    {t.initials}
                  </span>
                )}
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
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white">
                Stack X <span className="text-blue-500">Academy</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Practical, expert-led courses that help you build real skills
              and grow your career with confidence.
            </p>
          </div>

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

          <div>
            <h4 className="text-sm font-semibold text-white">Popular Courses</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {COURSES.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <a
                    href={course.link}
                    className="text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                <a
                  href="mailto:stackxacademy@gmail.com"
                  className="transition-colors hover:text-blue-400"
                >
                  stackxacademy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                <a
                  href="tel:+916261885954"
                  className="transition-colors hover:text-blue-400"
                >
                  +91 9630372206
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                <a
                  href="https://maps.app.goo.gl/Z6jomY2U65ZLXbvA7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Stack X Academy on Google Maps"
                  className="group block"
                >
                  <div className="h-[120px] w-[220px] overflow-hidden rounded-lg border border-white/10 bg-slate-800 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/60">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.703496134586!2d81.28172167504896!3d21.203934480489526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293df7934c8903%3A0x7a6be60b254f27d9!2sPrem%20Nagar!5e0!3m2!1sen!2sin!4v1788787271120!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        pointerEvents: "none",
                      }}
                      loading="lazy"
                      title="Stack X Academy Location"
                    />
                  </div>
                  <span className="mt-1.5 block text-xs text-blue-400 transition-colors group-hover:text-blue-300">
                    View on Google Maps →
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Headphones className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                Support available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Stack X Academy. All rights
            reserved.
          </p>
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