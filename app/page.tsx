"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { d, h, m, s, done } = useCountdown();

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#06060b] text-white">
      {/* Cyberpunk grid + glow background */}
      <BackgroundFX />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="group flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-bold tracking-wider">
              <span className="text-cyan-300">hack</span>
              <span className="text-fuchsia-400">HCC</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="navlink">
              About
            </a>
            <a href="#tracks" className="navlink">
              Tracks
            </a>
            <a href="#prizes" className="navlink">
              Prizes
            </a>
            <a href="#sponsors" className="navlink">
              Sponsors
            </a>
            <a href="#faq" className="navlink">
              FAQ
            </a>
            <Button
              onClick={() =>
                document
                  .getElementById("apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Apply Now
            </Button>
          </nav>
          <a href="#apply" className="md:hidden">
            <Button>Apply</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Houston Community College • In‑person • April 4-5, 2026
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              <span className="block text-white/90">Welcome to</span>
              <Glitch>HackHCC</Glitch>
              <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Cyberpunk Edition
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg text-white/70">
              A 48‑hour student hackathon fusing code with neon‑soaked
              creativity. Build, learn, and ship projects that push the edge of
              tech.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById("apply")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Apply Now
              </Button>
              <a href="#sponsors">
                <Button variant="ghost">Sponsor us</Button>
              </a>
            </div>

            {/* Countdown */}
            <div className="mt-10 flex items-center gap-6">
              <div className="text-xs uppercase tracking-widest text-white/60">
                Countdown
              </div>
              <div className="flex items-center gap-3 text-2xl font-mono">
                <TimeBox label="days" value={d} />
                <span className="text-white/40">:</span>
                <TimeBox label="hours" value={h} />
                <span className="text-white/40">:</span>
                <TimeBox label="mins" value={m} />
                <span className="text-white/40">:</span>
                <TimeBox label="secs" value={s} />
              </div>
            </div>
          </div>

          {/* Hero art */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <NeonCity />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 px-6 md:grid-cols-4">
          {[
            ["48", "Hours"],
            ["$10k+", "Prizes"],
            ["500+", "Hackers"],
            ["24/7", "Food & Mentors"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-sky-400/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="text-4xl font-extrabold">{num}</div>
              <div className="text-sm uppercase tracking-widest text-white/60">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="section-title">Build under neon lights</h2>
            <p className="mt-4 text-white/70">
              HackHCC is Houston Community College’s flagship hackathon. Whether
              it’s your first hack or you’re a seasoned builder, you’ll team up,
              learn from mentors, attend lightning talks, and ship something
              wild in just a weekend.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Workshops & tech talks",
                "Free food & swag",
                "Industry mentors",
                "Beginner‑friendly tracks",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px] shadow-cyan-400"></span>
                  <span className="text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <HoloCard />
          </motion.div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="section-title">Tracks</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Choose a path or blend a few—surprise us.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "AI & Agents",
                d: "Build assistants, copilots, and autonomous systems.",
              },
              {
                t: "Cybersecurity",
                d: "Offense, defense, detection—ship something secure.",
              },
              {
                t: "XR & Games",
                d: "WebXR, Three.js, and playful experiments.",
              },
              {
                t: "Civic & Health",
                d: "Tech for good, accessibility, health tools.",
              },
            ].map((x) => (
              <Card key={x.t} title={x.t} desc={x.d} />
            ))}
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="section-title">Prizes</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { t: "Grand Prize", d: "$3,500 + trophies + swag" },
              { t: "Runner Up", d: "$2,000 + swag" },
              { t: "Best Beginner Hack", d: "$1,000 + mentorship" },
            ].map((p) => (
              <Card key={p.t} title={p.t} desc={p.d} />
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="section-title">Schedule (April 4-5)</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Timeline
              day="Friday"
              items={[
                ["5:00 PM", "Check‑in & badge pickup"],
                ["6:00 PM", "Opening ceremony"],
                ["7:00 PM", "Team formation"],
                ["8:00 PM", "Hacking begins"],
              ]}
            />
            <Timeline
              day="Saturday"
              items={[
                ["10:00 AM", "Workshops & mentor hours"],
                ["12:30 PM", "Lunch"],
                ["6:30 PM", "Dinner"],
                ["11:59 PM", "Midnight check‑in"],
              ]}
            />
            <Timeline
              day="Sunday"
              items={[
                ["9:00 AM", "Breakfast"],
                ["10:00 AM", "Hacking ends"],
                ["11:00 AM", "Expo & judging"],
                ["3:00 PM", "Closing ceremony"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="section-title">Sponsors</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Want to support Houston’s next wave of builders? We’d love to
            partner.
          </p>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <SponsorPlaceholder key={i} />
            ))}
          </div>
          <div className="mt-8">
            <a href="#apply">
              <Button>Become a sponsor</Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="section-title">FAQ</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              [
                "Who can participate?",
                "Any student 18+—all majors welcome. Beginners encouraged!",
              ],
              [
                "How much does it cost?",
                "$0. Admission, food, and swag are free for accepted hackers.",
              ],
              [
                "Do I need a team?",
                "No. We’ll host team‑formation activities Friday night.",
              ],
              [
                "What should I bring?",
                "Laptop, charger, and anything you need to be comfy (headphones, hoodie).",
              ],
              [
                "What’s the venue?",
                "Houston Community College (exact building TBA).",
              ],
              [
                "Code of Conduct?",
                "Be excellent to each other. Standard MLH/Community guidelines apply.",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <summary className="cursor-pointer select-none list-none font-semibold leading-6 text-white/90">
                  {q}
                </summary>
                <p className="mt-2 text-white/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY / CTA */}
      <section id="apply" className="relative py-24">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <h2 className="section-title">Ready to jack in?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Applications open soon. Join the waitlist and get notified the
            moment we go live.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! You're on the list.");
            }}
            className="mx-auto mt-7 flex max-w-xl flex-col items-center gap-3 sm:flex-row"
          >
            <input
              required
              type="email"
              placeholder="you@college.edu"
              className="h-12 w-full flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <Button type="submit" className="h-12 w-full sm:w-auto">
              Join waitlist
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <span className="text-sm text-white/60">
              © {new Date().getFullYear()} HackHCC
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#" className="hover:text-white">
              Email
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Global styles for effects */}
      <style jsx global>{`
        .navlink {
          @apply text-white/80 hover:text-white;
        }
        .section-title {
          @apply text-3xl md:text-4xl font-black tracking-tight;
        }
        .cyber-button {
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
        }
        @keyframes floaty {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floaty {
          animation: floaty 6s ease-in-out infinite;
        }
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .scanline::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255, 255, 255, 0.04) 50%,
            transparent 100%
          );
          animation: scanline 6s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </main>
  );
}

// --- Quick helpers ---
function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
  }
) {
  const { className, children, variant = "primary", ...rest } = props;
  return (
    <button
      {...rest}
      className={cx(
        "relative inline-flex items-center justify-center px-5 py-3 text-sm font-semibold transition cyber-button",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
        variant === "primary" &&
          "bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white font-bold shadow-[0_0_15px_0_rgba(0,255,255,0.8)] hover:shadow-[0_0_25px_0_rgba(0,255,255,1)]",
        variant === "ghost" &&
          "ring-1 ring-white/15 text-white/90 hover:bg-white/5",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -z-0 bg-white/0 [mask-image:radial-gradient(60%_100%_at_50%_0%,#000_60%,transparent_100%)]"></span>
      )}
    </button>
  );
}

// Countdown hook
function useCountdown(targetISO = "2026-04-04T10:00:00-06:00") {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return { d, h, m, s, done: diff <= 0 };
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 font-semibold shadow-[0_0_40px_-10px] shadow-cyan-400/50">
        {padded}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
        {label}
      </div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div
        className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl opacity-0 blur transition-all group-hover:opacity-100 group-hover:blur-md"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(255,0,200,.25), rgba(0,200,255,.25), rgba(0,255,180,.25), rgba(255,0,200,.25))",
        }}
      />
      <h3 className="text-lg font-semibold text-white/90">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function Timeline({ day, items }: { day: string; items: [string, string][] }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
        {day}
      </div>
      <ul className="space-y-4">
        {items.map(([time, label]) => (
          <li
            key={time}
            className="grid grid-cols-[90px_1fr] items-start gap-4"
          >
            <div className="font-mono text-sm text-cyan-300">{time}</div>
            <div className="text-white/80">{label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SponsorPlaceholder() {
  return (
    <div className="relative grid aspect-[3/1] place-items-center rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="h-full w-full rounded-md border border-dashed border-white/15"></div>
    </div>
  );
}

function HoloCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8">
      <div className="pointer-events-none absolute -inset-1 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,255,200,.25),transparent)]" />
      <div className="relative">
        <h3 className="text-xl font-bold text-white/90">Venue perks</h3>
        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Fast Wi‑Fi & power strips</li>
          <li>• Quiet nap zone</li>
          <li>• Maker lab access</li>
          <li>• 24/7 snacks & coffee</li>
        </ul>
      </div>
      <div className="scanline absolute inset-0"></div>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 select-none"
    >
      {/* Big gradient blurs */}
      <div className="absolute -left-24 top-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/30 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-400/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full bg-emerald-400/20 blur-[140px]" />

      {/* Neon grid */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh]">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_300px_at_50%_120%,rgba(0,255,200,.15),transparent)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:40px_40px] [background-position:center_bottom]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06060b] to-transparent" />
      </div>
    </div>
  );
}

function Glitch({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-6xl md:text-8xl font-black tracking-tight">
      <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
        {children}
      </span>
      {/* RGB ghost layers */}
      <span className="absolute inset-0 -z-0 translate-x-[2px] translate-y-[2px] select-none text-fuchsia-500/40 blur-sm">
        {children}
      </span>
      <span className="absolute inset-0 -z-0 -translate-x-[2px] -translate-y-[1px] select-none text-cyan-400/40 blur-sm">
        {children}
      </span>
    </span>
  );
}

function NeonCity() {
  return (
    <svg
      viewBox="0 0 600 420"
      className="h-[380px] w-full animate-floaty drop-shadow-[0_0_25px_rgba(34,211,238,.35)]"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#a21caf" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="420" fill="#0a0a12" rx="24" />
      {/* Horizon glow */}
      <ellipse
        cx="300"
        cy="260"
        rx="260"
        ry="60"
        fill="url(#g1)"
        opacity=".18"
      />
      {/* Buildings */}
      {Array.from({ length: 12 }).map((_, i) => {
        const w = 20 + Math.random() * 40;
        const h = 80 + Math.random() * 220;
        const x = 20 + i * 48;
        return (
          <g key={i}>
            <rect
              x={x}
              y={320 - h}
              width={w}
              height={h}
              fill="#11121a"
              stroke="rgba(255,255,255,.06)"
            />
            {/* Windows */}
            {Array.from({ length: 8 }).map((__, j) => (
              <rect
                key={j}
                x={x + 4}
                y={320 - h + 6 + j * 20}
                width={w - 8}
                height={10}
                fill={j % 2 ? "#22d3ee" : "#a21caf"}
                opacity=".25"
              />
            ))}
          </g>
        );
      })}
      {/* Sun */}
      <circle cx="460" cy="120" r="48" fill="url(#g1)" opacity=".7" />
      {/* Grid */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          x2="600"
          y1={340 + i * 6}
          y2={340 + i * 6}
          stroke="rgba(255,255,255,.08)"
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1={40 + i * 56}
          x2={200 + i * 32}
          y1="340"
          y2="420"
          stroke="rgba(255,255,255,.08)"
        />
      ))}
      {/* Car */}
      <rect
        x="80"
        y="300"
        width="64"
        height="22"
        rx="4"
        fill="#22d3ee"
        opacity=".8"
      />
      <rect
        x="86"
        y="296"
        width="40"
        height="10"
        rx="2"
        fill="#a21caf"
        opacity=".8"
      />
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id="lg" x1="0" x2="1">
          <stop offset="0%" stopColor="#a21caf" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="12"
        fill="url(#lg)"
        opacity=".25"
      />
      <path
        d="M16 40 L32 16 L48 40"
        stroke="url(#lg)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
