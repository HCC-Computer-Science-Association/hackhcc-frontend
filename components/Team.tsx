"use client";
import React, { useCallback } from "react";
import { Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { teams } from "@/data/teams";

export function Team() {
  // Initialize Embla with loop enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="team"
      className="py-20 px-4 bg-dark-navy relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-magenta/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyber-cyan/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="text-white text-3xl font-bold">MEET THE TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-neon-yellow mx-auto mb-4"></div>
          <p className="text-xl text-white/80">
            The minds behind HACKHCC: CODERUNNERS
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-16">
          {/* Previous Button */}
          <button
            type="button"
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#12121a] border border-[#2a2a3a] hover:border-[#00f0ff] text-[#e8e8e8] transition-all duration-300 hidden md:flex items-center justify-center group"
            onClick={scrollPrev}
            aria-label="Previous team"
          >
            <ChevronLeft size={28} className="group-hover:text-[#00f0ff] transition-colors" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#12121a] border border-[#2a2a3a] hover:border-[#00f0ff] text-[#e8e8e8] transition-all duration-300 hidden md:flex items-center justify-center group"
            onClick={scrollNext}
            aria-label="Next team"
          >
            <ChevronRight size={28} className="group-hover:text-[#00f0ff] transition-colors" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {teams.map((team) => {
                const teamColorHex =
                  team.color === "yellow"
                    ? "#fcee0a"
                    : team.color === "magenta"
                      ? "#ff2a6d"
                      : "#00f0ff"

                return (
                  <div key={team.name} className="flex-[0_0_100%] min-w-0 px-2">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Left Side: Team Name */}
                      <div className="w-full md:w-64 flex flex-col items-center justify-center shrink-0 py-8">
                        <div
                          className="w-32 h-32  flex items-center justify-center mb-6 overflow-hidden"
                          style={{ borderColor: teamColorHex }}
                        >
                          <Image
                            src={team.icon || "/placeholder.svg"}
                            width={96}
                            height={96}
                            alt={`${team.name} icon`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                        <h3
                          className="text-2xl font-bold text-center tracking-wider"
                          style={{ color: teamColorHex }}
                        >
                          {team.name}
                        </h3>
                        <div
                          className="h-[2px] w-16 mt-4"
                          style={{ backgroundColor: teamColorHex }}
                        />
                      </div>

                      {/* Right Side: Members Grid */}
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {team.members.map((member, index) => {
                          const memberColorHex =
                            member.color === "cyan"
                              ? "#00f0ff"
                              : member.color === "magenta"
                                ? "#ff2a6d"
                                : "#fcee0a"

                          return (
                            <div
                              key={`${member.name}-${index}`}
                              className="group relative  border border-[#2a2a3a] p-6 hover:border-opacity-100 transition-all duration-300"
                              style={
                                {
                                  "--hover-color": memberColorHex,
                                } as React.CSSProperties
                              }
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = memberColorHex
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#2a2a3a"
                              }}
                            >
                              {/* Index */}
                              <div className="absolute top-2 right-2 font-mono text-xs text-[#8888aa]/50">
                                {String(index + 1).padStart(2, "0")}
                              </div>

                              {/* Avatar */}
                              <div className="relative mb-4 flex justify-center">
                                <div
                                  className="w-20 h-20 border-2 flex items-center justify-center overflow-hidden"
                                  style={{ borderColor: `${memberColorHex}50` }}
                                >
                                  <Image
                                    src={`/img/${member.ref}`}
                                    width={80}
                                    height={80}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      // Fallback to initials if image fails
                                      const target = e.target as HTMLImageElement
                                      target.style.display = "none"
                                      const parent = target.parentElement
                                      if (parent) {
                                        const span = document.createElement("span")
                                        span.className = "font-mono text-lg"
                                        span.style.color = memberColorHex
                                        span.textContent = 'test'
                                        parent.appendChild(span)
                                      }
                                    }}
                                  />
                                </div>
                              </div>

                              {/* Info */}
                              <div className="text-center">
                                <h4 className="font-bold text-[#e8e8e8] mb-1">{member.name}</h4>
                                <p
                                  className="font-mono text-xs mb-4"
                                  style={{ color: memberColorHex }}
                                >
                                  {member.role}
                                </p>

                                {/* Social Links */}
                                <div className="flex gap-3 justify-center">
                                  {member.social.github && (
                                    <a
                                      href={member.social.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-8 h-8 border border-[#2a2a3a] hover:border-[#00f0ff] flex items-center justify-center transition-all duration-300 hover:bg-[#00f0ff]/10"
                                      aria-label={`${member.name}'s GitHub`}
                                    >
                                      <Github className="w-4 h-4 text-[#8888aa] hover:text-[#00f0ff]" />
                                    </a>
                                  )}
                                  {member.social.linkedin && (
                                    <a
                                      href={member.social.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-8 h-8 border border-[#2a2a3a] hover:border-[#00f0ff] flex items-center justify-center transition-all duration-300 hover:bg-[#00f0ff]/10"
                                      aria-label={`${member.name}'s LinkedIn`}
                                    >
                                      <Linkedin className="w-4 h-4 text-[#8888aa] hover:text-[#00f0ff]" />
                                    </a>
                                  )}
                                </div>
                              </div>

                              {/* Bottom accent */}
                              <div
                                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                style={{ backgroundColor: memberColorHex }}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {teams.map((team, index) => (
              <button
                type="button"
                key={team.name}
                className="w-3 h-3 border border-[#00f0ff] transition-all"
                style={{
                  backgroundColor:
                    index === 0 ? "#00f0ff" : "transparent",
                }}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to ${team.name} team`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}