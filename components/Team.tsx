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
        <div className="relative px-8 md:px-12">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight size={32} />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* CRITICAL FIX: 
               1. added 'flex' to make slides horizontal
               2. added 'touch-pan-y' for better mobile scrolling 
            */}
            <div className="flex touch-pan-y">
              {teams.map((team) => {
                const teamColorClass =
                  team.color === "yellow"
                    ? "neon-yellow"
                    : team.color === "magenta"
                    ? "cyber-magenta"
                    : team.color === "cyan"
                    ? "cyber-cyan"
                    : "";
                return (
                  // CRITICAL FIX: added 'flex-[0_0_100%]' and 'min-w-0'
                  <div
                    key={team.name}
                    className="flex-[0_0_100%] min-w-0 pl-4 relative"
                  >
                    <div className="md:grid md:grid-cols-5 p-2 gap-10">
                      
                      {/* Left Side: Team Icon/Name */}
                      <div className="md:col-start-1 m-auto flex flex-col items-center justify-center w-full mb-8 md:mb-auto">
                        <div className="h-48 w-full flex items-center justify-center mb-4">
                          <Image
                            src={team.icon}
                            width={500}
                            height={500}
                            alt={team.name}
                            className="max-h-full w-auto object-contain"
                          />
                        </div>
                        <div className="h-16 w-full flex items-center justify-center">
                          <h3 className={`text-center text-2xl font-bold text-${teamColorClass}`}>
                            {team.name}
                          </h3>
                        </div>
                      </div>

                      {/* Right Side: Members Grid */}
                      <div className="md:col-start-2 md:col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.members.map((member, index) => {
                          const borderClass =
                            member.color === "cyan"
                              ? "neon-border-cyan"
                              : member.color === "magenta"
                              ? "neon-border-magenta"
                              : "neon-border-yellow";

                          const accentColor =
                            member.color === "cyan"
                              ? "text-cyber-cyan"
                              : member.color === "magenta"
                              ? "text-cyber-magenta"
                              : "text-neon-yellow";

                          const gradientFrom =
                            member.color === "cyan"
                              ? "from-cyber-cyan/20"
                              : member.color === "magenta"
                              ? "from-cyber-magenta/20"
                              : "from-neon-yellow/20";

                          return (
                            <div
                              key={index}
                              className={`${borderClass} bg-dark-bg/80 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 group rounded-xl border border-white/10`}
                            >
                              {/* Avatar */}
                              <div className="relative mb-4 overflow-hidden flex justify-center">
                                <div
                                  className={`w-32 h-32 rounded-full ${borderClass} bg-gradient-to-br ${gradientFrom} to-transparent flex items-center justify-center overflow-hidden`}
                                >
                                  <Image
                                    src={`/img/${member.ref}`}
                                    width={500}
                                    height={500}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>

                              {/* Info */}
                              <div className="text-center">
                                <h4 className="text-white text-lg font-semibold mb-1">
                                  {member.name}
                                </h4>
                                <p className={`text-sm mb-4 ${accentColor}`}>
                                  {member.role}
                                </p>

                                {/* Social Links */}
                                <div className="flex gap-3 justify-center">
                                  {member.social.github && (
                                    <a
                                      href={member.social.github}
                                      target="_blank"
                                      className="w-8 h-8 rounded-full border border-white/30 hover:border-cyber-cyan flex items-center justify-center transition-all duration-300 hover:bg-cyber-cyan/10"
                                    >
                                      <Github className="w-4 h-4 text-white/70" />
                                    </a>
                                  )}
                                  {member.social.linkedin && (
                                    <a
                                      href={member.social.linkedin}
                                      target="_blank"
                                      className="w-8 h-8 rounded-full border border-white/30 hover:border-cyber-cyan flex items-center justify-center transition-all duration-300 hover:bg-cyber-cyan/10"
                                    >
                                      <Linkedin className="w-4 h-4 text-white/70" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}