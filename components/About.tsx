"use client";
import { Code2, Code, Users, Trophy, Cpu, GraduationCap } from "lucide-react";
import { TimeBox } from "./TimeBox";
import { useCountdown } from "@/utils/useCountdown";

export function About() {
  // const features = [
  //   {
  //     icon: Code2,
  //     title: "BUILD",
  //     description: "Create cutting-edge projects with the latest tech stack",
  //     color: "cyan",
  //   },
  //   {
  //     icon: Users,
  //     title: "CONNECT",
  //     description: "Network with 300+ developers, designers, and innovators",
  //     color: "magenta",
  //   },
  //   {
  //     icon: Trophy,
  //     title: "COMPETE",
  //     description: "Win prizes across multiple challenge tracks",
  //     color: "yellow",
  //   },
  //   {
  //     icon: Cpu,
  //     title: "LEARN",
  //     description:
  //       "Workshops, mentorship, and tech talks from industry leaders",
  //     color: "cyan",
  //   },
  // ];

  const features = [
    {
      icon: Code,
      title: "BUILD",
      description: "Create cutting-edge projects with the latest tech stack",
      color: "#00f0ff",
    },
    {
      icon: Users,
      title: "CONNECT",
      description: "Network with 300+ developers, designers, and innovators",
      color: "#fcee0a",
    },
    {
      icon: Trophy,
      title: "COMPETE",
      description: "Win prizes across multiple challenge tracks",
      color: "#e91e8c",
    },
    {
      icon: GraduationCap,
      title: "LEARN",
      description:
        "Workshops, mentorship, and tech talks from industry leaders",
      color: "#00ff9f",
    },
  ];

  const { d, h, m, s } = useCountdown("2026-05-22T12:00:00-06:00");

  return (
    <>
      <div className="bg-[initial] font-['interceptor'] bg-[url('../img/separator-yellow-f58e9aba.svg')]   w-full z-1">
        Code Runners
      </div>
      <section
        id="about"
        className="py-20 px-4 relative overflow-hidden  bg-cp-yellow "
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-magenta/5 blur-3xl rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="text-dark-navy font-rub">ABOUT THE EVENT</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto"></div>
            {/* Countdown */}
            <div className="mt-10 flex items-center gap-6 justify-center">
              {/* <div className="text-xs uppercase tracking-widest text-dark-navy font-medium">
              Countdown
            </div> */}
              <div className="flex items-center gap-3 text-2xl font-mono text-dark-navy">
                <TimeBox label="days" value={d} />
                <span className="text-dark-navy/40 text-2xl sm:text-5xl lg:text-7xl mb-6 sm:mb-12 lg:mb-16">
                  :
                </span>
                <TimeBox label="hours" value={h} />
                <span className="text-dark-navy/40 text-2xl sm:text-5xl lg:text-7xl mb-6 sm:mb-12 lg:mb-16">
                  :
                </span>
                <TimeBox label="mins" value={m} />
                <span className="text-dark-navy/40 text-2xl sm:text-5xl lg:text-7xl mb-6 sm:mb-12 lg:mb-16">
                  :
                </span>
                <TimeBox label="secs" value={s} />
              </div>
            </div>
          </div>
          
          {/* Here */}
          {/* Main description */}
          <div className="relative  mx-auto">
            <div className="relative bg-[#12121a] border border-[#2a2a3a] p-8 md:p-12">
              {/* Top-left corner */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#00f0ff]" />
              {/* Bottom-right corner */}
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#fcee0a]" />

              <div className="relative  mx-auto">
                {/* Feature cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                  {features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className="group relative bg-[#12121a] border border-[#2a2a3a] p-6 hover:border-opacity-100 transition-all duration-500"
                      style={{ borderColor: feature.color, borderOpacity: 0.3 }}
                    >
                      {/* Corner accent */}
                      <div
                        className="absolute top-0 right-0 w-8 h-8"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}20 50%, transparent 50%)`,
                        }}
                      />
{/* 
                      <div
                        className="w-12 h-12 border flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: feature.color }}
                      >
                        <feature.icon
                          className="w-6 h-6 transition-colors duration-300"
                          style={{ color: feature.color }}
                        />
                      </div> */}

                      <h5
                        className="font-bold text-xl mb-2 tracking-wider"
                        style={{ color: feature.color }}
                      >
                        {feature.title}
                      </h5>
                      <p className="text-[#8888aa] text-sm leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Bottom line accent */}
                      <div
                        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                        style={{ backgroundColor: feature.color }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-[#e8e8e8]">WHY</span>
                <span className="text-[#e8e8e8]"> HACKHCC: </span>
                <span className="text-[#e8e8e8]">CODERUNNERS</span>
                <span className="text-[#e8e8e8]">?</span>
              </h3>

              <div className="space-y-4 text-[#8888aa] leading-relaxed">
                <p>
                  In the heart of Houston&apos;s tech district, we&apos;re
                  bringing together the brightest minds to hack the future.
                  Whether you&apos;re a seasoned developer or just starting your
                  coding journey,
                  <span className="text-[#00f0ff] font-mono"> HACKHCC: CODERUNNERS </span>
                  is your gateway to the next level.
                </p>
                <p>
                  Push the boundaries of what&apos;s possible. Our venue
                  provides the perfect environment for innovation and
                  collaboration.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-[#2a2a3a]">
                {[
                  { value: "300+", label: "Hackers" },
                  { value: "24H", label: "Non-stop" },
                  { value: "RAM", label: "In Prizes" },
                  { value: "FREE", label: "Entry" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-['interceptor'] md:text-3xl font-bold text-[#00f0ff] mb-1">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-[#8888aa]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cp-yellow bg-[url('../img/razor-099e4b40.svg')]  bg-[length:auto_45px] bg-[right_bottom] bg-repeat-x rotate-180 py-5 px-[50px] -translate-y-[2px]"></div>
    </>
  );
}
