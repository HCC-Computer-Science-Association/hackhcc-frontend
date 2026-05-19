"use client";

import { MapPin, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

type ScheduleEvent = {
  time: string;
  title: string;
  description?: string;
  location?: string;
  tag?: string;
  tagColor?: "cyan" | "magenta" | "yellow";
  href?: string;
};

const day1: ScheduleEvent[] = [
  {
    time: "9:30–11:30 a.m.",
    title: "Check-in + Networking",
    description:
      "Arrive and check in to receive your badge. Network with sponsors at dedicated tables. Form your team.",
    tag: "NETWORKING",
    tagColor: "yellow",
  },
  {
    time: "11:30 a.m.",
    title: "Opening Ceremony",
    description:
      "Event purpose, competition tracks, rules, and key information outlined.",
    tag: "CEREMONY",
    tagColor: "magenta",
  },
  {
    time: "Noon",
    title: "Lunch + Hacking Begins",
    description: "Hacking begins.",
    tag: "FOOD",
    tagColor: "yellow",
  },
  {
    time: "1:00–2:30 p.m.",
    title: "Fullstack 101",
    description: "Learn the intricacies of fullstack development by a seasoned veteran",
    location: "Room 169",
    tag: "WORKSHOP",
    tagColor: "cyan",
  },
  {
    time: "3:00–4:00 p.m.",
    title: "MLH Workshop: Introduction to Google AI Studio.",
    description: "Workshop by Major League Hacking. Topic: Introduction to Google AI Studio.",
    location: "Room 171",
    tag: "MLH",
    tagColor: "magenta",
  },
  {
    time: "4:00–5:00 p.m.",
    title: "Workshop 2",
    description: "A skills workshop. Topic TBD.",
    location: "Room 169",
    tag: "WORKSHOP",
    tagColor: "cyan",
  },
  {
    time: "5:00 p.m.",
    title: "Doors Lock",
    description:
      "Entry into the building will not be permitted after this time",
    tag: "SECURITY",
    tagColor: "magenta",
  },
  {
    time: "5:00–6:00 p.m.",
    title: "MLH Workshop: Hacking with GitHub Copilot." ,
    description: "Workshop by Major League Hacking. Topic: Hacking with GitHub Copilot.",
    location: "Room 171",
    tag: "MLH",
    tagColor: "magenta",
  },
  {
    time: "6:00–7:00 p.m.",
    title: "Workshop 3",
    description: "A skills workshop. Topic TBD.",
    location: "Room 169",
    tag: "WORKSHOP",
    tagColor: "cyan",
  },
  {
    time: "7:00 p.m.",
    title: "Dinner",
    description:
      "All participants assemble for dinner. The auditorium will be closed for the remainder of the night; restrooms remain accessible.",
    tag: "FOOD",
    tagColor: "yellow",
  },
  {
    time: "8:30–9:30 p.m.",
    title: "Crochet Workshop",
    description: "Social event led by a CSA officer introducing participants to crocheting basics.",
    tag: "SOCIAL",
    tagColor: "yellow",
  },
  {
    time: "9:30–10:00 p.m.",
    title: "Typing Competition",
    description: "A quick typing competition open to all participants.",
    tag: "SOCIAL",
    tagColor: "yellow",
  },
  {
    time: "11:00 p.m.",
    title: "Lights Out",
    description:
      "Most auditorium lights shut off to allow participants to rest. The competition continues through the night.",
    tag: "OVERNIGHT",
    tagColor: "magenta",
  },
];

const day2: ScheduleEvent[] = [
  {
    time: "7:30 a.m.",
    title: "Doors Open",
    description: "The doors to the building reopen.",
    tag: "INFO",
    tagColor: "cyan",
  },
  {
    time: "8:00 a.m.",
    title: "Breakfast",
    tag: "FOOD",
    tagColor: "yellow",
  },
  {
    time: "Noon",
    title: "Submission Deadline",
    description: "Competition ends. All projects must be submitted by this time.",
    tag: "DEADLINE",
    tagColor: "magenta",
  },
  {
    time: "Noon",
    title: "Lunch",
    tag: "FOOD",
    tagColor: "yellow",
  },
  {
    time: "1:15–2:30 p.m.",
    title: "Judging",
    description:
      "Selected judges review participating teams' projects. Format likely involves numbered teams moving through judging stations.",
    tag: "JUDGING",
    tagColor: "cyan",
  },
  {
    time: "3:00 p.m.",
    title: "Closing Ceremony",
    description: "Winners of the event are announced.",
    tag: "CEREMONY",
    tagColor: "magenta",
  },
  {
    time: "4:00 p.m.",
    title: "Check-Out",
    description: "GO HOME",
    tag: "END",
    tagColor: "yellow",
    href: "/GOHOME.jpg",
  },
];

const tagStyles: Record<string, string> = {
  cyan: "border-[#00e5ff] text-[#00e5ff]",
  magenta: "border-[#e91e8c] text-[#e91e8c]",
  yellow: "border-[#fcee0a] text-[#fcee0a]",
};

const borderStyles: Record<string, string> = {
  cyan: "border-[#00e5ff]/60 group-hover:border-[#00e5ff]",
  magenta: "border-[#e91e8c]/60 group-hover:border-[#e91e8c]",
  yellow: "border-[#fcee0a]/60 group-hover:border-[#fcee0a]",
};

function EventCard({ event, onImageClick }: { event: ScheduleEvent; onImageClick?: (src: string) => void }) {
  const color = event.tagColor ?? "cyan";
  const inner = (
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span className="font-mono text-xs text-[#8888aa]">{event.time}</span>
        {event.tag && (
          <span className={`font-mono text-[10px] border px-1.5 py-0.5 ${tagStyles[color]}`}>
            {event.tag}
          </span>
        )}
      </div>
      <h4 className="text-white text-base font-semibold mb-0.5">{event.title}</h4>
      {event.location && (
        <div className="flex items-center gap-1 mb-1">
          <MapPin className="w-3 h-3 text-[#8888aa]" />
          <span className="font-mono text-xs text-[#8888aa]">{event.location}</span>
        </div>
      )}
      {event.description && (
        <p className="text-sm text-[#aaaacc] leading-relaxed">{event.description}</p>
      )}
    </div>
  );

  if (event.href) {
    return (
      <button
        onClick={() => onImageClick?.(event.href!)}
        className={`group relative flex gap-4 pl-4 py-3 border-l-2 ${borderStyles[color]} transition-colors duration-300 cursor-pointer w-full text-left`}
      >
        {inner}
      </button>
    );
  }

  return (
    <div className={`group relative flex gap-4 pl-4 py-3 border-l-2 ${borderStyles[color]} transition-colors duration-300`}>
      {inner}
    </div>
  );
}

export function Schedule() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxSrc]);

  return (
    <>
      <section
        id="schedule"
        className="py-[120px] px-[50px] bg-cp-yellow bg-[url('../img/razor-099e4b40.svg')] bg-[length:auto_45px] bg-[right_top] bg-repeat-x -translate-y-[2px]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="text-dark-navy">EVENT SCHEDULE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-4"></div>
            <p className="text-xl text-dark-navy/80 font-mono">May 22–23, 2026</p>
          </div>

          {/* Two-day columns */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Day 1 */}
            <div className="bg-[#0a0a1f] border border-[#2a2a3a] relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#00e5ff]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#00e5ff]" />

              {/* Day header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[#2a2a3a] bg-[#12121a]">
                <Moon className="w-5 h-5 text-[#e91e8c]" />
                <div>
                  <div className="font-mono text-xs text-[#8888aa] mb-0.5">DAY 01</div>
                  <h3 className="text-[#fcee0a] text-lg leading-none">Friday, May 22</h3>
                </div>
              </div>

              {/* Events */}
              <div className="px-6 py-5 space-y-3">
                {day1.map((event, i) => (
                  <EventCard key={i} event={event} onImageClick={setLightboxSrc} />
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-[#0a0a1f] border border-[#2a2a3a] relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#fcee0a]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#fcee0a]" />

              {/* Day header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[#2a2a3a] bg-[#12121a]">
                <Sun className="w-5 h-5 text-[#fcee0a]" />
                <div>
                  <div className="font-mono text-xs text-[#8888aa] mb-0.5">DAY 02</div>
                  <h3 className="text-[#00e5ff] text-lg leading-none">Saturday, May 23</h3>
                </div>
              </div>

              {/* Events */}
              <div className="px-6 py-5 space-y-3">
                {day2.map((event, i) => (
                  <EventCard key={i} event={event} onImageClick={setLightboxSrc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cp-yellow bg-[url('../img/razor-099e4b40.svg')] bg-[length:auto_45px] bg-[right_bottom] rotate-180 bg-repeat-x px-[50px] py-5 -translate-y-[2px]"></div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxSrc}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}