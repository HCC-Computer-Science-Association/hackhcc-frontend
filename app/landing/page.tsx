"use client";
import React, { useEffect, useMemo, useState } from "react";

// ------------------------------------------------------------
// Legend-like Hackathon Landing Page (Single-file, TailwindCSS)
// - Drop this into app/page.tsx in a Next.js 13+ project
// - Uses only Tailwind classes (no external UI libs)
// - Replace placeholder text, dates, and links with your own
// ------------------------------------------------------------

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-black text-white">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}

// ---------------------------
// Header
// ---------------------------
function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_40px_-10px_#22d3ee]" />
          <span className="text-lg font-bold tracking-wide">
            hack<span className="text-cyan-300">HCC</span>
          </span>
        </a>
        <nav className="items-center gap-6 text-sm md:flex">
          <a href="#about" className="text-[#2ff1ff] hover:text-white">
            About
          </a>
          <a href="#tracks" className="text-[#2ff1ff] hover:text-white">
            Tracks
          </a>
          <a href="#schedule" className="text-[#2ff1ff] hover:text-white">
            Schedule
          </a>
          <a href="#sponsors" className="text-[#2ff1ff] hover:text-white">
            Sponsors
          </a>
          <a href="#faq" className="text-[#2ff1ff] hover:text-white">
            FAQ
          </a>
          <a
            href="#register"
            className="rounded-xl bg-white/10 px-4 py-2 font-semibold hover:bg-white/20"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

// ---------------------------
// Hero Section
// ---------------------------
function Hero() {
  const eventStart = useMemo(() => new Date("2026-02-14T15:00:00-06:00"), []); // TODO: set your own
  return (
    <section id="home" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 pt-16 md:grid-cols-2 md:pb-32 md:pt-24">
        <div>
          <Badge>HackHCC • Cyberpunk • 36 Hours</Badge>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            <GlitchText>HackHCC</GlitchText>
            <span className="block mt-2 text-2xl font-semibold text-white\/80">
              A Cyberpunk Hackathon
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white\/70">
            Jack in for 36 hours of neon-drenched building: AI agents, secure
            systems, glitch art, hardware mods, and whatever else your crew can
            ship. New hackers welcome—mentors, prizes, and late‑night synthwave
            included.
          </p>
          <div id="register" className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] hover:opacity-90"
              href="https://example.com/apply"
              target="_blank"
            >
              Apply Now
            </a>
            <a
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10"
              href="#faq"
            >
              Learn More
            </a>
          </div>
          <div className="mt-8">
            <Countdown target={eventStart} />
          </div>
          <div className="mt-6 text-sm text-white\/60">
            Your City • Dates TBA • In person
          </div>
        </div>
        <div className="relative">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-0.5 animate-pulse rounded-3xl bg-gradient-to-br from-fuchsia-500/40 via-cyan-400/40 to-purple-500/40 blur-2xl" />
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-white/80">Live Metrics</div>
          <div className="text-xs text-white/50">auto-updating</div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <Metric label="Applicants" value="1,243" />
          <Metric label="Teams" value="372" />
          <Metric label="Workshops" value="14" />
        </div>
        <div className="mt-6 h-40 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="mt-4 text-center text-sm text-white/60">
          Realtime submissions chart placeholder
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}

// ---------------------------
// Stats
// ---------------------------
function Stats() {
  const items = [
    { k: "1,000+", v: "Attendees" },
    { k: "$25k+", v: "Prizes" },
    { k: "36 hrs", v: "Hacking" },
    { k: "24/7", v: "Snacks" },
  ];
  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.v} className="text-center">
            <div className="text-3xl font-black tracking-tight sm:text-4xl">
              {it.k}
            </div>
            <div className="mt-1 text-sm text-white/60">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------
