"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { d, h, m, s, done } = useCountdown();

  return (
    <main className="relative min-h-screen overflow-x-clip">
      {/* Cyberpunk grid + glow background */}
      <BackgroundFX />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-biscay/95 border-b border-picton-blue/20 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="group flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-bold tracking-wider">
              <span className="text-picton-blue">hack</span>
              <span className="text-picton-blue">HCC</span>
            </span>
          </a>
          <nav className="items-center gap-6 flex">
            <a href="#about" className="text-white font-normal hover:text-portica transition-colors">
              About
            </a>
            <a href="#tracks" className="text-white font-normal hover:text-portica transition-colors">
              Tracks
            </a>
            <a href="#prizes" className="text-white font-normal hover:text-portica transition-colors">
              Prizes
            </a>
            <a href="#sponsors" className="text-white font-normal hover:text-portica transition-colors">
              Sponsors
            </a>
            <a href="#faq" className="text-white font-normal hover:text-portica transition-colors">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-picton-blue/30 bg-jelly-bean/20 px-3 py-1 text-xs text-white font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-portica shadow-[0_0_8px] shadow-portica"></span>
              Houston Community College • In‑person • April 11-12, 2026
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              <span className="block text-white font-semibold">Welcome to</span>
              <span className="block text-white font-black">HackHCC</span>
              <span className="block text-white font-black">
                CodeRunners
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg text-white font-normal">
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
              <div className="text-xs uppercase tracking-widest text-white font-medium">
                Countdown
              </div>
              <div className="flex items-center gap-3 text-2xl font-mono">
                <TimeBox label="days" value={d} />
                <span className="text-white/70">:</span>
                <TimeBox label="hours" value={h} />
                <span className="text-white/70">:</span>
                <TimeBox label="mins" value={m} />
                <span className="text-white/70">:</span>
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
              className="group relative overflow-hidden rounded-2xl border border-picton-blue/20 bg-jelly-bean/10 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-picton-blue/10 via-jelly-bean/10 to-picton-blue/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="text-4xl font-extrabold text-white">{num}</div>
              <div className="text-sm uppercase tracking-widest text-white/80 font-medium">
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Build under neon lights</h2>
            <p className="mt-4 text-white font-normal">
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
                  <span className="h-2 w-2 rounded-full bg-portica shadow-[0_0_20px] shadow-portica"></span>
                  <span className="text-white font-normal">{t}</span>
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Tracks</h2>
          <p className="mt-2 max-w-2xl text-white font-normal">
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Prizes</h2>
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Schedule (April 11-12)</h2>
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Sponsors</h2>
          <p className="mt-2 max-w-2xl text-white font-normal">
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">FAQ</h2>
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
                className="group rounded-2xl border border-picton-blue/20 bg-jelly-bean/10 p-5"
              >
                <summary className="cursor-pointer select-none list-none font-semibold leading-6 text-white">
                  {q}
                </summary>
                <p className="mt-2 text-white/80 font-normal">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY / CTA */}
      <section id="apply" className="relative py-24">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Ready to jack in?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white font-normal">
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
              className="h-12 w-full flex-1 rounded-xl border border-picton-blue/30 bg-jelly-bean/10 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-picton-blue/40 font-normal"
            />
            <Button type="submit" className="h-12 w-full sm:w-auto">
              Join waitlist
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-biscay/95 border-t border-picton-blue/20 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <span className="text-sm text-picton-blue font-normal">
              © {new Date().getFullYear()} HackHCC
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-picton-blue font-normal">
            <a href="#faq" className="hover:text-portica transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-portica transition-colors">
              Email
            </a>
            <a href="#" className="hover:text-portica transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-portica transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Global styles for effects */}
      <style jsx global>{`

        .cyber-button {
            clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
            border: 1px solid rgba(61,178,225, 0.3);
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
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-picton-blue/60",
        variant === "primary" &&
          "bg-portica text-biscay font-bold shadow-[0_0_20px_0_rgba(249,231,93,0.4)] hover:shadow-[0_0_30px_0_rgba(249,231,93,0.6)] hover:bg-portica/90",
        variant === "ghost" &&
          "ring-1 ring-picton-blue/30 text-picton-blue hover:bg-picton-blue/10 hover:ring-picton-blue/50",
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
function useCountdown(targetISO = "2026-04-11T10:00:00-06:00") {
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
      <div className="rounded-xl border border-picton-blue/30 bg-jelly-bean/20 px-3 py-2 font-semibold text-portica shadow-[0_0_40px_-10px] shadow-picton-blue/20">
        {padded}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-white/70 font-medium">
        {label}
      </div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-picton-blue/20 bg-jelly-bean/10 p-6">
            <div
        className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl opacity-0 blur transition-all group-hover:opacity-100 group-hover:blur-md"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, var(--portica), var(--pastel-green), var(--portica), var(--pastel-green))",
        }}
      />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80 font-normal">{desc}</p>
    </div>
  );
}

function Timeline({ day, items }: { day: string; items: [string, string][] }) {
  return (
    <div className="relative rounded-2xl border border-picton-blue/20 bg-jelly-bean/10 p-6">
      <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
        {day}
      </div>
      <ul className="space-y-4">
        {items.map(([time, label]) => (
          <li
            key={time}
            className="grid grid-cols-[90px_1fr] items-start gap-4"
          >
            <div className="font-mono text-sm text-portica">{time}</div>
            <div className="text-white font-normal">{label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SponsorPlaceholder() {
  return (
    <div className="relative grid aspect-[3/1] place-items-center rounded-xl border border-picton-blue/20 bg-jelly-bean/10 p-4">
      <div className="h-full w-full rounded-md border border-dashed border-picton-blue/30"></div>
    </div>
  );
}

function HoloCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-picton-blue/20 bg-jelly-bean/10 p-8">
      <div className="pointer-events-none absolute -inset-1 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(61,178,225,.25),transparent)]" />
      <div className="relative">
        <h3 className="text-xl font-bold text-white">Venue perks</h3>
        <ul className="mt-4 space-y-2 text-white/80 font-normal">
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
      {/* Subtle depth variations on dark blue background */}
      <div className="absolute inset-0 bg-gradient-to-b from-biscay via-jelly-bean/20 to-biscay" />

      {/* Dark grid overlay for depth */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh]">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(61,178,225,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(61,178,225,0.1)_1px,transparent_1px)] [background-size:40px_40px] [background-position:center_bottom]" />
      </div>
    </div>
  );
}

function Glitch({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-6xl md:text-8xl font-black tracking-tight">
      <span className="relative z-10 bg-gradient-to-r from-portica via-pastel-green to-portica bg-clip-text text-transparent">
        {children}
      </span>
      {/* RGB ghost layers - Cyberpunk theme */}
      <span className="absolute inset-0 -z-0 translate-x-[2px] translate-y-[2px] select-none text-portica/40 blur-sm">
        {children}
      </span>
      <span className="absolute inset-0 -z-0 -translate-x-[2px] -translate-y-[1px] select-none text-pastel-green/40 blur-sm">
        {children}
      </span>
    </span>
  );
}

function NeonCity() {
  // Pre-calculate building dimensions with seeded random for consistent server/client rendering
  const buildings = useMemo(() => {
    let seed = 12345; // Fixed seed for consistency
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    
    return Array.from({ length: 12 }).map((_, i) => {
      const w = 20 + rand() * 40;
      const h = 80 + rand() * 220;
      const x = 20 + i * 48;
      return { x, w, h };
    });
  }, []);

  return (
    <svg
      viewBox="0 0 600 420"
      className="h-[380px] w-full animate-floaty drop-shadow-[0_0_25px_rgba(61,178,225,0.35)]"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--picton-blue)" />
          <stop offset="50%" stopColor="var(--pastel-green)" />
          <stop offset="100%" stopColor="var(--picton-blue)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="420" fill="transparent" rx="24" />
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
      {buildings.map((building, i) => {
        const { x, w, h } = building;
        return (
          <g key={i}>
            <rect
              x={x}
              y={320 - h}
              width={w}
              height={h}
              fill="#0d1b38"
              stroke="rgba(61,178,225,.2)"
            />
            {/* Windows */}
            {Array.from({ length: 8 }).map((__, j) => (
              <rect
                key={j}
                x={x + 4}
                y={320 - h + 6 + j * 20}
                width={w - 8}
                height={10}
                fill={j % 2 ? "var(--picton-blue)" : "var(--portica)"}
                opacity=".4"
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
          stroke="rgba(61,178,225,.15)"
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1={40 + i * 56}
          x2={200 + i * 32}
          y1="340"
          y2="420"
          stroke="rgba(61,178,225,.15)"
        />
      ))}
      {/* Car */}
      <rect
        x="80"
        y="300"
        width="64"
        height="22"
        rx="4"
        fill="var(--portica)"
        opacity=".9"
      />
      <rect
        x="86"
        y="296"
        width="40"
        height="10"
        rx="2"
        fill="var(--pastel-green)"
        opacity=".9"
      />
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id="lg" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--portica)" />
          <stop offset="50%" stopColor="var(--pastel-green)" />
          <stop offset="100%" stopColor="var(--portica)" />
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
