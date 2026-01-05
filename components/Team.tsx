import { Github, Linkedin, Twitter } from "lucide-react";
import Image from 'next/image'
 

export function Team() {
  const teamMembers = [
    {
      name: "Arian Din-Kirkebo",
      role: "Director",
      ref: "arian_dk.jpg",
      color: "cyan",
      social: {
        github: "https://github.com/ArianDK",
        linkedin: "https://www.linkedin.com/in/arian-dk/",
      },
    },
    {
      name: "John Pierre",
      role: "Co-Director",
      ref: "john_pierre.JPG",
      color: "magenta",
      social: {
        github: "https://github.com/jpierre-7",
        linkedin: "https://www.linkedin.com/in/johndotpierre/",
      },
    },
    {
      name: "Gabriel Morales",
      role: "Co-Director & Tech Lead",
      ref: "gabriel_m.png",
      color: "yellow",
      social: {
        github: "https://github.com/gabbo-dam",
        linkedin: "https://www.linkedin.com/in/gabbo-mv/",
      },
    },
    {
      name: "Manuel Orozco",
      role: "Experience & Corporate Relations",
      ref: "manuel_orozco.jpg",
      color: "cyan",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/oro-man/",
      },
    },
    {
      name: "Nelson Aviles",
      role: "Experience & Corporate Relations",
      ref: "nelson.jpg",
      color: "magenta",
      social: {
        github: "https://github.com/HefKer",
        linkedin: "https://www.linkedin.com/in/nelson-aviles-9b3603272/",
      },
    },
    {
      name: "Adil Mujeeb",
      role: "Experience",
      ref: "adil_mujeeb.jpeg",
      color: "yellow",
      social: {
        github: "https://github.com/AdilMujeeb99/",
        linkedin: "https://www.linkedin.com/in/adil-mujeeb-2a5b84231/",
      },
    },
    {
      name: "Madison Emshousen",
      role: "Marketing & Design Lead",
      ref: "maddie.jpg",
      color: "cyan",
      social: {
        github: "https://github.com/MEmshousen",
        linkedin: "https://www.linkedin.com/in/madison-emshousen/",
      },
    },
    {
      name: "Lara Iskandar",
      role: "Marketing & Design Lead",
      ref: "lara.jpg",
      color: "magenta",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/lara-iskandar/",
      },
    },
    {
      name: "Khizar Ahmed",
      role: "Tech Lead",
      ref: "khizar_ahmed.png",
      color: "yellow",
      social: {
        github: "https://github.com/khizarahmed9",
        linkedin: "https://www.linkedin.com/in/khizar-ahmed9/",
      },
    },
    {
      name: "Taki Boubekri",
      role: "Experience",
      ref: "Taki.png",
      color: "cyan",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/taki-boubekri-b35953310/",
      },
    },
    {
      name: "Rafay Ahmed Syed",
      role: "Experience & Finance",
      color: "magenta",
      ref: "Rafay.png",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/rafayahmedsyed/",
      },
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-4 bg-dark-navy relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-magenta/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyber-cyan/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-white">MEET THE TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-neon-yellow mx-auto mb-4"></div>
          <p className="text-xl text-white/80">
            The minds behind HACKHCC: CODERUNNERS
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
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
                className={`${borderClass} bg-dark-bg/80 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 group`}
              >
                {/* Avatar */}
                <div className="relative mb-4 overflow-hidden">
                  <div
                    className={`w-full aspect-square ${borderClass} bg-gradient-to-br ${gradientFrom} to-transparent flex items-center justify-center`}
                  >
                    <Image
                      src={`/img/${member.ref}`}
                      width={500}
                      height={500}
                      alt={member.name}
                      className="max-w-[200px] max-h-[200px] w-full h-auto object-cover"

                    />
                    {/* <div className={`text-6xl ${accentColor}`}>
                      {member.name.charAt(0)}
                    </div> */}
                  </div>
                </div>

                {/* Info */}
                <h4 className="text-white mb-1">{member.name}</h4>
                <p className={`mb-3 ${accentColor}`}>{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.social.github}
                    className="w-8 h-8 border border-white/30 hover:border-cyber-cyan flex items-center justify-center transition-all duration-300 hover:bg-cyber-cyan/10"
                  >
                    <Github className="w-4 h-4 text-white/70" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 border border-white/30 hover:border-cyber-cyan flex items-center justify-center transition-all duration-300 hover:bg-cyber-cyan/10"
                  >
                    <Linkedin className="w-4 h-4 text-white/70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Join the Team CTA */}
        {/* <div className="mt-16 text-center">
          <div className="neon-border-yellow bg-dark-bg/80 backdrop-blur-sm p-8 inline-block max-w-2xl">
            <h3 className="mb-4 neon-text-yellow">WANT TO JOIN THE TEAM?</h3>
            <p className="text-white/70 mb-6">
              We're always looking for passionate individuals to help make
              HACKHCC even better. Whether you're into logistics, tech, or
              community building, we'd love to hear from you!
            </p>
            <a
              href="mailto:officialhackhcc@gmail.com?subject=Get%20Involved%20with%20HackHCC"
              className="inline-flex cursor-pointer px-8 py-4 neon-border-magenta hover:bg-cyber-magenta/10 transition-all duration-300"
            >
              <span className="neon-text-magenta">GET INVOLVED</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