// About
// ---------------------------
function About() {
  return (
    <section id="about" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,85,247,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          What is HackHCC?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/70">
          HackHCC is a student‑run, cyberpunk‑themed hackathon. Build
          dystopian‑adjacent prototypes, experiment with bleeding‑edge tools,
          and learn from mentors in security, AI, and creative tech.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              t: "Newcomer-friendly",
              d: "Zero experience required—bring curiosity.",
            },
            { t: "Free to attend", d: "We cover food, swag, and vibes." },
            {
              t: "Real impact",
              d: "Solve problems that matter to your community.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-lg font-semibold">{c.t}</div>
              <div className="mt-1 text-white/70">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// Tracks
// ---------------------------
function Tracks() {
  const tracks = [
    {
      name: "Offensive Security (Red Team)",
      desc: "Exploit dev, CTF vibes, malware analysis, adversarial thinking.",
    },
    {
      name: "Defensive Security (Blue Team)",
      desc: "Threat hunting, SIEM dashboards, secure-by-default apps.",
    },
    {
      name: "AI Agents & Automation",
      desc: "Autonomous workflows, RAG pipelines, tool‑using agents in the wild.",
    },
    {
      name: "XR & Glitch Interfaces",
      desc: "AR/VR, motion, and artful UIs with a neon sheen.",
    },
  ];
  return (
    <section id="tracks" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Tracks</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{t.name}</div>
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 opacity-80" />
              </div>
              <p className="mt-2 text-sm text-white/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// Schedule
// ---------------------------
function Schedule() {
  const days = [
    {
      label: "Day 1 • Fri",
      items: [
        { time: "5:00 PM", title: "Check-in & Dinner" },
        { time: "7:00 PM", title: "Opening Ceremony" },
        { time: "8:00 PM", title: "Hacking Begins" },
      ],
    },
    {
      label: "Day 2 • Sat",
      items: [
        { time: "10:00 AM", title: "Workshops & Mentoring" },
        { time: "1:00 PM", title: "Lunch" },
        { time: "7:00 PM", title: "Mini-events & Games" },
      ],
    },
    {
      label: "Day 3 • Sun",
      items: [
        { time: "10:00 AM", title: "Project Submissions Due" },
        { time: "12:00 PM", title: "Expo & Demos" },
        { time: "3:00 PM", title: "Closing & Awards" },
      ],
    },
  ];
  return (
    <section id="schedule" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Schedule
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {days.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-3 text-lg font-semibold">{d.label}</div>
              <ul className="space-y-3">
                {d.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <div>
                      <div className="text-sm text-white/60">{it.time}</div>
                      <div className="font-medium">{it.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// Sponsors
// ---------------------------
function Sponsors() {
  const sponsors = new Array(12).fill(0).map((_, i) => ({ id: i + 1 }));
  return (
    <section
      id="sponsors"
      className="relative border-y border-white/10 bg-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Sponsors
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
          Huge thanks to the partners who make this event possible.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {sponsors.map((s) => (
            <div
              key={s.id}
              className="aspect-[3/2] rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex h-full items-center justify-center">
                <div className="h-8 w-24 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 opacity-70" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="mailto:hello@example.com"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// FAQ
// ---------------------------
function FAQ() {
  const faqs = [
    {
      q: "Who can attend?",
      a: "Students of all levels (and recent grads) are welcome. No prior experience required.",
    },
    {
      q: "How much does it cost?",
      a: "It’s completely free. We’ll provide food, swag, and Wi‑Fi.",
    },
    {
      q: "What should I bring?",
      a: "A laptop, charger, and any hardware you want to hack on.",
    },
    {
      q: "Can I work solo?",
      a: "Yes! You can form a team of up to 4 or hack solo—your choice.",
    },
  ];
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-semibold">{q}</span>
        <span className="grid h-6 w-6 place-items-center rounded-md border border-white/10 text-sm text-white/60">
          {open ? "–" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-white/70">
          <p className="pt-3">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------
// Footer
// ---------------------------
function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} HackHCC. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#" className="hover:text-white">
            Code of Conduct
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------
// UI Bits
// ---------------------------
function GlitchText({ children }: { children: string }) {
  return (
    <span className="relative inline-block glitch" data-text={children}>
      {children}
      <style>{`
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          text-shadow: -2px 0 rgba(0,255,255,.8), 2px 0 rgba(255,0,255,.8);
          clip-path: inset(0 0 0 0);
          overflow: hidden;
          animation: glitch-slice 2s infinite linear alternate-reverse;
          mix-blend-mode: screen;
        }
        .glitch::after {
          animation-delay: .6s;
        }
        @keyframes glitch-slice {
          0% { clip-path: inset(0 0 85% 0); transform: translate(0,0); }
          20% { clip-path: inset(10% 0 60% 0); transform: translate(-1px,1px); }
          40% { clip-path: inset(40% 0 20% 0); transform: translate(1px,-1px); }
          60% { clip-path: inset(20% 0 40% 0); transform: translate(0.5px,0.5px); }
          80% { clip-path: inset(60% 0 10% 0); transform: translate(-0.5px,0.5px); }
          100% { clip-path: inset(85% 0 0 0); transform: translate(0,0); }
        }
      `}</style>
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

function Countdown({ target }: { target: Date }) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const { d, h, m, s } = useMemo(() => diffDHMS(now, target), [now, target]);

  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
      <TimeBlock label="Days" value={pad2(d)} />
      <Colon />
      <TimeBlock label="Hours" value={pad2(h)} />
      <Colon />
      <TimeBlock label="Minutes" value={pad2(m)} />
      <Colon />
      <TimeBlock label="Seconds" value={pad2(s)} />
    </div>
  );
}

function TimeBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[72px] rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-center">
      <div className="text-2xl font-black tabular-nums">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/60">
        {label}
      </div>
    </div>
  );
}
function Colon() {
  return <span className="px-1 text-xl text-white/40">:</span>;
}

function diffDHMS(a: Date, b: Date) {
  let diff = Math.max(0, b.getTime() - a.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= d * (1000 * 60 * 60 * 24);
  const h = Math.floor(diff / (1000 * 60 * 60));
  diff -= h * (1000 * 60 * 60);
  const m = Math.floor(diff / (1000 * 60));
  diff -= m * (1000 * 60);
  const s = Math.floor(diff / 1000);
  return { d, h, m, s };
}
function pad2(n: number) {
  return String(n).padStart(2, "0");
}

// ---------------------------
// Animated Background
// ---------------------------
function AnimatedBackground() {
  return (
    <>
      {/* starfield */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <Stars density={140} />
      </div>
      {/* neon grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* gradient auras */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.35),transparent)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(236,72,153,0.28),transparent)] blur-3xl" />
        <div className="absolute left-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(163,230,53,0.22),transparent)] blur-3xl" />
      </div>
      {/* scanlines */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0 2px, transparent 3px 6px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <Stars density={120} />
      </div>
      {/* gradient aura */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.25),transparent)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),transparent)] blur-3xl" />
      </div>
    </>
  );
}

function Stars({ density = 80 }: { density?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: density }, () => ({
          // eslint-disable-next-line react-hooks/purity
        top: Math.random() * 100,
          // eslint-disable-next-line react-hooks/purity
        left: Math.random() * 100,
          // eslint-disable-next-line react-hooks/purity
        size: Math.random() * 2 + 0.5,
          // eslint-disable-next-line react-hooks/purity
        delay: Math.random() * 4,
      })),
    [density]
  );
  return (
    <div className="absolute inset-0">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute animate-twinkle rounded-full bg-white/80"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: .3; transform: scale(.9); } 50% { opacity: 1; transform: scale(1.2); } }
        .animate-twinkle { animation: twinkle 3.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
